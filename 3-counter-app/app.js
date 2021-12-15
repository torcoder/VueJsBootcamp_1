const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    getCounter() {
      console.log('counter 1 çalıştı');
      return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    },
    getCounter2() {
      console.log('counter 2 çalıştı');
      return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK';
    },
  },
  // Computed içerisindeki bilgilere göre bir değer return etmek zorunda.
  // Ama watcher değil. Watcher bir değer değiştiğinde ve onun eski bilgisini yeni bilgisini sana verir.
  // geriye bir değer döndürmek zorunda değil.
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue, '=>', newValue);
    },
    getCounter(newValue, oldValue) {
      console.log('Counter', oldValue, '=>', newValue);
    },
  },
}).mount('#app');
