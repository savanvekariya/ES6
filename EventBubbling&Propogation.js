const div = document.querySelector('div')
const button = document.querySelector('button')

// Event bubbling - Propogates the events from child to parent 
button.addEventListener('click', (event) => {
    console.log('button clicked')
})

// Event Propogation - Propogates the events from parent to child
button.addEventListener('click', (event) => {
    event.stopPropagation()
    event.stopImmediatePropagation()
    console.log('button clicked')
}, true)


// prevent default

const a = document.querySelector('a')
a.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('link clickeds')
})