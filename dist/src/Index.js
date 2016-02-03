var InjectableKeys_1 = require('./InjectableKeys');
var Dose_1 = require('../node_modules/dose/dist/Dose');
var User_1 = require('./User');
/* Register the User */
var instance = new User_1.default('John', 'Smith', 25);
Dose_1.default.register(InjectableKeys_1.default.User, instance);
/* Register Application Settings */
var settings = { DEBUG: false };
Dose_1.default.register(InjectableKeys_1.default.Settings, settings);
/* Consume the User */
var UserConsumer_1 = require('./UserConsumer');
var consumer = new UserConsumer_1.default();
console.log("User name: " + consumer.getUserName() + ", Age: " + consumer.getUserAge() + ".");
/* Override registered value */
settings.DEBUG = true;
console.log("User name: " + consumer.getUserName() + ", Age: " + consumer.getUserAge() + ".");
