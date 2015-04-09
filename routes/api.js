var express      = require('express');
router           = express.Router();
var base         = require ('./app_module_routes/baseRouter');
var central      = require ('./app_module_routes/centralRouter');
// var channel = require ('./app_module_routes/channelRouter');
// var chat = require ('./app_module_routes/chatRouter');
var location     = require ('./app_module_routes/locationRouter');
var plansBI      = require ('./app_module_routes/plansBIRouter');
var subscription = require ('./app_module_routes/subscriptionPlanRouter');
var taxi         = require ('./app_module_routes/taxiRouter');
// var mongoose = require( 'mongoose' );

//Used for routes that must be authenticated.
function isAuthenticated (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler 
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects

  //allow all get request methods
  if ( req.method === "GET") {
    return next();
  }
  if (req.isAuthenticated()) {
    return next();
  }

  // if the user is not authenticated then redirect him to the login page
  return res.redirect('/#login');
};

router.use('/centrals', isAuthenticated);

module.exports = router;