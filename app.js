// getting all required element 
const homePage = document.querySelector('.home-page');
const bibleButton = homePage.querySelector('.bible-button');
const oldBookList = document.querySelectorAll('.butt-hold');
const testament = document.querySelector('.testament');
const oldTestamentBtn = testament.querySelector('.old-testament');
const newTestamentBtn = testament.querySelector('.new-testament');
const oldTestamentoption = document.querySelector('.old-chapters');
const newTestamentoption = document.querySelector('.new-chapters');
const bookChapter = document.querySelector('.book-chapter-hold');
const verses = document.querySelector('.verse-chapter-hold');


// To change images when page loads
window.addEventListener('load', ()=>{
  let images = document.getElementById('myImage');
  let text = [
    'Then Jesus declared, "I am the bread of life. Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty. ',

    "So be careful to live your life wisely, not foolishly.  Ephesians 5:15",

    "Don't judge according to appearances. Judge with right judgment. John 7:24",

    "Mercy unto you, and peace and love be multiplied."
  ]
  let img = [
      'img7.jpg',
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
  showTestament(0);
  // chapHold(0);
});

// To open the new testament 
newTestamentBtn.addEventListener('click', ()=>{
  oldTestamentoption.classList.add('activeOldChapter');

  if (pageCounter < testOpt.length -1) {
    pageCounter++;
    showTestament(pageCounter);
  }
});

let pageCounter = 0;
let verseCount = 0 ;
// let chapcounter = 0;

// this was called in from my json file
function showTestament(index){
  let oldTestament = document.querySelector('.test');
  let bibleBookHold = document.querySelector('.butt-hold');
  let testHead = '<h2>'+ testOpt[index].TestName +'</h2>';
  let bibleBookList = "";
  
  // This is used to sort the books of the bible 
  testOpt[index].bookName.sort();
  
  // this is used to loop the array bookName
  for (let i = 0; i < testOpt[index].bookName.length; i++) {
    bibleBookList += '<button><span class="txt">'+ testOpt[index].bookName[i] +'<i class="icon fa-solid fa-angle-right"></i></span></button>'
  }
  
  oldTestament.innerHTML = testHead;
  bibleBookHold.innerHTML = bibleBookList;
  let chapSelect = bibleBookHold.querySelectorAll('.txt');
  for (let i = 0; i < chapSelect.length; i++) {
    chapSelect[i].setAttribute("onclick", 'bookSelected(this)');
  }
};

const bookSelected = (chap)=>{
  console.log(chap);
  oldTestamentoption.classList.remove('activeOldChapter');
  bookChapter.classList.add('activeBookChapter');
  let chapHead = document.querySelector('#book-title');
  console.log("head",chapHead);
  let chapWrap = document.querySelector('.chapters-wrapper');

  let chapter = "";

  for (let i = 0; i < bibleChapter[0].chapter.length; i++) {
    chapter += '<div class="num">'+ bibleChapter[0].chapter[i] +'</div>' 
  }
  chapHead.innerHTML = chap.innerText;
  chapWrap.innerHTML = chapter;
  let verseSelect = chapWrap.querySelectorAll('.num');
  console.log("verse",verseSelect);
  for (let i = 0; i < verseSelect.length; i++) {
    verseSelect[i].setAttribute("onclick", 'chapSelected(verseCount)');
  }
};

const chapSelected = (verse) =>{
  bookChapter.classList.remove('activeBookChapter');
  verses.classList.add('activeVerse');
  let verseHeadTag = document.querySelector('.verse-head-tag');
  let verseWrap = document.querySelector('.verse-wrapper');
  let verseHead = '';

 
  verseHeadTag.innerHTML = verseHead;
}