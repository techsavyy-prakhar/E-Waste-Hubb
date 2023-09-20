require("dotenv").config();

const express = require("express");

const app = express();
const port = 8000;

const path = require("path");
const mongoose = require("mongoose");

const ejsMate = require("ejs-mate");


const bodyParser = require('body-parser');

const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");
const MongoStore = require("connect-mongo");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.json());

const db_url =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/E-Waste-Facility-Locator";
const secret = process.env.SECRET;

mongoose
  .connect(db_url)

  .then(() => {
    console.log("E-Waste-Facility-Locator Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  session({
    store: MongoStore.create({ mongoUrl: db_url }),
    secret: "weneedabettersecret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    User.authenticate()
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

/* Category Routes */
const categoryRoutes = require("./routes/categoryroutes");
app.use(categoryRoutes);

/*Product Routes*/
const productRoutes = require("./routes/productroutes");
app.use(productRoutes);

/*Auth Routes*/
const authRoutes = require("./routes/authroutes");
app.use(authRoutes);

/*Map Routes*/
const mapRoutes = require("./routes/maproutes");
app.use(mapRoutes);

app.listen(port, () => {
  console.log("The Server is up at the ", port);
});
