console.log('API Route Connected')
var path = require('path');

//Link Friends Data
var friends = require('../data/friends')

module.exports =function (app){
    
    app.get('/api/survey', function (req, res) {
        res.json(friends);
    })

    app.post('/api/survey', function(req, res){
        var userInput = {
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        };
        console.log(req.body)

        let userResponse=userInput.scores;

        for (let i = 0; i < userInput.scores.length; i++){
            userInput.scores[i]=parseInt(userResponse[i])
        }

        let matchName = ""
        let matchImage =""
        let totalDifference = 10000

            for (let i = 0; i < friends.length; i++){
                let eachDifference=0;
                for (let j = 0; j < userResponse.length; j++){
                    let score = userResponse[j];
                    eachDifference += Math.abs(friends[i].scores[j]-score)
                }
                if (eachDifference < totalDifference){
                    totalDifference=eachDifference;
                    matchName=friends[i].name
                    matchImage=friends[i].photo
                }
            }
            friends.push(userInput)
            res.json({
                matchName: matchName,
                matchImage: matchImage
            })
    })
}
