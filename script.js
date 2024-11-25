// JavaScript untuk Simple Note App
const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Array untuk menyimpan catatan
let notes = [];

// Tambahkan catatan
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const noteText = noteInput.value;

    // Buat objek catatan
    const note = {
        id: Date.now(),
        text: noteText
    };

    notes.push(note);
    displayNotes();
    noteInput.value = '';
});

// Hapus catatan
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    displayNotes();
}

// Tampilkan catatan
function displayNotes() {
    notesList.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${note.text}</p>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesList.appendChild(noteElement);
    });
}
