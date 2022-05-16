const tasks = {
    tasks: [{
        text: 'grocery shopping',
        completed: true
    }, {
        text: 'clean yard',
        completed: false
    }, {
        text: 'film course',
        completed: false 
    }],
    getTaskToDo(){
       const taskToDo= this.tasks.filter((a) => a.completed ===false)
        console.log(taskToDo);
    }
} 
console.log(tasks.getTaskToDo());