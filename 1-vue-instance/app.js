const app = Vue.createApp({
  data() {
    return {
      title: 'Vue js bootcamp 1. gün',
      desc: 'Lorem Ipsum Dolor Sit Amet',
      coords: {
        x: 0,
        y: 0,
      },
      link: {
        title: 'Müfredat için tıklayınız',
        target: '_blank',
        url: 'https://google.com',
        alt: 'mufredat-icin-tiklayiniz',
      },
    };
  },
  methods: {
    changeTitle(pTitle) {
      this.title = pTitle;
    },
    updateCoords(event) {
      this.changeTitle(`${event.x}, ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount('#app');
