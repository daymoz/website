function CryptEffect(element) {
  var that = this;
  const string = element.innerHTML;
  const parent = element.parentElement;
  
  var characters = [];

  this.charactersArray = characters;
  
  this.letterIt = function() {
    element.textContent = '';
    for(var i = 0; i <= string.length - 1; i++) {
      var span = document.createElement('span');
      if(string.charAt(i) != ' ') {
        span.setAttribute('data-lettering', '');
      }
      characters.push(string.charAt(i));
      span.innerHTML = string.charAt(i);
      element.appendChild(span);
    }
  }

  this.shuffle = function(opt = null) {
    var options = {
      animationDuration: 4,
      shuffleInterval: 50,
      mixSpecialCharacters: true
    }

    if(typeof opt != "undefined"){
      for(key in opt){
        options[key] = opt[key];
      }
    }

    var animationDuration = options.animationDuration;
    var mixSpecialCharacters = options.mixSpecialCharacters;
    var shuffleInterval = options.shuffleInterval;

    this.chars = [
      'A','B','C','D',
      'E','F','G','H',
      'I','J','K','L',
      'M','N','O','P',
      'Q','R','S','T',
      'U','V','W','X',
      'Y','Z',
      'a','b','c','d',
      'e','f','g','h',
      'i','j','k','l',
      'm','n','o','p',
      'q','r','s','t',
      'u','v','w','x',
      'y','z'
    ];
    this.specialCharacters = [
      '!','§','$','%',
      '&','/','(',')',
      '=','?','_','<',
      '>','^','°','*',
      '#','-',':',';',
      '~', '@'
    ]
  
    if(mixSpecialCharacters){
      this.chars = this.chars.concat(this.specialCharacters);
    }

    var chars = this.chars;

    var spans = document.querySelectorAll('[data-lettering]');
    
    spans.forEach(function(item) {
      var currentChar = item.innerHTML;
      //console.log(currentChar);
      item.innerHTML = goShuffle(item, currentChar, chars, shuffleInterval, animationDuration);
      // console.log(chars);
      //console.log(shuffleInterval);
    });

    function getRandomCharacter(charArray) {
      var randomChar = '';
      var generateRandomNumber = Math.floor(Math.random() * charArray.length);
      randomChar = charArray[generateRandomNumber];
      return randomChar;
    }

    function goShuffle(el, currentChar, charArray, shuffleInterval, animationDuration) {
      var secondes = 0;
      var secTimer = window.setInterval(function() {
        //console.log('currentChar:'+currentChar);
        secondes += 1;
        if(secondes == animationDuration) {
          clearInterval(timer);
          clearInterval(secTimer);
          el.innerHTML = currentChar;
        }
      }, 1000);
      var timer = setInterval(function() {
        var random = getRandomCharacter(charArray);
        el.innerHTML = random;
        if(currentChar === random) {
          clearInterval(timer);
          return random;
        }
      }, shuffleInterval);
    }
  }

  //this.

}

$brackets = document.querySelectorAll('.bracket');
var $prev = document.getElementById('prevAnim');
var $head = document.getElementById('heading');
var $slash = document.querySelector('.slash');
var $loadbar2 = document.getElementById('loadbar-2');
var $innerLoadbar2 = document.getElementById('inner-load-2');
var head = new CryptEffect($head);
head.letterIt();
head.shuffle();

setTimeout(function() {
  init();
}, 6000);

var pageWrap = document.getElementById( 'pagewrap' ),
  pages = [].slice.call( pageWrap.querySelectorAll( 'div.container' ) ),
  currentPage = 0,
  triggerLoading = [].slice.call( pageWrap.querySelectorAll( 'a.pageload-link' ) ),
  preloaderAnim = document.getElementById( 'preloader-anim' );
  preloader = document.getElementById( 'preloader' );
  loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );

function init() {
  setTimeout(function() {
    preloader.classList.add('hide');
  }, 250);
  setTimeout(function() {
    preloaderAnim.classList.add('show');
    $brackets.forEach(function(item) {
      item.classList.remove('bounceIn');
    });
  }, 230);
  setTimeout(function() {
    $prev.style.transform = 'translateX(-30px)';
    $loadbar2.style.transform = 'translateX(-30px)';
    $loadbar2.style.width = 'calc(100% + 35px)';
  }, 700);
  setTimeout(function() {
    $loadbar2.classList.add('animate');
  }, 800);
  setTimeout(function() {
    $slash.style.opacity = 1;
    $slash.classList.add('bounceIn');
  }, 1000);

  setTimeout(function() {
    $innerLoadbar2.style.width = '0';
    $loadbar2.classList.add('reveal');
  }, 1700);
  // after some time hide loader
  loader.show();
  setTimeout(function() {
    preloaderAnim.classList.remove('show');
  }, 3350);
  setTimeout( function() {
    loader.hide();
    preloader.hide();
    //classie.removeClass( pages[ currentPage ], 'show' );
    // pages[ currentPage ].classList.remove('show');
    // // update..
    // currentPage = currentPage ? 0 : 1;
    // pages[ currentPage ].classList.add('show');
    //classie.addClass( pages[ currentPage ], 'show' );

  }, 3300);	
}