// utworz obiekt web-scoket
//nawiaz poloczenie z serwerem
// wyslij wiadomosc do serwera
// oczekuj na wiadomosci od servera
const serverUrl = 'ws://127.0.0.1:8001'

const ws = new WebSocket(serverUrl)
document.addEventListener('DOMContentLoaded', appStart)


ws.addEventListener('open', onWSOpen)
ws.addEventListener('message', onWSMsg)
ws.addEventListener('close', onWSClose)
ws.addEventListener('error', onWSError)



function onWSMsg(msg){ 
    console.log(msg)
    //pobiera wartosc przeslanej wiadomowsci, wlasciwosc data
    addToChatBox(msg.data, false)
}

function onWSOpen(msg){
    document
    .querySelector('#test').disabled = false
    console.log("Ws open",msg)
}

function onWSClose(msg){
    document
    .querySelector('#test').disabled = true
    console.log("Ws close",msg)
}

function onWSError(msg){
    console.log("Ws error",msg)
}


function appStart(){
    document
    .querySelector('#test')
    .addEventListener('click', btnSentMsgClick)
}

function btnSentMsgClick(){
    const msg = document.querySelector('#message').value
    sendWSMsg(msg)
  
}

function sendWSMsg(msg){ 
    ws.send(msg)
    addToChatBox(msg,true)
}



function addToChatBox(data, isSent){
    const getMessageBox = document.querySelector('#chat')
    const newMessage = document.createElement('p')
    

    if(isSent){
        newMessage.classList.add("recieved-message")
    } else {
        newMessage.classList.add("sent-message")
    }
    newMessage.innerText = data;
    getMessageBox.appendChild(newMessage);
}