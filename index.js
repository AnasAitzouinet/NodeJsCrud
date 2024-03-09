// create a whole crud app with express and mongodb

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const UserRoute = require('./routes/Auth');
const EquipeRoute = require('./routes/Equipe');

// middleware
app.use(bodyParser.json());

// DB Config
const db = require('./db/connection');

// Routes
app.use('/api', UserRoute);
app.use('/api', EquipeRoute);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

