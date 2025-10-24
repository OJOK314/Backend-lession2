let todobox = document.getElementById('todo-box')
let apiurl = 'https://backend-lession2-6.onrender.com/data'

async function fetchData() {
    let respones = await fetch(apiurl)
    let data = await respones.json()
    console.log(data)
    
}
fetchData()


