export type * from './postgres/generated/index.js';
import {PrismaClient as PostgresClient} from './postgres/generated/index.js';

export const postgresClient = new PostgresClient();
