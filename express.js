const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Hello, node express!');
});
app.get('/contact', (request, response) => {
    response.send('This is the contact page');
});

app.listen(3000);