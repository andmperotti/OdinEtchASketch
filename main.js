let container = document.querySelector('#container')

function createSixteenDivisions(){
    for(let i = 1; i<=16; i++){
       let div = document.createElement("div")
       div.id = `div${i}`
       container.appendChild(div)

    }
}
createSixteenDivisions()