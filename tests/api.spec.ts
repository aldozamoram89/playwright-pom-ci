import { test, expect, request } from '@playwright/test';

test('GET /posts/1 - jsonplaceholder', async () => {
  const context = await request.newContext();
  const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toMatchObject({
    id: 1,
    userId: expect.any(Number),
    title: expect.any(String),
    body: expect.any(String),
  });
});