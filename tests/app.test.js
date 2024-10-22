const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
    it('should return Welcome to the new developers from Fly.io on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Welcome to the new developers from Fly.io');
    });

    it('should echo back the posted data on POST /echo', async () => {
        const data = { name: 'Test User' };
        const response = await request(app).post('/echo').send(data);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(data);
    });
});