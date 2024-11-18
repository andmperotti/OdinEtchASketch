let container = document.querySelector('#container')
let changeButton = document.querySelector('button')

function createDivisions(divs){
    for(let i = 1; i<=divs; i++){
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
    let newDimensions = Math.sqrt(userGridSize)
    container.style.width= 480/userGridSize
    container.style.height = 480/userGridSize
    container.removeChild()
    
})