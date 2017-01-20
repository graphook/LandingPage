import Express from 'express';
import config from './config';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';
import httpProxy from 'http-proxy';
import session from 'client-sessions';
import bodyParser from 'body-parser'

import routes from './serverRoutes.map'

const targetUrl = process.env.API_URL;
const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer({
  target: targetUrl
});

import request from 'superagent';

if (process.env.ENV === 'prod') {
  app.use((req, res, next) => {
    if (req.get('x-forwarded-proto') !== 'https') {
      res.redirect('https://' + req.hostname + req.originalUrl);
    } else
      next()
  });
}
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(session({
  cookieName: 'session',
  secret: process.env.SESSION_SECRET,
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));

app.use('/api', (req, res, next) => {
  if (req.session.secret === process.env.SESSION_SECRET) {
    next()
  } else {
    res.status(401).send('must call this route from the web page')
  }
});
app.use('/api/login', bodyParser.json());
app.post('/api/login', (req, res) => {
  request.post(process.env.API_URL + '/v1/auth/token')
    .set('Authorization', process.env.CLIENT_SECRET)
    .send(req.body)
    .end((err, result) => {
      if (err) {
        if (result.error) {
          res.status(400).send(result.body)
        }
      } else {
        req.session.user = result.body.auth.user;
        req.session.token = result.body.auth.token;
        res.send(result.body.auth.user);
      }
    });
});
app.get('/api/logout', (req, res) => {
  delete req.session.token;
  delete req.session.user;
  res.send();
});
proxy.on('proxyReq', (proxyReq, req, res, options) => {
  if (req.session.token) {
    proxyReq.setHeader('Authorization', req.session.token);
  } else {
    proxyReq.setHeader('Authorization', process.env.CLIENT_SECRET);
  }
});
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.use(Express.static(path.join(__dirname, '..', 'static')));

routes.forEach((route) => {
    try {
      if (route.middleware) {
        route.middleware.forEach((func) => {
          app[route.method](route.path, func);
        });
      }
      if (route.handler) {
        app[route.method](route.path, route.handler);
      }
    } catch(e) {
      console.error('Error at route ', route, e);
    }
  });

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
