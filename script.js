var $baloon = document.getElementById('baloon');
console.log($baloon);


window.setInterval(function(){
    $baloon.style.transform = "translate("+getRandomIntInclusive(20, 100)+"px,"+getRandomIntInclusive(20, 100)+"px)";
  }, 1000);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }