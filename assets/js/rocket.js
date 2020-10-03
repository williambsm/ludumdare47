import Vue from 'vue';

Vue.component('Rocket', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<div class="rocket">^</div>'
});
