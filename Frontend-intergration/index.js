

let todobox = document.getElementById('todo-box')
let apiUrl = 'https://backend-lession2-6.onrender.com/data'

async function fetchData() {
    let response = await fetch(apiUrl)
    let data = await response.json()
    return data
    
}
fetchData()


// create a funtion that creates new lists element
function createListItem(item) {

    let newItem = document.createElement('li')

    newItem.innerText = item.title
    return newItem;
    
}
// create a function to generate the list item from the data provided
 async function generateList() {
    let taskData = await fetchData()
   

    let todos = taskData.map((task) =>{
    return createListItem(task)
    })

    console.log(todos)
    todobox.append(...todos)
     
}

generateList()