const { response, request } = require('express');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
// app.use(express.static(__dirname));

app.get('/', (request, response) => {
    response.render('home.ejs');
    // response.sendFile(__dirname + '/home.html');
});
app.get('/contact', (request, response) => {
    response.render('contact.ejs');
});
app.get('/profile', (request, response) => {
    const person = {
        name: 'Sohee Kwon',
        age: 23,
        job: 'student',
        hobbies: ['drawing', 'swimming']
    };
    response.render('profile.ejs', {person: person});
    // app.get('/profile/:id')
    // response.send('You requested to see a profile with the id of ' + request.params.id);
});

app.listen(3000);