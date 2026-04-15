// Get HTML Elements
const completionCheck = document.body.querySelector('.completion[data-testid="test-todo-complete-toggle"]')
const statusElement = document.body.querySelector('.status')
const titleElement = document.body.querySelector('.title')
const countdown = document.querySelector('.countdown')
const descriptionElement = document.querySelector('.description')
const dueDateElement = document.querySelector('.due-date')
const priorityElement = document.querySelector('[data-testid="test-todo-priority"]')
const timeLeftElement = document.body.querySelector('[data-testid="test-todo-time-remaining"]')
const editButton = document.querySelector('.edit-btn')
const deleteButton = document.querySelector('.delete-btn')
const titleInput = document.querySelector('#title-input')
const descriptionInput = document.querySelector('#desc-input')
const priorityInput = document.querySelector('#priority')
const dueDateInput = document.querySelector('#due-date-input')
const saveButton = document.querySelector('.save')
const cancelButton = document.querySelector('cancel')

function formatDueDate (input) {
    console.log(input)
    // const dateinput = '2026-04-16T18:00'
    const dateArr = input.split(/[-:T]/g)
    const months = [
    'January', 'February', 'March', 'April', "May", 'June', 
    "July", "August", "September", "October", 'November', 'December'
]
    return `${months[Number(dateArr[1] - 1)]} ${dateArr[2]}, ${dateArr[0]} ${dateArr[3]}:${dateArr[4]}`
}


const todoObject = {
    title: 'HNG Level 0 Task',
    desc: `Completion and hosting of HNG Level 0 task and assurance of all requirements are fulfilled`,
    dueDate: '2026-04-16T18:00',
    priority: 'High',
    status: 'In Progress',
    isExpanded: false,
    isEditing: false,
    rawDueDate: '2026-04-16T18:00'

}

saveButton.addEventListener('click', (e) => {
    e.preventDefault()
    updateTodo()
    titleElement.textContent = todoObject.title
    dueDateElement.textContent = todoObject.dueDate
    descriptionElement.textContent = todoObject.desc
    priorityElement.textContent = todoObject.priority
    updateCountDown()
    console.log(dueDateInput.value)


})

// titleInput.addEventListener('keyup', () => {
//     console.log(titleInput.value);
    
//    })

function updateTodo () {
    todoObject.title = titleInput.value
    todoObject.desc = descriptionInput.value
    todoObject.priority = priorityInput.value
    todoObject.dueDate = formatDueDate(dueDateInput.value)
    todoObject.rawDueDate = dueDateInput.value

    titleInput.value = ''
    descriptionInput.value = ''
    priorityInput.value = ''
    dueDateInput.value = ''

    console.log(todoObject)
}

// Card Buttons onClick
console.log(editButton)
editButton.addEventListener('click', (e) => {
    console.log(`${editButton.textContent} clicked`)
})

deleteButton.addEventListener('click', (e) => {
    console.log(`${deleteButton.textContent} clicked`)
})



completionCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        statusElement.innerHTML = 'Done'
        statusElement.classList.remove('status-red')
        statusElement.classList.add('status-green')
        titleElement.classList.add('completed')
        countdown.classList.add('rm-countdown')

    } else {
        statusElement.innerHTML = 'Pending'
        titleElement.classList.remove('completed')
        statusElement.classList.remove('status-green')
        countdown.classList.remove('rm-countdown')

    }
})

const dueDate = new Date("2026-04-16T18:00").getTime()

function updateCountDown () {
    const now = new Date().getTime()
    const due = new Date(todoObject.rawDueDate).getTime()
    console.log(due)
    const timeLeft = due - now
    console.log(timeLeft)
    if (now < dueDate) {
        let days = timeLeft / (1000 * 24 * 60 * 60)
        let hours = timeLeft % (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        let minutes = timeLeft %  (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        timeLeftElement.textContent = `Due in ${Math.floor(Math.abs(days))} days
         ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
        return `${Math.floor(days)} days ${Math.floor(hours)} hours`
    } else {
        let days = timeLeft / (1000 * 24 * 60 * 60)
        let hours = timeLeft % (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        console.log(days, hours)
        timeLeftElement.textContent = `Overdue by ${Math.floor(Math.abs(days))} days ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
        statusElement.innerHTML = 'Expired'
        statusElement.classList.add('status-red')
        return `${Math.floor(Math.abs(days))} days ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
    }
    
}
updateCountDown()
setInterval(updateCountDown, 60000) //setInterval(updateCountDown, 60000)
