import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  //mongoose.connect('mongodb://localhost/beer');
  mongoose.connect('mongodb://josep:12345@ds111138.mlab.com:11138/beer-api');
  mongoose.connection
    .once('open', () => console.log('mongodb running'))
    .on('err', () => console.log(err));
};
