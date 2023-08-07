import {MongoClient} from 'mongodb';
import {logger} from './lib/logging';

const client = new MongoClient(process.env['MONGO_URL']!);
await client.connect();

logger.warn(`Dropping database at ${process.env['MONGO_URL']!}`);
await client.db().dropDatabase();
logger.info('done');

process.exit(0);
