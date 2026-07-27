const { test, expect } = require('@playwright/test');

test('get a post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);

    const post = await response.json();
    expect(post.title).toBeTruthy();
    expect(post.userId).toBe(1);

});

test('get a non-existant post returns 404', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/9999');

    expect(response.status()).toBe(404);
})

test('create a post', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
            title: 'My new post',
            body: 'some content',
            userId: 1,
        }
    });

    expect(response.status()).toBe(201);

    const post = await response.json();
    expect(post.title).toBe('My new post');
});