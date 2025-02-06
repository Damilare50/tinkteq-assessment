import express from 'express';
import 'dotenv/config';
import { mongoUri } from './config/database.js';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';
import { authRouter } from './src/routers/auth.js';
import { adminRouter } from './src/routers/admin.js';
import { shipperRouter } from './src/routers/shipper.js';
import { carrierRouter } from './src/routers/carrier.js';

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
app.use('/api/admin', adminRouter);
app.use('/api/shipper', shipperRouter);
app.use('/api/carrier', carrierRouter);

// connect to db and start server(if db connection is successful)
mongoose
  .connect(mongoUri, { dbName: 'rbac-task' })
  .then(() => {
    console.log(`Connected to ${process.env.APP_MODE} database`);
    app.listen(appPort, () => {
      console.log(`Server started on port ${appPort}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to database: ', err);
  });
