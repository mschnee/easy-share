import Express from 'express';
import {logger} from './lib/logging.js';
import {mongoClient} from './prisma/mongodb.js';
import {postgresClient} from './prisma/postgres.js';

const PORT = process.env['BASE_PORT'] ?? 40081;

async function main() {
  const app = Express();

  await Promise.all([postgresClient.$connect(), mongoClient.$connect()]);

  app.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}`);
  });

  const icount = await postgresClient.identity.count();
  const docCount = await mongoClient.userPost.count();
  logger.info(`Identity count: ${icount}`);
  logger.info(`Document count: ${docCount}`);
}

main()
  .then(() => {
    logger.info('Application started');
  })
  .catch(e => {
    logger.error(e);
  });
