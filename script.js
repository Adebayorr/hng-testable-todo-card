const completionCheck = document.body.querySelector('.completion[data-testid="test-todo-complete-toggle"]')
const statusElement = document.body.querySelector('.status')
const titleElement = document.body.querySelector('.title')

completionCheck.addEventListener('change', (e) => {
    if (e.target.checked) {
        statusElement.innerHTML = 'Done'
        titleElement.classList.add('completed')
    } else {
        statusElement.innerHTML = 'pending'
        titleElement.classList.remove('completed')
    }
    console.log(e)
})

const dueDate = new Date()
console.log(completionCheck)