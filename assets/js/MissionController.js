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
                title: "Promotion Launch",
                description: "After years of building rockets, you will launch it in front of your investors. Good luck!",
                experienceReward: 500,
                currencyReward: 10000,
                currencyCost: 0,
                cooldown: 5,
                difficulty: 90,
                level: 1,
            }),
            new Mission({
                title: "Cargo Delivery",
                description: "Utilize your rocket to carry cargo over long distances on planet earth, netting yourself some profit.",
                experienceReward: 1000,
                currencyReward: 20000,
                currencyCost: 2000,
                cooldown: 5,
                difficulty: 20,
                level: 1,
            }),
            new Mission({
                title: "Satellite Launch",
                description: "A private company needs your services to launch one of their satellites into space.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 1,
            }),
            new Mission({
                title: "World Tour",
                description: "Give a rocket world tour to the wealthiest.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 2,
            }),
            new Mission({
                title: "Military Satellite",
                description: "The government needs you to launch one of their military satellites in orbit.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 2
            }),
            new Mission({
                title: "Moon probe",
                description: "Take your rocket to the extreme and launch probes to the moon.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 2,
            }),
            new Mission({
                title: "Satellite Clean-up",
                description: "Some scientists have created a special net to clean up dead satellites, and you need to launch it.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 3,
            }),
            new Mission({
                title: "Escort to the ISS",
                description: "The newest batch fresh astronauts need a lift to the ISS, and some need a lift back.",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 3,
            }),
            new Mission({
                title: "Send a Car to Mars",
                description: "A rich cynical guy wants you to send his car to Mars, can your rockets do it?",
                experienceReward: 2000,
                currencyReward: 40000,
                currencyCost: 10000,
                cooldown: 5,
                difficulty: 0,
                level: 3,
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
