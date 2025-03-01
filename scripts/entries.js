const diaryEntryElm = document.getElementById('diary-entry');

// previous entries submitted
let previousData = localStorage.getItem("previousEntries") 
    ? localStorage.getItem("previousEntries").split("|") 
    : [];

// latest entry submitted
const date = localStorage.getItem("date");
const feeling = localStorage.getItem("feeling");
const content = localStorage.getItem("content");

let entries = [...previousData]; // Start with previous entries

// Create a new entry
if (date && feeling && content) {
    let entry = `<div class="entry-container">
                   <div class="date">Date: ${date}</div>
                   <div class="feeling">Mood: ${feeling}</div>
                   <p class="diaryContent">${content}</p> 
                 </div>`;

    // Check if the entry already exists
    let duplicateExists = previousData.some(prevEntry => prevEntry === entry);

    if (!duplicateExists) {
        entries.push(entry); // Add new entry if it's unique

        // Save updated entries back to localStorage
        localStorage.setItem("previousEntries", entries.join("|"));
    }
}

// Display all unique entries
diaryEntryElm.innerHTML = entries.join("");

console.log(entries);


