const path = require('path');
const express = require('express');

const app = express();

console.log(__dirname);

console.log(__filename);

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.send('<h3>root</h3>')
})

app.get('/weather', (req, res) => {
    res.send('<h3>weather</h3>')
})


app.listen(3000, () => { console.log('running in 3000') });