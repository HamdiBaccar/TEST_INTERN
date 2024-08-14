require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Connect to the database using the connect.js file
require('./config/connect');

const eventController = require('./controller/eventController');
const authRoutes = require('./controller/auth');
const FriendSuggRoutes = require('./controller/FriendSuggestion');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/events', eventController); // Your existing routes
app.use('/api/auth', authRoutes); // Your teammate's auth routes
app.use('/api', FriendSuggRoutes); // Your teammate's friend suggestion routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
