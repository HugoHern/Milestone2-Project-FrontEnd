import App from './src/App';
const express = require('express');
const app = express();
require('dotenv').config()

app.get('/', (req, res) => {
    res.send(App)
})

app.listen(process.env.PORT)