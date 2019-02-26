   
    document.addEventListener('DOMContentLoaded', appStart);
    

function appStart(){
    let btnSubmit = document.querySelector('#newNote');
    btnSubmit.addEventListener('click', addNote);
};
    
    
    function addNote(event){
        // pobierz tytul i tresc
        
        let title = document.querySelector('#title');
        let content = document.querySelector('#content');

        // utworz diva z notatka
        let newNote = document.createElement('div');

        newNote.classList.add('note');


        // wrzuc do diva 
        newNote.innerHTML = `<h2>${title.value}</h2><section>${content.value}</section>`;
        //dolacz notatke do (main)
        let notesContainer = document.querySelector('main');
        notesContainer.appendChild(newNote);

        title.value = '';
        content.value = '';

        event.preventDefault();
    };