// index.html
// Save elements in a variable
const dateElm = document.getElementById('date');
const feelingElm = document.getElementById('inputFeeling');
const diaryContentElm = document.getElementById('diaryInput');
const submitBtn = document.getElementById('submit-btn');

// entries.html
const diaryEntryElm = document.getElementById('diary-entry');
let entry = '';



submitBtn.addEventListener('click', function(){
    // get elements value
    let date = dateElm.value;
    let feeling = feelingElm.value;
    let diaryContent = diaryContentElm.value;
    const dateNow = new Date();

    if(!date && !feeling) {
        date = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`;
        feeling = 'No Mood';
        diaryContent = 'No Entry';
    };

    

    localStorage.setItem('diaryDate', date);
    localStorage.setItem('feeling', feeling);
    localStorage.setItem('diaryContent', diaryContent);

    console.log(date, feeling, diaryContent);
});





