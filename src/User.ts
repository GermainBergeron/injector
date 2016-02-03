export default class User {

    constructor(private firstName: string, private lastName: string, private _age: number) { }

    get name() { return this.firstName + this.lastName; }

    get age() { return this._age; }
}
