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
const channel1 = []
let channel1Start = 0
let channel1Playing = false

const channel2 = []
let channel2Start = 0
let channel2Playing = false

const channel3 = []
let channel3Start = 0
let channel3Playing = false

document.addEventListener('DOMContentLoaded', appStart)

function appStart() {
    document.addEventListener('keydown', keyPressed)

    document
        .querySelector('#btnPlayChannel1')
        .addEventListener('click', playChannel1)
    document
        .querySelector('#btnRecordChannel1')
        .addEventListener('click', onBtnRecordChannel1Click)

    document
        .querySelector('#btnPlayChannel2')
        .addEventListener('click', playChannel2)
    document
        .querySelector('#btnRecordChannel2')
        .addEventListener('click', onBtnRecordChannel2Click)

    document
        .querySelector('#btnPlayChannel3')
        .addEventListener('click', playChannel3)
    document
        .querySelector('#btnRecordChannel3')
        .addEventListener('click', onBtnRecordChannel3Click)
}


function onBtnRecordChannel1Click() {
    if(channel1Start > 0) {
        channel1Start = 0
        document
        .querySelector('#btnRecordChannel1')
        .innerHTML = 'Record channel'
    } else {
        channel1Start = Date.now()
        document
        .querySelector('#btnRecordChannel1')
        .innerHTML = ' Stop Recording'
    }
}


function onBtnRecordChannel2Click() {
    if(channel2Start > 0) {
        channel2Start = 0
        document
        .querySelector('#btnRecordChannel2')
        .innerHTML = 'Record channel'
    } else {
        channel2Start = Date.now()
        document
        .querySelector('#btnRecordChannel2')
        .innerHTML = ' Stop Recording'
    }
}

function onBtnRecordChannel3Click() {
    if(channel3Start > 0) {
        channel3Start = 0
        document
        .querySelector('#btnRecordChannel3')
        .innerHTML = 'Record channel'
    } else {
        channel3Start = Date.now()
        document
        .querySelector('#btnRecordChannel3')
        .innerHTML = ' Stop Recording'
    }
}


function playChannel1() {
    if (!channel1Playing){
        channel1.forEach(el => {
            setTimeout(()=>{
                playSound(el.sound)
            },
            el.time)
    })
    



    }
}

function playChannel2() {
    channel2.forEach(el => {
        setTimeout(()=>{
            playSound(el.sound)
        },
        el.time)
    })
}

function playChannel3() {
    channel3.forEach(el => {
        setTimeout(()=>{
            playSound(el.sound)
        },
        el.time)
    })
}




function keyPressed(e) {
    const sound = sounds[e.keyCode]
    playSound(sound)
    if (channel1Start) {
        addToChannel1(sound)
    }
    else if (channel2Start) {
        addToChannel2(sound)
    }
    else if (channel3Start) {
        addToChannel3(sound)
    }

}





function addToChannel1(sound) {
    channel1.push({
        time: Date.now() - channel1Start,
        sound: sound
    })
}

function addToChannel2(sound) {
    channel2.push({
        time: Date.now() - channel2Start,
        sound: sound
    })
}

function addToChannel3(sound) {
    channel3.push({
        time: Date.now() - channel3Start,
        sound: sound
    })
}




function playSound(sound) {
    const a = document.querySelector('#'+sound)
    if (a) {
        a.currentTime = 0
        a.play()
    }
}
