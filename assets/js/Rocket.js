export default class Rocket {
    constructor () {
        this.hull = 15;
        this.engine = 15;
        this.cargo = 10;
    }

    getScore () {
        return this.hull + this.engine;
    }
}
