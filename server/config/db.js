import mongoose from 'mongoose';

const keys = require('./keys');

console.log(keys);
export default () => {
  mongoose.Promise = global.Promise;
  /* local db */
  // mongoose.connect('mongodb://localhost/meetup');
  
  mongoose.connect(keys.mongoURI);

  mongoose.connection
    .once('open', () => console.log('mongodb running'))
    .on('err', () => console.log(err));
};
