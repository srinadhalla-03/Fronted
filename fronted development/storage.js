// Load notes from localStorage
function loadNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const noteCard = document.createElement("div");
    noteCard.className = "col-md-4";

    noteCard.innerHTML = `
      <div class="card shadow-sm">
        <div class="card-body">
          <p class="card-text">${note}</p>
          <button class="btn btn-sm me-2" onclick="displayNote(${index})">Display</button>
          <button class="btn btn-sm me-2" onclick="editNote(${index})">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deleteNote(${index})">Delete</button>
        </div>
      </div>
    `;
    container.appendChild(noteCard);
  });
}

// Add new note
document.getElementById("addNoteBtn").addEventListener("click", () => {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    loadNotes();
  } else {
    alert("Please enter a note!");
  }
});

// Display note in box
function displayNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  document.getElementById("displayBox").textContent = notes[index];
}

// Edit note
function editNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNote = prompt("Edit your note:", notes[index]);

  if (newNote !== null && newNote.trim() !== "") {
    notes[index] = newNote.trim();
    localStorage.setItem("notes", JSON.stringify(notes));
    loadNotes();
  }
}

// Delete note
function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}

// Initial load
window.onload = loadNotes;
