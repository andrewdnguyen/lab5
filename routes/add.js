var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
    var name = req.query.name;
    var description = req.query.description;
    var newJson= {"name":name, "description":description, "imageURL":"http://lorempixel.com/500/500/people"};
    console.log(newJson);
    data.friends.push(newJson);
    res.render('index.handlebars', data);
  }

