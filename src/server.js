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
import Url from 'url';
import {startMongo, db} from './mongo';

import routes from './serverRoutes.map'

const targetUrl = process.env.API_URL;
const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);
const proxy = httpProxy.createProxyServer();

// TODO: Remove these
import request from 'superagent';
import needle from 'needle';
import rawBody from 'raw-body';


/*if (process.env.ENV === 'prod') {
  app.use((req, res, next) => {
    if (req.get('x-forwarded-proto') !== 'https') {
      res.redirect('https://' + req.hostname + req.originalUrl);
    } else
      next()
  });
}*/
startMongo();

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(session({
  cookieName: 'clientSession',
  secret: process.env.SESSION_SECRET,
  duration: 3 * 365 * 24 * 60 * 60 * 1000,
  activeDuration: 5 * 60 * 1000
}));


app.use('/email', bodyParser.json());

app.use(Express.static(path.join(__dirname, '..', 'static')));

app.post('/email', (req, res) => {
  if (req.clientSession.secret === process.env.SESSION_SECRET) {
    db.email.insert({ ...req.body, date: (new Date).toString() }).then(() => {
      res.send();
    }).catch(() => {
      res.status(500).send()
    });
  } else {
    res.status(401).send('must call this route from the web page')
  }
});

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
