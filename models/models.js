var mongoose = require('mongoose');
// require all application schemas
var centralSchema         = require('./app_models/centralSchema');
var baseSchema            = require('./app_models/baseSchema');
var taxiSchema            = require('./app_models/taxiSchema');
var locationSchema        = require('./app_models/locationSchema');
var chatsSchema           = require('./app_models/chatsSchema');
var channelSchema         = require('./app_models/channelSchema');
var UserSchema            = require('./app_models/UserSchema');
var subscritionPlanSchema = require('./app_models/subscritionPlanSchema');
var plansBISchema         = require('./app_models/plansBISchema');

// Publishing models
mongoose.model('Central'          , centralSchema);
mongoose.model('Base'             , baseSchema);
mongoose.model('Taxi'             , taxiSchema);
mongoose.model('Location'         , locationSchema);
mongoose.model('Chat'             , chatsSchema);
mongoose.model('Channel'          , channelSchema);
mongoose.model('User'             , UserSchema);
mongoose.model('SubscriptionPlan' , subscritionPlanSchema);
mongoose.model('PlansBI'          , plansBISchema);



