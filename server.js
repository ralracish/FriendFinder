const path = require("path")
const express = require('express');

//Set up Express
const app = express();
const PORT = process.env.PORT || 7777
;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './app/public')));

// ROUTING
// ================================================================================
// 
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


//Make the PORT listen
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
    
});