const path = require('path');
const express = require('express');

const app = express();

console.log(__dirname);

console.log(__filename);
const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs');

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'jai chand'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        name: 'jai chand',
        title: 'About me'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        message: 'This is a sample help messege'
    })
})

app.get('/weather', (req, res) => {
    res.send('<h3>weather</h3>')
})


app.listen(3000, () => { console.log('running in 3000') });