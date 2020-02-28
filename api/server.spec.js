const request = require('supertest');
const server = require('./server');

describe('test server.js', () => {
    it('should set the testing enviroment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });
});