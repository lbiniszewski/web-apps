const channel1 = [];

document.addEventListener('DOMContentLoaded',() =>{

function appStart(){
    document.addEventListener('keydown', keyPress);
}

const sounds = {
65: 'boom',
83: 'clap',
68: 'hihat',
70: 'kick',
71: 'openhat',
72: 'ride',
74: 'snare',
75: 'tink',
76: 'tom',

}

function keyPressed(e){
    let sound = sounds[e.keyCode]
    playSound(sound)
    addToChannel1(sound)
}

function addToChannel1(sound){
    channel1.push({
        time:Date.now(),
        sound:sound
    })
}


// function keyPress(e){

//     switch(switch(e.keyCode){
//         case 65:{
//         const a = document.querySelector('#boom');
//         a.play();
//         break;
//         }
//         case 83:{
//         const a = document.querySelector('#clap');
//         a.play();
//         break;
//         }
//         case 68:{
//         const a = document.querySelector('#hihat');
//         a.play();
//         break;
//         }
//         case 70:{
//         const a = document.querySelector('#kick');
//         a.play();
//         break;
//         }
//         case 71:{
//         const a = document.querySelector('#openhat');
//         a.play();
//         break;
//         }
//         case 72:{
//         const a = document.querySelector('#ride');
//         a.play();
//         break;
//         }
//         case 74:{
//         const a = document.querySelector('#snare');
//         a.play();
//         break;
//         }
//         case 75:{
//         const a = document.querySelector('#tink');
//         a.play();
//         break;
//         }
//         case 76:{
//         const a = document.querySelector('#tom');
//         a.play();
//         break;
//         }

//     }
// }


console.log('hey')

})

function playSound(sound){
    let sound = sounds[e.keyCode]
    const a = document.querySelector('#'+sound)
    if(a){
        a.currentTime = 0
        a.play()
    }
}