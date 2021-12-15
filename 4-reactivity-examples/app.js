const app = Vue.createApp({
  data() {
    return {
      search: '',
      itemList: ['ayva', 'armut', 'karpuz', 'çilek'],
      // filteredList: [],
    };
  },
  methods: {
    searchList() {
      // this.filteredList = this.itemList.filter((i) => i.includes(this.search));
    },
  },
  // Computed kullanabileceğimiz yerde kullanmalıyız çünkü iş yükünden kurtarır.
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
    },
  },
});
app.mount('#app');
