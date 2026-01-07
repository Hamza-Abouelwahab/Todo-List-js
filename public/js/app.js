let body = document.body
let inputResult = null
let pushList = document.querySelector(".users")
let divOfUl = document.querySelector(".divOf-list")
const taskInput = document.querySelector("#task-input")
const taskBtn = document.querySelector("#task-btn")
let errors 
let currentEditingTask = null

taskInput.addEventListener("change" ,() => {
    inputResult = taskInput.value.trim()

})
taskInput.addEventListener("input" , ()=> {
    document.getElementById("error-ofinput").remove()
    
})

taskBtn.addEventListener("click" , () => {
    if (!inputResult) {
        if (!errors) {
        errors = document.createElement("div")
        errors.setAttribute("id" , "error-ofinput")
        errors.textContent = "write some think"
        errors.style.color = "red"
        divOfUl.appendChild(errors)
        }
        return
    }

    if (currentEditingTask) {
        currentEditingTask.textContent = inputResult
        taskInput.value = ""
        inputResult = null
        currentEditingTask = null
        taskBtn.textContent = "Add"
    }
    else{
        const divOfList = document.createElement("div")

        const listOfUsers = document.createElement("li")
        divOfList.setAttribute("class" , "list-of-users")
        
        listOfUsers.textContent = inputResult 
        
        const divIcons = document.createElement("div")
        divIcons.setAttribute("class" , "divIcons")

        const update = document.createElement("span")
        update.innerHTML = `<i class="bi bi-pencil"></i>`

        const verrif = document.createElement("span")
        verrif.innerHTML = `<i class="bi bi-check-lg"></i>`

        const deletLi = document.createElement("span")
        deletLi.innerHTML = `<i class="bi bi-trash3"></i>`

        pushList.appendChild(divOfList)
        divOfList.appendChild(listOfUsers)
        divOfList.appendChild(divIcons)
        divIcons.appendChild(update)
        divIcons.appendChild(verrif)
        divIcons.appendChild(deletLi)
        
        taskInput.value = ""
        inputResult = null

        update.addEventListener("click" ,()=>{
            taskInput.value = listOfUsers.textContent
            inputResult = listOfUsers.textContent
            currentEditingTask = listOfUsers
            taskBtn.textContent = "Update"
            taskInput.focus()
        })


        
    }
})
// * githuuuuuuuuuuuuuuuuuuuuuuuub .

