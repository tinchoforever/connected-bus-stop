var mongoose = require('mongoose');
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/missing';

mongoose.connect(uristring);


exports.mongoose = mongoose;