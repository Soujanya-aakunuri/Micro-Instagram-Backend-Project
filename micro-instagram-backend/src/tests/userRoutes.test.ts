import request from 'supertest';
import app from '../app';

describe('User Routes', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
