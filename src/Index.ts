import InjectableKeys from './InjectableKeys';
import Injector from '../node_modules/dose/dist/Dose';
import User from './User';


/* Register the User */
let instance = new User('John', 'Smith', 25);
Injector.register(InjectableKeys.User, instance);

/* Register Application Settings */
let settings = {DEBUG: false};
Injector.register(InjectableKeys.Settings, settings);

/* Consume the User */
import UserConsumer from './UserConsumer';
let consumer = new UserConsumer();
console.log(`User name: ${consumer.getUserName()}, Age: ${consumer.getUserAge()}.`);


/* Override registered value */
settings.DEBUG = true;
console.log(`User name: ${consumer.getUserName()}, Age: ${consumer.getUserAge()}.`);
