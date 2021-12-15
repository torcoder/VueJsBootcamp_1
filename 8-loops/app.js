const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: 'Vue js Bootcamp 1. Hafta', completed: false },
        { id: 2, text: 'Vue js Bootcamp 2. Hafta', completed: false },
        { id: 3, text: 'Vue js Bootcamp 3. Hafta', completed: false },
        { id: 4, text: 'Vue js Bootcamp 4. Hafta', completed: false },
        { id: 5, text: 'Vue js Bootcamp 5. Hafta', completed: false },
        { id: 6, text: 'Vue js Bootcamp 6. Hafta', completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = '';
    },
    removeItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    unCompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount('#app');
