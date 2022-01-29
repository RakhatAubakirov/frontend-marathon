let tasks = {
    "Learning JS": "In progress",
    "Workout": "Done",
    "Read a book": "To do"
};

function addTask(obj, key, newValue){
    obj[key] = newValue
}

function changeStatus(obj, key, newValue){
    obj[key] = newValue
}

function deleteTask(obj, key){
    delete obj[key]
}

changeStatus(tasks, "Read a book", "In Progress")

console.log(tasks)

addTask(tasks, "Take a bath", "In progress")

console.log(tasks)

deleteTask(tasks, "Take a bath")

console.log(tasks)