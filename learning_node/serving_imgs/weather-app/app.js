const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('<h1>visited root</h1>');
})

app.get('/help', (req, res) => {
    res.send('<h1>visited help</h1>');
})

app.get('/weather', (req, res) => {
    res.send([{ location: 'hyderabad', forecast: 'rainy' }, { location: 'vijayawada', forecast: 'sunny' }]);
})

app.get('/about', (req, res) => {
    res.send('<h1>visited about</h1>');
})

app.listen(3000, () => {
    console.log('port started to listen on port 3000');
})