import axios from 'axios';
import {expect} from 'chai';

describe('Health Check', () => {
  it('should return 200', async () => {
    const client = axios.create({
      baseURL: 'http://localhost:40081',
    });
    const response = await client.get('/health');
    expect(response.status).to.eq(200);
  });
});
