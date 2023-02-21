const { createApp } = Vue

const arrayToDo = [
    {
        text: 'Fare la spesa',
        done: true
    },
    {
        text: 'Completare progetto ToDoList',
        done: true
    },
    {
        text: 'Controllare le mail',
        done: false
    },
    {
        text: 'Andare a correre',
        done: true
    },
    {
        text: 'Fare regalo a Mario',
        done: false
    },

]

createApp({
    data() {
      return {
        arrayToDoList: arrayToDo,
      }
    },
    methods: {
        getRemoveToDo(startIndex){
            this.arrayToDoList.splice(startIndex, 1);
        }
    }
}).mount('#app')