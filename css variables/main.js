let imgContainer = document.querySelector('.img-container')
let img = document.getElementById('img')
let highlight = document.querySelector('.hl')
let spacing = document.getElementById('spacing')
let blurr = document.getElementById('blur')
let color = document.getElementById('base')





function inputSpacing(){
    let value = spacing.value
    let setVal = value + 'px'
    imgContainer.style.setProperty('--space', setVal)
}

function inputBlur(){
    let value = blurr.value
    let setVal = value + 'px'
    img.style.setProperty('--blurry',setVal)
    
}

function inputColor(){
    let value = color.value
    imgContainer.style.setProperty('--color',value)
    highlight.style.setProperty('--color',value)

}



spacing.oninput = inputSpacing;
blurr.oninput = inputBlur;
color.oninput = inputColor;
