require('./config/config');

const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname,'../public' );

const port = process.env.PORT

var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    if (port == 3000) {
        console.log('Started. Listen on local port 3.000');
    } else{
        console.log(`Started. Listen on port ${port}`);
    }
});

module.exports = {app};



