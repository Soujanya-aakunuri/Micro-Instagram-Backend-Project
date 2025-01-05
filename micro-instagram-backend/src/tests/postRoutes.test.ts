import request from 'supertest';
import app from '../app';

describe('Post Routes', () => {
  it('should return all posts', async () => {
    const res = await request(app).get('/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
