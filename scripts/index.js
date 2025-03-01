// index.html
// Save elements in a variable
const dateElm = document.getElementById('date');
const feelingElm = document.getElementById('inputFeeling');
const diaryContentElm = document.getElementById('diaryInput');
const submitBtn = document.getElementById('submit-btn');

// entries.html


export function saveStorage(date, feeling, diaryContent) {
    localStorage.setItem('date', date);
    localStorage.setItem('feeling', feeling);
    localStorage.setItem('content', diaryContent);
}



submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    // get elements value
    let date = dateElm.value;
    let feeling = feelingElm.value;
    let diaryContent = diaryContentElm.value;
    const dateNow = new Date();

    if(!date) {
        date = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`;
    };
    if(!feeling) {
        feeling = 'No Mood';
    }
    if(!diaryContent) {
        diaryContent = 'No Entry';
    }

    saveStorage(date, feeling, diaryContent);

    console.log(date, feeling, diaryContent);

    // Notify entries.html to reload
    localStorage.setItem("reloadEntries", Date.now());
});




