import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const app = express();
const DB_URL =
  'mongodb+srv://user:user@cluster0.t0yye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use('/api', router);


async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(3000, () => {
      console.log('Server is running on 3000 port');
    });
  } catch (e) {

    console.log(e);
  }
}

startApp();
