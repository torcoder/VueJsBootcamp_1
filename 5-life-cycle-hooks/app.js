const app = Vue.createApp({
  data() {
    return {
      title: 'Life Cycle',
      itemList: [],
      // filteredList: [],
    };
  },
  beforeCreate() {
    console.log('beforeCreate çalıştı');
  },
  created() {
    console.log('created çalıştı');
    setTimeout(() => {
      this.itemList = [1, 2, 3, 5, 4, 88];
    }, 2000);
    setTimeout(() => {
      this.title = 'Bu yeni bir başlık';
    }, 3000);
  },
  beforeMount() {
    console.log('beforeMount çalıştı');
  },
  mounted() {
    console.log('mounted çalıştı');
  },
  beforeUpdate() {
    console.log('beforeUpdate çalıştı');
  },
  updated() {
    console.log('updated çalıştı');
  },
  beforeUnmount() {
    console.log('beforeUnmount çalıştı');
  },
  unmounted() {
    console.log('unmounted çalıştı');
  },
});
app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 5000);
// Uygulamayı kapattık
