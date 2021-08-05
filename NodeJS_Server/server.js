var express = require("express");
var app     = express();
app.use(express.static("./source"));
app.set("view engine","ejs");
app.set("./","index.html");

var server = require("http").Server(app);
var io     = require("socket.io")(server);
server.listen(process.env.PORT||3000);
//////////////////////////////////////////////////////////////
app.get("./", function(req, res){ res.render("index"); }); 