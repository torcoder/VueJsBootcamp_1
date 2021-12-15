const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      redBg: false,
      bgColor: 'red',
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBg };
    },
  },
}).mount('#app');
