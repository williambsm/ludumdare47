import Vue from 'vue';
import Player from './Player.js';
import Rocket from './Rocket.js';
import MissionController from './MissionController';

var game = new Vue({
    el: "#game",
    data: {
        page: 'launch',
        player: new Player(),
        rocket: new Rocket(),
        missions: null,
    },
    methods: {
        togglePage: function (page) {
            this.page = page;
        }
    },
    created: function () {
        this.missions = new MissionController(this.rocket);
        this.missions.selectMission(this.missions.missions[0]);
    }
});
