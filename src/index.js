var express = require("express");

var app = express();

console.log("Démarrage serveur NodeJs technique test");

var route = require("./routes/route");

route.init(app);

app.listen(process.env.PORT || 3000);
