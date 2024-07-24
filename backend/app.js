const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect to the database (assuming you have a connect.js file in the config folder)
require('./config/connect');

const eventController = require('./controller/eventController');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/events', eventController);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
