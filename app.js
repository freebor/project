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
  oldTestamentoption.classList.remove('activeOldChapter');
  bookChapter.classList.add('activeBookChapter');
  let chapHead = document.querySelector('.chap-head');
  let chapWrap = document.querySelector('.chapters-wrapper');
  let bibleBook = '<h2>'+ oldBibleChapter[chap].bibleBookName[0] +'</h2>';

  // oldBibleChapter[chap].bibleBookName.sort();
  
  // for (let i = 0; i < oldBibleChapter[chap].bibleBookName.length; i++) {
  //   bibleBook = '<h2>'+ oldBibleChapter[chap].bibleBookName[i] +'</h2>';
  // }

  chapHead.innerHTML = bibleBook;
};