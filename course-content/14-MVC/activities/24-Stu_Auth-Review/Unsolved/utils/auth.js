const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // redirects to login if not looged in. If logged in then continue on with the function
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
