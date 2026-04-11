const completionCheck = document.body.querySelector('.completion[data-testid="test-todo-complete-toggle"]')
const statusElement = document.body.querySelector('.status')
const titleElement = document.body.querySelector('.title')
const timeLeftElement = document.body.querySelector('[data-testid="test-todo-time-remaining"]')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', (e) => {
    console.log('Action Successful')
}))

console.log(buttons)
console.log(timeLeftElement)


completionCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        statusElement.innerHTML = 'Completed'
        statusElement.classList.remove('status-red')
        statusElement.classList.add('status-green')
        titleElement.classList.add('completed')
    } else {
        statusElement.innerHTML = 'pending'
        titleElement.classList.remove('completed')
        statusElement.classList.remove('status-green')

    }
})

const dueDate = new Date("2026-04-16T18:00").getTime()

function updateCountDown () {
    const now = new Date().getTime()
    const timeLeft = dueDate - now
    console.log(timeLeft)

    if (now < dueDate) {
        let days = timeLeft / (1000 * 24 * 60 * 60)
        let hours = timeLeft % (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        let minutes = timeLeft %  (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        console.log(days, hours)
        timeLeftElement.innerHTML = `Due in ${Math.floor(days)} days ${Math.floor(hours)} hours`
        return `${Math.floor(days)} days ${Math.floor(hours)} hours`
    } else {
        let days = timeLeft / (1000 * 24 * 60 * 60)
        let hours = timeLeft % (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        let minutes = timeLeft %  (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        console.log(days, hours)
        timeLeftElement.innerHTML = `Overdue by ${Math.abs(Math.floor(days))} days ${Math.abs(Math.floor(hours))} hours`
        statusElement.innerHTML = 'Expired'
        statusElement.classList.add('status-red')
        return `${Math.abs(Math.floor(days))} days ${Math.abs(Math.floor(hours))} hours`
    }
    
}

setInterval(updateCountDown, 60000) //setInterval(updateCountDown, 60000)


console.log(updateCountDown())