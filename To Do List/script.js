const addBtn = document.getElementById("add-btn")
const inputText = document.getElementById("input-el")
const taskList = document.getElementById("task-list")

addBtn.addEventListener('click', function(){
    const taskText = inputText.value
    if(taskText != ''){
        addtask(taskText)
        inputText.value = ''
    }
})

function addtask(taskText){
    const taskItem = document.createElement('li')
    taskItem.classList.add('item')

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox"

    const taskContent = document.createElement('p')
    taskContent.classList.add("task-content")

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "DELETE"
    deleteBtn.classList.add("delete-btn")


    taskContent.textContent = taskText

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskContent)
    taskItem.appendChild(deleteBtn)

    taskList.appendChild(taskItem)

    checkbox.addEventListener('click', function(){
        taskContent.classList.toggle("completed")
    })

    deleteBtn.addEventListener('click', function(){
        taskItem.remove()
    })
}

