


module.exports.checkAuthentication = async (req, res, next) => {
  try {
    // if (req.xhr && !req.isAuthenticated()) {
    //   return res.status(401).json({
    //     msg: "Login First",
    //   });
    // }
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/login");
    }
  } catch (error) {
    res.render("error", { err: error.message });
  }
};
