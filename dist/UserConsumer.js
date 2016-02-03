var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Dose_1 = require('../node_modules/dose/dist/Dose');
var User_1 = require('./User');
var InjectableKeys_1 = require('./InjectableKeys');
var UserConsumer = (function () {
    function UserConsumer() {
    }
    UserConsumer.prototype.getUserAge = function (user, settings) {
        if (settings.DEBUG) {
            console.log('Getting user age');
        }
        return user.age;
    };
    UserConsumer.prototype.getUserName = function () {
        console.log(this.settings);
        if (this.settings.DEBUG) {
            console.log('Getting user name');
        }
        return this.user.name;
    };
    __decorate([
        Dose_1.inject(InjectableKeys_1.default.User), 
        __metadata('design:type', User_1.default)
    ], UserConsumer.prototype, "user", void 0);
    __decorate([
        Dose_1.inject(InjectableKeys_1.default.Settings), 
        __metadata('design:type', Object)
    ], UserConsumer.prototype, "settings", void 0);
    __decorate([
        Dose_1.inject(InjectableKeys_1.default.User, InjectableKeys_1.default.Settings), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [User_1.default, Object]), 
        __metadata('design:returntype', void 0)
    ], UserConsumer.prototype, "getUserAge", null);
    return UserConsumer;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserConsumer;
