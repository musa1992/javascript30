window.addEventListener('load', ()=>{
    let secondHand = document.querySelector('.second-hand')
    let minuteHand = document.querySelector('.minute-hand')
    let hourHand = document.querySelector('.hour-hand')
    let secondsDegrees = 0
    let minutesDegrees = 0
    let hoursDegrees = 0
    function moveHands(){
        let now = new Date()




        secondsDegrees = now.getSeconds() * 6

        minutesDegrees = now.getMinutes() *6

        hoursDegrees = now.getHours() * 30
        
        secondHand.style.transform = "rotate(" + secondsDegrees + "deg" + ")"
        minuteHand.style.transform = "rotate(" + minutesDegrees + "deg" + ")"
        hourHand.style.transform = "rotate(" + hoursDegrees + "deg" + ")"
        

    }

    setInterval(moveHands,1000);
    
})