import Vue from 'vue';
import Player from './Player.js';
import Rocket from './Rocket.js';
import MissionController from './MissionController';

var game = new Vue({
    el: "#game",
    data: {
        player: new Player(),
        rocket: new Rocket(),
        missions: new MissionController(),
    },
    methods: {},
    created: function () {
        this.missions.selectMission(0);
    }
});
