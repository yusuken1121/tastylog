const PORT = process.env.PORT || 3000;
const path = require("path");
const express = require("express");
const favicon = require("serve-favicon");
const app = express();

//env setting
require("dotenv").config();


//express setting
app.set("view engine","ejs");

//static resource rooting
app.use(favicon(path.join(__dirname,"/public/favicon.ico")));
app.use("/public", express.static(path.join(__dirname,"/public")));

//Dynamic resouce rooting
app.use("/",require("./routes/index.js"));

app.listen(PORT,()=>{
    console.log(`Applicaion listening at ${PORT}`);
});
