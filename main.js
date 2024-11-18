let container = document.querySelector('#container')

function createSixteenDivisions(){
    for(let i = 1; i<=256; i++){
       let div = document.createElement("div")
       div.id = `div${i}`
       container.appendChild(div)
    }
}
createSixteenDivisions()

container.addEventListener('mouseover', (e)=>{
    let target = e.target
    if(target.id!=='container'){
        target.style.backgroundColor = 'red'
    }
})