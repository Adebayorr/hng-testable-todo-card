const completionCheck = document.body.querySelector('.completion[data-testid="test-todo-complete-toggle"]')
const statusElement = document.body.querySelector('.status')
const titleElement = document.body.querySelector('.title')
const countdown = document.querySelector('.countdown')
const timeLeftElement = document.body.querySelector('[data-testid="test-todo-time-remaining"]')
const buttons = document.querySelectorAll('button')


buttons.forEach(button => button.addEventListener('click', (e) => {
    console.log(`${button.textContent} clicked`)
}))

console.log(buttons)
console.log(timeLeftElement)


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
        console.log(countdown.classList.remove('rm-countdown'))

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
        timeLeftElement.innerHTML = `Due in ${Math.floor(Math.abs(days))} days
         ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
        return `${Math.floor(days)} days ${Math.floor(hours)} hours`
    } else {
        let days = timeLeft / (1000 * 24 * 60 * 60)
        let hours = timeLeft % (1000 * 24 * 60 *  60 ) / (1000 * 60 * 60)
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        console.log(days, hours)
        timeLeftElement.innerHTML = `Overdue by ${Math.floor(Math.abs(days))} days ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
        statusElement.innerHTML = 'Expired'
        statusElement.classList.add('status-red')
        return `${Math.floor(Math.abs(days))} days ${Math.floor(Math.abs(hours))} hours and ${Math.floor(Math.abs(minutes))} minutes`
    }
    
}
updateCountDown()
setInterval(updateCountDown, 60000) //setInterval(updateCountDown, 60000)
