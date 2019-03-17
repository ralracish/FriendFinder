console.log('API Route Connected')
var path = require('path');

//Link Friends Data
var friends = require('../data/friends')

module.exports =function (app){
    
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function(req, res){
        var addFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
    
    })
}
