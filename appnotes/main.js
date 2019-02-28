let notes = []

let titleHtmlNode

let contentHtmlNode



class Note {

    constructor(title, content) {

        this.title = title

        this.content = content

        this.date = Date.now()

    }

}

document.addEventListener('DOMContentLoaded', appStart)



function appStart() {

    const btnSubmit = document.querySelector('#newNote')

    titleHtmlNode = document.querySelector('#title')

    contentHtmlNode = document.querySelector('#content')



    btnSubmit.addEventListener('click', addNewNote)

 

    getNotesFromLocalStorage()

}



function getNotesFromLocalStorage() {

    notes = JSON.parse(localStorage.getItem('notes'))

    if (notes && notes.length) {

        notes.sort((a,b)=> b.date - a.date);
            // if(a.date > b.date){
            //     return 1;
            // } else if (a.date == b.date){

            // } else {
            //     return 0
            // }
        

        notes.forEach(note => {

            createDivNote(note)

        })

    } else {

        notes = []

    }

}



function addNewNote(e) {

    const note = new Note(titleHtmlNode.value, contentHtmlNode.value)

    addNoteToStorage(note)

    createDivNote(note)

    cleanForm()

}



function cleanForm() {

    titleHtmlNode.value = ''

    contentHtmlNode.value = ''

}

function addNoteToStorage(note) {

    notes.unshift(note)

    updateLocalStorage();
    

}


function updateLocalStorage(note)
    {
    localStorage.setItem('notes', JSON.stringify(notes))
};



function createDivNote(note) {

    const newNote = document.createElement('div')



    newNote.classList.add('note')

    newNote.id = 'note' + note.date

    

    const removeBtn = document.createElement('i')
    removeBtn.className = 'fas fa-times btn-delete';

    removeBtn.className = 'fas fa-times'

    removeBtn.addEventListener('click', removeNote)

    

    const header = document.createElement('h2')

    header.innerHTML = note.title

    

    const content = document.createElement('section')

    content.innerHTML = note.content

    

    const formattedDate = new Date(note.date)

    const date = document.createElement('div')

    date.innerHTML = formattedDate.toLocaleString()



    newNote.appendChild(removeBtn)

    newNote.appendChild(header)

    newNote.appendChild(content)

    newNote.appendChild(date)



    const notesContainer = document.querySelector('main')

    const firstNote = notesContainer.firstChild
    if(firstNote){
        notesContainer.insertBefore(newNote, firstNote);
    } else {
        notesContainer.appendChild(newNote)
    }

}



function removeNote() {

    const noteDiv = this.parentElement
    const id = noteDiv.id.slice(4);
    const idx = notes.findIndex((el)=> {
        return el.date == id
    })
    notes.splice(idx,1)
    updateLocalStorage();

    removeDivNote(this.parentElement)

}

function removeDivNote(noteDiv) {

    const notesContainer = noteDiv.parentElement

    notesContainer.removeChild(noteDiv)

}