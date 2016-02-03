import {inject} from '../node_modules/dose/dist/Dose';
import User from './User';
import InjectableKeys from './InjectableKeys';

export default class UserConsumer {

    @inject(InjectableKeys.User)
    private user: User;

    @inject(InjectableKeys.Settings)
    private settings: any;

    @inject(InjectableKeys.User, InjectableKeys.Settings)
    getUserAge(user?: User, settings?: {DEBUG: boolean}) {
        if (settings.DEBUG) {
            console.log('Getting user age');
        }
        return user.age;
    }

    getUserName() {
        console.log(this.settings);
        if (this.settings.DEBUG) {
            console.log('Getting user name');
        }
        return this.user.name;
    }
}
