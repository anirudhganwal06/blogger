const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.mongoURI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const authRoutes = require('./routes/api/auth');

app.use('/api/auth', authRoutes);

const PORT = 5000 || process.env.PORT;
mongoose.connect(
    mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(res => {
        app.listen(PORT, console.log(`Server started @${PORT}`));
    })
    .catch(err => {
        console.log(err);
    });