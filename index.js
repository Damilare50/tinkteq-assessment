import express from 'express';
import 'dotenv/config';
import { mongoUri } from './config/database.js';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import { authRouter } from './src/routers/auth.js';

const appPort = parseInt(process.env.PORT);

// app & addons
const app = express();

// global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

//routes
app.use('/api/auth', authRouter);

// connect to db and start server(if db connection is successful)
mongoose
  .connect(mongoUri, { dbName: 'rbac-task' })
  .then(() => {
    console.log('Connected to database');
    app.listen(appPort, () => {
      console.log(`Server started on port ${appPort}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database: ', err);
  });
