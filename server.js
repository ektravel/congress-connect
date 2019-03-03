const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

//Define middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Serve static assets (for heroku)
if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

//Send all requests to the React app
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function(){
    console.log(`Server listening on port ${PORT}`);
});