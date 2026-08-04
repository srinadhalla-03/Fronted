const noteinput = document.getElementById("noteinput");
const savebtn = document.getElementById("savebtn");
const displaybtn = document.getElementById("displaybtn");
const notescontainer = document.getElementById("notescontainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

savebtn.addEventListener("click", () => {
  if (noteinput.value.trim() === "") {
    alert("Please write a note");
    return;
  }
  notes.push(noteinput.value.trim()); 
  localStorage.setItem("notes", JSON.stringify(notes));
  noteinput.value = ""; 
  alert("Note saved!");
});

displaybtn.addEventListener("click", () => {
  notescontainer.innerHTML = "";
  notes.forEach((note) => {
    const noteDiv = document.createElement("div");
    noteDiv.textContent = note;
    notescontainer.appendChild(noteDiv);
  });
});
