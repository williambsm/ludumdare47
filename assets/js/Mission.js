export default class Mission {
    constructor (mission) {
        this.title = mission.title;
        this.experienceReward = mission.experienceReward;
        this.currencyReward = mission.currencyReward;
        this.currencyCost = mission.currencyCost;
        this.locked = mission.locked;
        this.cooldown = mission.cooldown;
        this.probability = 80;
        this.successes = 0;
        this.failures = 0;
    }

    launchRocket () {
        var check = Math.floor(Math.random() * Math.floor(100));
        return (check < this.probability);
    }

    addFailure () {
        this.failures = this.failures + 1;
    }

    addSuccess () {
        this.successes = this.successes + 1;
    }

    displayCurrencyEarnings () {
        return this.currencyReward.toLocaleString();
    }

    displayExperienceEarnings () {
        return this.experienceReward.toLocaleString();
    }

    displayCost () {
        return this.currencyCost.toLocaleString();
    }
}
