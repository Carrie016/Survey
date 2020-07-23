const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//when a body comes to our application this middleware
// will parse the body and assign it to req.body property
// of the incoming request object
app.use(bodyParser.json());
app.use(
  //these are middleware that somehoe operte on the
  // incoming requests before they are sent off to our
  // request handlers
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

//require('./routes/authRoutes') returns
// a function and app is passed into it
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets
  //like main.js, or main.class

  //from my understanding express checks
  // if it express server has this route
  app.use(express.static("client/build"));

  //express will serve up the index.html
  // if it doesn't recognize the route

  //from my understanding et * below
  // checks react end routes as stated in require libs on top
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
