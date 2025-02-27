import { test, expect } from 'vitest';
import request from 'supertest';
import app from './index';

test('GET /todos/1 should return a todo item', async () => {
  const response = await request(app).get('/todos/1');

  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty('userId', 1);
  expect(response.body).toHaveProperty('id', 1);
  expect(response.body).toHaveProperty('title', 'Sample Todo');
  expect(response.body).toHaveProperty('completed', false);
});


import { describe, it, expect } from 'vitest';
import { sum } from './utils'; // Example function

describe('Sum Function', () => {
  it('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
