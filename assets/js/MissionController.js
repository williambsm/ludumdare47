import Mission from './Mission.js';

export default class MissionController {
    constructor () {
        this.selectedMission = null;

        this.missions = [
            new Mission({
                title: "Test Mission",
                experienceReward: 500,
                currencyReward: 10000,
                currencyCost: 0,
                cooldown: 60,
                locked: false
            }),
            new Mission({
                title: "First Mission",
                experienceReward: 1000,
                currencyReward: 20000,
                currencyCost: 2000,
                cooldown: 60,
                locked: true
            }),
        ];
    }

    selectMission (missionIndex) {
        this.selectedMission = this.missions[missionIndex];
    }

    unlockMission (missionIndex) {
        this.missions[missionIndex].locked = false;
    }

    launchMission (player, rocket) {
        player.removeCurrency(this.selectedMission.currencyCost);

        if (this.selectedMission.launchRocket()) {
            player.addCurrency(this.selectedMission.currencyReward);
            player.addExperience(this.selectedMission.experienceReward);

            this.selectedMission.addSuccess();
        } else {
            this.selectedMission.addFailure();
        }
    }
}
