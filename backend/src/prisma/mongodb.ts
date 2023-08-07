export type * from './mongodb/generated/index.js';
import {PrismaClient as MongoClient} from './mongodb/generated/index.js';

export const mongoClient = new MongoClient({});
