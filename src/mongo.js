import {MongoClient} from 'mongodb';
import {promisifyAll} from 'bluebird';

export const db = {};

export function startMongo(cb) {
  let uriString = uriString = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS +
      '@' + process.env.MONGO_URL + '/' + process.env.MONGO_DB;
  if (!process.env.MONGO_USER || !process.env.MONGO_PASS) {
    uriString = 'mongodb://' + process.env.MONGO_URL + '/' + process.env.MONGO_DB;
  }

  // Use connect method to connect to the Server
  MongoClient.connect(uriString, (err, database) => {
    if (err) {
      console.info(err);
    } else {
      console.info("Connected correctly to mongo");
      db.connection = database;
      db.email = promisifyAll(database.collection('email'));
    }
    if (cb) { cb() };
  });
}
