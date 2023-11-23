const mongoose = require('mongoose');

mongoose.connect('', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log('Connected to mongo db'))