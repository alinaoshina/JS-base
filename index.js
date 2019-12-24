const textArea = document.querySelector('#text-input');
const button = document.querySelector('#submit-button');

let value = ''

textArea.addEventListener('change', (event) => {
    value = event.target.value
});

const myOutput = document.querySelector('.output');
button.addEventListener('click', () => {
    myOutput.innerText = value    
});