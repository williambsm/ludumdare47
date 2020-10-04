import Mission from './Mission.js';
import Countdown from './Countdown';

export default class MissionController {
    constructor () {
        this.selectedMission = null;
        this.displayResults = false;
        this.results = null;
        this.timer = null;
        this.ready = true;

        this.missions = [
            new Mission({
                title: "Test Mission",
                description: "This is a text mission. Get your rocket going!",
                experienceReward: 500,
                currencyReward: 10000,
                currencyCost: 0,
                cooldown: 5,
                difficulty: 90,
                locked: false,
                new: false,
            }),
            new Mission({
                title: "First Mission",
                description: "This is your first real mission! Get that money!",
                experienceReward: 1000,
                currencyReward: 20000,
                currencyCost: 2000,
                cooldown: 5,
                difficulty: 60,
                locked: false,
                new: true,
            }),
            new Mission({
                title: "Second Mission",
                description: "This is your second mission! Get that money!",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 30,
                locked: true,
                new: false,
            }),
        ];
    }

    selectMission (mission) {
        this.selectedMission = mission;

        if (mission.new) {
            mission.new = false;
        }
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

        this.timer = new Countdown(this.selectedMission.cooldown, function () {
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
