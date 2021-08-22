// press all the drum button
document.querySelector('.set').addEventListener('click',e=>{
    makeSound(e.target.textContent)
    buttonAnimation(e.target.textContent)

})
// capture each and every key prees 
document.addEventListener('keydown',(e)=>{
    makeSound(e.key)
    buttonAnimation(e.key)
})
// add all the key music
function makeSound(key){
    let kick;
    switch (key) {
        case 'w':
            kick =new Audio('sounds/crash.mp3') 
            kick.play()
            break;
        case 'a':
            kick =new Audio('sounds/kick-bass.mp3') 
            kick.play()
            break;
        case 's':
            kick =new Audio('sounds/snare.mp3') 
            kick.play()
            break;
        case 'd':
            kick =new Audio('sounds/tom-4.mp3') 
            kick.play()
            break;
        case 'j':
            kick =new Audio('sounds/tom-3.mp3') 
            kick.play()
            break;
        case 'k':
            kick =new Audio('sounds/tom-2.mp3') 
            kick.play()
            break;
        case 'l':
            kick =new Audio('sounds/tom-1.mp3') 
            kick.play()
            break;
    }
}
// creates a button animation using key press and click function
function buttonAnimation(e){
    let activeKey = document.querySelector('.' + e)
    activeKey.classList.add('pressed')
    setInterval(()=>activeKey.classList.remove('pressed'),200) // after 0.2 second removed pressed class
}