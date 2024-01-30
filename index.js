const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./src/errors/errorHandler");
const app = express();

app.use(cors());

console.log("Démarrage serveur NodeJs technique test");

const route = require("./src/routes/route");

route.init(app);

app.use(errorHandler);
app.listen(process.env.PORT || 3000);
