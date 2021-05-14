const App = ({
    el: "#app",
    data() {
        return {
            value: 34.5
        }
    },
    methods: {
        per25() {
            this.value = 25
        },
        per50() {
            this.value = 50
        },
        per75() {
            this.value = 75
        },
        per100() {
            this.value = 100
        },
        colors: function () {
            if (this.value <= 50) {
                return {
                    color: "#1ab8a7"
                }
            } else if (this.value <= 75 && this.value > 50) {
                return {
                    color: "#c37415"
                }
            }
            else return {
                color: "#fd1500"
            }
        }
    }
});
Vue.createApp(App).mount('#app')
