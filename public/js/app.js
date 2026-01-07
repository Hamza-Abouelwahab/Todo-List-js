let body = document.body
let inputResult = null
let pushList = document.querySelector(".users")
let divOfUl = document.querySelector(".divOf-list")
const taskInput = document.querySelector("#task-input")
const taskBtn = document.querySelector("#task-btn")
let errors 
taskInput.addEventListener("change" ,() => {
    inputResult = taskInput.value

})
taskInput.addEventListener("input" , ()=> {
    document.getElementById("error-ofinput").remove()
    
})

taskBtn.addEventListener("click" , () => {
    if (!inputResult) {
        errors = document.createElement("div")
        errors.setAttribute("id" , "error-ofinput")
        errors.textContent = "write some think"
        errors.style.color = "red"
        divOfUl.appendChild(errors)
        
    }else{
        const listOfUsers = document.createElement("li")
        listOfUsers.setAttribute("class" , "list-of-users")
        listOfUsers.textContent = inputResult 
        pushList.appendChild(listOfUsers)
        taskInput.value = ""
        inputResult = null
    }
})
// * githuuuuuuuuuuuuuuuuuuuuuuuub .