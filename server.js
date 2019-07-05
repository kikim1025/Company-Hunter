const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, './client/build')));
} else {
    app.use(express.static(path.join(__dirname, './client/public')));
};

// Fixing deprecation warnings
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Routes
require('./routes/apiRoutes')(app);
//require('./routes/htmlRoutes')(app);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/company-hunter_db';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, function() {
    console.log(`App running on port ${PORT}`);
});