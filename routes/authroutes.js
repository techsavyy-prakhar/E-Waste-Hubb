const router = require("express").Router();
const User = require("../models/user");
const passport = require("passport");

router.get("/register", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});



router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({ username, email });
        const newUser = await User.register(user, password);
        await newUser.save();

        req.flash("success", "You are registed successfully!");
        res.redirect("/login");
    } catch (error) {
        req.flash("error","Registration Failed. Please Try again");
        res.redirect("/register");
    }

  
});


router.post(
  "/login",

  passport.authenticate("local", { failureRedirect: "/login" }),

  
  function (req, res) {
    req.flash("success", `Welcome, ${req.user.username}!`);
    res.redirect("/home");
  }
);
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }

    res.redirect("/login");
  });
});

module.exports = router;
