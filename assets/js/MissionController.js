import Mission from './Mission.js';
import Countdown from './Countdown';

export default class MissionController {
    constructor () {
        this.selectedMission = null;
        this.displayResults = false;
        this.results = null;
        this.timeBetween = 5;
        this.timer = null;
        this.ready = true;

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

            this.results = true;
        } else {
            this.selectedMission.addFailure();
            this.results = false;
        }

        let missionController = this;

        this.timer = new Countdown(this.timeBetween, function () {
            missionController.timer = null;
            missionController.ready = true;
        });

        this.ready = false;
        this.displayResults = true;
    }

    hideResults() {
        this.results = null;
        this.displayResults = null;
    }
}
