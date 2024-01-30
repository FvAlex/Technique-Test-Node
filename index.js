const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

console.log("Démarrage serveur NodeJs technique test");

const route = require("./src/routes/route");

route.init(app);

app.listen(process.env.PORT || 3000);
