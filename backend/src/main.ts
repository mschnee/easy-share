import Express from 'express';
import {logger} from './lib/logging';
const PORT = process.env['BASE_PORT'] ?? 40081;
const app = Express();

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
