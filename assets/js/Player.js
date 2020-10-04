export default class Player {
    constructor() {
        this.currency = 1000;
        this.experience = 0;
        this.level = 1;
    }

    addCurrency (amount) {
        this.currency = this.currency + amount;
    }

    removeCurrency (amount) {
        this.currency = this.currency - amount;
    }

    addExperience (amount) {
        this.experience = this.experience + amount;
    }

    displayMoney () {
        return this.currency.toLocaleString();
    }

    displayExperience () {
        return this.experience.toLocaleString();
    }
}
