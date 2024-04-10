const mongoose = require('mongoose');

export const connect = async () => {
  try {
    const url = process.env.MONGODB_URI;
    await mongoose.connect(url, {});
    console.log('MongoDB is conected');
  } catch (error : any) {
    console.log(error.message);
  }
};

export const disconnect = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB is disconnected');
  } catch (error : any) {
    console.log(error.message);
  }
}

