const textArea = document.querySelector('#text-input');
const button = document.querySelector('#submit-button');
const coloring = document.querySelector('.coloring');
let value = ''
let counter = 1;
const myOutput = document.querySelector('.output');
let coloredDiv = myOutput.childNodes;
coloring.addEventListener('change', (event) => {
    for (let i=0; i < coloredDiv.length; i++) {
        if (counter % 2 === 0) {
            if (i % 2 === 0) {
                coloredDiv[i].style.background = event.target.value; 
            }
        } else {
            if (i % 2 !== 0) {
                console.log(coloredDiv[i])
                coloredDiv[i].style.background = event.target.value; 
            }
        }
    }
    counter++; 
})
textArea.addEventListener('input', (event) => {
    value = event.target.value;
        myOutput.innerHTML = '';
    for (let i = 0; i < value; i++) {
        const coloredDiv = document.createElement('div');
        coloredDiv.innerHTML = i+1;
        coloredDiv.classList = 'myClass';
        myOutput.appendChild(coloredDiv);
               
    }
});
