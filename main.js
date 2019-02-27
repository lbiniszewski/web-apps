let notes = [];
// pobierz tytul i tresc
let titleHTMLNode = document.querySelector('#title');
let contentHTMLNode = document.querySelector('#content');


class Note {
    constructor(title, content) {
        this.title = title,
        this.content = content,
        this.date = Date.now();
    }
}

document.addEventListener('DOMContentLoaded', appStart);


function appStart() {
    titleHTMLNode = document.querySelector('#title');
    contentHTMLNode = document.querySelector('#content')
    let btnSubmit = document.querySelector('#newNote');

    btnSubmit.addEventListener('click', addNote);
    notes = JSON.parse(localStorage.getItem('notes'));
    notes.forEach((note) => {
        addNoteToStorage(note);
        createDivNote(note);
        cleanForm(note);
    });
};


function addNote(event) {

    //tworzenie obiektu notatki format JSON
    // const note = {
    //     title: title.value,
    //     content: content.value
    // }

    //nowy obiekt notatki
    const note = new Note(title.value, content.value)

    addNoteToStorage(note);
    createDivNote(note);
    cleanForm();

    title.value = '';
    content.value = '';

    //zapobiega domyslnemu dzialaniu przycisku
    //event.preventDefault();

};


function addNoteToStorage(note){
        //dodanie obiektu do tablicy notatek
        notes.push(note);
    
        //zapisujemy w local storage 
        localStorage.setItem('notes', JSON.stringify(notes));
}


function createDivNote(note){
        // utworz diva z notatka
        let newNote = document.createElement('div');

        const removeBtn = document.createElement('i');
        removeBtn.className = 'fas fa-times';
        removeBtn.addEventListener('click', removeNote)
        removeNote.appendChild(removeBtn);


        const header = document.createElement('h2');
        header.innerHTML = note.title;

        const content = document.createComment('section');
        content.innerHTML = note.content;

        const date = document.createComment('div');
        data.innerHTML = note.data;
     
        //dolacz notatke do (main)
        let notesContainer = document.querySelector('main');
        notesContainer.appendChild(newNote);
}

function cleanForm(note){
    note.title = '';
    note.content = '';
}

function removeDivNote(){
    const noteDiv = this.parentElement;
    const notesContainer = noteDiv.parentElement;
    notesContainer.removeChild(noteDiv);
}

function removeNote(){

    removeDivNote();
}

function getNotesFromLocalStorage(){
    notes = JSON.parse(localStorage.getItem('notes'))
    if (notes && notes.length){
        notes.forEach(note => {
            createDivNote(note)
        })
    } else {
        notes = [];
    }
}