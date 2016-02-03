var User = (function () {
    function User(firstName, lastName, _age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = _age;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () { return this.firstName + this.lastName; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () { return this._age; },
        enumerable: true,
        configurable: true
    });
    return User;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = User;
