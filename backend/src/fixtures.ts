import {main} from './main';

let server;
export async function mochaGlobalSetup() {
  server = await main();
}
export async function mochaGlobalTeardown() {
  server!.close();
}
