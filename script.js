var caret = document.querySelector('i')
var drawer = document.querySelector('article')

caret.addEventListener('click', slider)

function slider() {
  if (drawer.classList.contains('slide-off')) {
    drawer.classList.remove('slide-off')
    drawer.classList.add('slide-show')
    caret.classList.remove('fa-caret-right')
    caret.classList.add('fa-caret-left')
  } else {
    drawer.classList.remove('slide-show')
    drawer.classList.add('slide-off')
    caret.classList.remove('fa-caret-left')
    caret.classList.add('fa-caret-right')
  }
}

var go = document.querySelector('#go')
var jump = document.querySelector('#jump')

go.addEventListener('click', scrollIt)
jump.addEventListener('click', jumpUp)

document.onkeydown = function() {
    switch (window.event.keyCode) {
//        case 37:
//        stopIt()
//        break;
        case 39:
		scrollIt()
        break;
        case 32:
        jumpUp()
        break;
    }
};

var grass1B = document.querySelector('#grass1b')
var grass1F = document.querySelector('#grass1f')
var grass2B = document.querySelector('#grass2b')
var grass2F = document.querySelector('#grass2f')
var hills1B = document.querySelector('#hills1b')
var hills1F = document.querySelector('#hills1f')
var hills2B = document.querySelector('#hills2b')
var hills2F = document.querySelector('#hills2f')
var dog = document.querySelector('#dog')

function scrollIt() {
  grass1B.classList.add('g1bscroll')
  grass1F.classList.add('g1fscroll')
  grass2B.classList.add('g2bscroll')
  grass2F.classList.add('g2fscroll')
  hills1B.classList.add('h1bscroll')
  hills1F.classList.add('h1fscroll')
  hills2B.classList.add('h2bscroll')
  hills2F.classList.add('h2fscroll')
  dog.classList.add('dogwalk')
}

//function stopIt() {
//  grass1B.classList.remove('g1bscroll')
//  grass1F.classList.remove('g1fscroll')
//  grass2B.classList.remove('g2bscroll')
//  grass2F.classList.remove('g2fscroll')
//  hills1B.classList.remove('h1bscroll')
//  hills1F.classList.remove('h1fscroll')
//  hills2B.classList.remove('h2bscroll')
//  hills2F.classList.remove('h2fscroll')
//  dog.classList.remove('dogwalk')
//}

function jumpUp() {
  if(document.querySelector('.dogwalk') !== null){
       dog.classList.remove('dogwalk')
       }
  dog.classList.add('dogjump')
  setTimeout(function(){
    dog.classList.remove('dogjump')
    if(document.querySelector('.g1bscroll') !== null){
       dog.classList.add('dogwalk')
       }
  }, 800)
}