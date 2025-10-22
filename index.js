const append = require('./dataStore')
// first step create json file

let todo = {
    title: "write some code",
    status: "typing",
    dueDate: "16th- october-2025"
}

append(todo)
