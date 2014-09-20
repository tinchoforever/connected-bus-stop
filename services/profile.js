var coreMongoose = require("../services/core-mongoose");

var mongoose = coreMongoose.mongoose;

exports.models = {};


//Schema City
var ProfileSchema = mongoose.Schema({
    video: String,
    name: String,
    where: String,
    when: String,
    website: String
});


var Profile = mongoose.model('Bands', ProfileSchema);
exports.models.Profile = Profile;

exports.save = function(item, callback){
  console.log(item);
  var p = new exports.models.Profile({
      video: item.video,
      name: item.name,
      where: item.where,
      when: item.when,
      website: item.website
  });
  p.save(function (err) {
                if (err) {
                   console.log(err);
                   callback();
                }
                else {
                    console.log("OK");
                    callback();
                }
            });

};
exports.clear = function(callback){
  exports.models.Profile.remove({}, function(err) {
     console.log('collection removed');
     callback();
  });
};


exports.getAll = function(callback){
    var query = Profile.find()
      .exec(function (err, docs){
        if (docs.length > 0 ) {
              callback(docs);
        }
        else {
            callback([]);
        }
    });
};