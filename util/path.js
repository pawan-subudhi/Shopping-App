const path = require('path');

module.exports = path.dirname(process.mainModule.filename); //process.mainModule.filename this is responible to give the filename of the file who is responsible for spinning up the app i.e app.js