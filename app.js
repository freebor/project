// getting all required element 
const homePage = document.querySelector('.home-page');
const bibleButton = homePage.querySelector('.bible-button');

const testament = document.querySelector('.testament');
const oldTestamentBtn = testament.querySelector('.old-testament');
const newTestamentBtn = testament.querySelector('.new-testament');
const oldTestamentoption = document.querySelector('.old-chapters');
const newTestamentoption = document.querySelector('.new-chapters');
const bookChapter = document.querySelector('.book-chapter-hold');

// To change images when page loads
window.addEventListener('load', ()=>{
  let images = document.getElementById('myImage');
  let img = [
      'img7.jpg',
      'img6.jpg',
      'img5.jpg',
      'img4.jpg',
      'img3.jpg',
      'img2.jpg',
      'img1.jpg'
  ];
    let random = Math.floor(Math.random() * img.length);
    images.src = img[random];
});

// To open the main bible 
bibleButton.addEventListener('click', ()=>{
  testament.classList.add('activeTestament');
  homePage.style.display = "none";
});

// To open the old testament 
oldTestamentBtn.addEventListener('click', ()=>{
  oldTestamentoption.classList.add('activeOldChapter');
  testament.classList.remove('activeTestament');
  showTestament();
});

// To open the new testament 
newTestamentBtn.addEventListener('click', ()=>{
  newTestamentoption.classList.add('activeNewChapter');
  oldTestamentoption.classList.remove('activeOldChapter');
});


// This is used to sort the books of the bible 
const oldBookList = document.querySelectorAll('.butt-hold button');
const newBookList = document.querySelectorAll('.butt-hold2 button');

const oldSortedList = Array.from(oldBookList).sort((a, b) => a.textContent.localeCompare(b.textContent));
const newSortedList = Array.from(newBookList).sort((a, b) => a.textContent.localeCompare(b.textContent));

const newButtonTxt = document.querySelector('.butt-hold2');
newButtonTxt.innerHTML = '';
const oldButtonTxt = document.querySelector('.butt-hold');
oldButtonTxt.innerHTML = '';

newSortedList.forEach(button => {
  newButtonTxt.appendChild(button);
});
oldSortedList.forEach(button => {
  oldButtonTxt.appendChild(button);
});


let pagecouter = 0;

const showTestament = ()=>{
  let oldTestament = document.querySelector('.test');
  let testHead = '<h2>'+ testament[0].oldTestName +'</h2>';
  oldTestament.innerHTML = testHead;
}

