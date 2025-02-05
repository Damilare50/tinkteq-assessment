import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

const mongod = await MongoMemoryServer.create();
export const mongoUri =
  process.env.APP_MODE === 'test' ? mongod.getUri() : process.env.MONGO_URI;
