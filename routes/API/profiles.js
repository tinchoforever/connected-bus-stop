var profileRepository = require("../../services/profile");


exports.all = function(req, res){
  profileRepository.getAll(function(data){
      res.json(data);
      res.end();
  });
};

exports.all = function(req, res){
  profileRepository.getAll(function(data){
      res.json(data);
      res.end();
  });
};
exports.clear = function(req,res){
  profileRepository.clear(function(data){
      res.json(data);
      res.end();
  });

};
exports.save = function(req, res){
  console.log(req.body);
  var item = req.body;
  profileRepository.save(item, function(){
      res.json({success:true});
      res.end();
  });
};

