export default class Mission {
    constructor (mission, rocket) {
        this.title = mission.title;
        this.description = mission.description;
        this.experienceReward = mission.experienceReward;
        this.currencyReward = mission.currencyReward;
        this.currencyCost = mission.currencyCost;
        this.level = mission.level;
        this.cooldown = mission.cooldown;
        this.difficulty = mission.difficulty;
        this.successes = 0;
        this.failures = 0;
        this.new = true;
        this.probability = this.calculateProbability(rocket);
    }

    calculateProbability (rocket) {
        return Math.floor(rocket.getScore() * 100 / this.difficulty);
    }

    startMission (rocket) {
        this.probability = this.calculateProbability(rocket);

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

    hasClearance(player) {
        return player.level < this.level;
    }
}
