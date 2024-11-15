let body = document.querySelector('body')
function createSixteenDivisions(){
    for(let i = 1; i<=16; i++){
       let div = document.createElement("div")
       div.id = `div${i}`
       body.appendChild(div)

    }
}
createSixteenDivisions()