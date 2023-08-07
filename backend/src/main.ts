import Express from 'express';
import {logger} from './lib/logging.js';
import {mongoClient} from './prisma/mongodb.js';
import {postgresClient} from './prisma/postgres.js';

export async function main() {
  const PORT = process.env['BASE_PORT'] ?? 40081;

  const app = Express();

  await Promise.all([postgresClient.$connect(), mongoClient.$connect()]);

  app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });

  const server = app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });

  const icount = await postgresClient.identity.count();
  const docCount = await mongoClient.userPost.count();
  logger.info(`Identity count: ${icount}`);
  logger.info(`Document count: ${docCount}`);

  logger.info('Application started');
  return server;
}
