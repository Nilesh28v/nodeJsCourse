const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/learnpara/:name/:age', function (req, res) {                //http://localhost:3000/learnquery/mukesh/age=3
    res.send('Hello World' + req.params.name + req.params.age)
});
app.get('/learnquery', function (req, res) {                      //http://localhost:3000/learnquery?name=mukesh &age=3
    res.send('Hello' + req.query.name + req.query.age)
});

app.post('/learnqueryy', (req, res) =>{ 
    console.log(req.body.city, req.body.pincode);
    res.send(`Hello ${req.query.city} ${req.query.pincode}`)
});

app.post('/postparam', function (req, res) { 
    res.send(`Hello ${req.params.city} ${req.params.pincode}`)
});


app.get('/showMobileDetails', function (req, res) {
    const samsung = {
        model: 's3',
        releaseDate:'2020',
        price:24345
    }
    res.send(samsung);
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

