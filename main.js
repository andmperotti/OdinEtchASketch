let container = document.querySelector('#container')
let changeButton = document.querySelector('button')
let generatedDivs = document.querySelectorAll('#div[id^=div]')

function createDivisions(rowColumnCount){
    let divsCount = rowColumnCount*rowColumnCount
    for(let i = 1; i<=divsCount; i++){
       let generatedDiv = document.createElement("div")
       generatedDiv.id = `div${i}`
       generatedDiv.style.width = `${eval(480/rowColumnCount)}px`
       generatedDiv.style.height = `${eval(480/rowColumnCount)}px`
       container.appendChild(generatedDiv)
    }
}
createDivisions(16)

container.addEventListener('mouseover', (e)=>{
    let target = e.target
    if(target.id!=='container'){
        target.style.backgroundColor = 'red'
    }
})

changeButton.addEventListener('click', ()=>{
    let userGridSize = Number(prompt("How many rows/columns of squares would you like to generate?(Maximum is 100) ", "16"))
    if(userGridSize>100){
        userGridSize=100
    }
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    createDivisions(userGridSize)
})