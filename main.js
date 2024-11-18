let container = document.querySelector('#container')
let changeButton = document.querySelector('button')
let generatedDivs = document.querySelectorAll('#div[id^=div]')

function createDivisions(divCount){
    for(let i = 1; i<=divCount; i++){
       let div = document.createElement("div")
       div.id = `div${i}`
       container.appendChild(div)
    }
}
createDivisions(256)

container.addEventListener('mouseover', (e)=>{
    let target = e.target
    if(target.id!=='container'){
        target.style.backgroundColor = 'red'
    }
})

changeButton.addEventListener('click', ()=>{
    let userGridSize = Number(prompt("How many total squares would you like? "))
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
    createDivisions(userGridSize)
})