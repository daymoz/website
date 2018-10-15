function Lettering(element) {
  var that = this;
  const string = element.innerHTML;
  const parent = element.parentElement;
  
  console.log(parent);
  var characters = [];
  console.log(string);

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
      animationDuration: 50,
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
      item.innerHTML = goShuffle(item, currentChar, chars, shuffleInterval);
      // console.log(chars);
      //console.log(shuffleInterval);
    });

    function getRandomCharacter(charArray) {
      var randomChar = '';
      var generateRandomNumber = Math.floor(Math.random() * charArray.length);
      randomChar = charArray[generateRandomNumber];
      return randomChar;
    }

    function goShuffle(el, currentChar, charArray, shuffleInterval) {
      var secondes = 0;
      var secTimer = window.setInterval(function() {
        //console.log('currentChar:'+currentChar);
        secondes += 1;
        if(secondes == 5) {
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
}

var $head = document.getElementById('heading');
var head = new Lettering($head);
head.letterIt();
head.shuffle();