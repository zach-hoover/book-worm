const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://zachhoover37:5dDvHjO0Q5ag5rGt@cluster0.bp2bt54.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true,});

module.exports = mongoose.connection;
