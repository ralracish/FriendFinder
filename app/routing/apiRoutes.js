console.log('API Route Connected')
var path = require('path');

//Link Friends Data
var friends = require('../data/friends')

module.exports =function (app){
    
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    })

    var match='';
    var matchImage=''

    app.post('/api/friends', function(req, res){
        var addFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };
        
        var scoresArray = [];
        for (var i=0; i < req.body.scores.length; i++){
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        
        addFriend.scores = scoresArray
        
        var compareScoresArray = [];
        for(var i=0; i < friendsData.length; i++){
        
            var compare = 0;
            for (var j=0; j < addFriend.scores.length; j++){
                compare += Math.abs(addFriend.scores[j])
            }
            compareScoresArray.push(compare)
        }
        
        var match = 0;
        for (var i =1; i < compareScoresArray.length; i++) {
            if (compareScoresArray[i] <= compareScoresArray[match]){
                match=i;
            }
        }
    })
}
