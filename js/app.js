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
        inputValue: ''
      }
    },
    methods: {
        addTask() {
            const taskValue = this.inputValue;
            console.log(taskValue);
            
            const newTask = {
                text: taskValue,
                done: false
            }

            this.arrayToDoList.unshift(newTask);
            this.inputValue = '';
        },
        removeTask(startIndex){
            this.arrayToDoList.splice(startIndex, 1);
        }
    }
}).mount('#app')