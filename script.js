// var $item_1 = document.getElementById('item-1');
// var $baloon_1 = document.getElementById('baloon_1');
// var $area = document.getElementById('area');

// var item1Width = $item_1.clientWidth;
// var item1Height = $item_1.clientHeight;

// var areaHeight = $area.clientHeight;
// var areaWidth = $area.clientWidth;

// var areaWidthAdjustMin = (areaWidth/3) - (areaWidth/4); 
// var areaWidthAdjustMax = (areaWidth/3) - (item1Width/3); 

// var areaHeightAdjustMin = areaHeight - ((areaHeight*2)/3);
// var areaHeightAdjustMax = areaHeight - (areaHeight/3);

// $item_1.style.top = getRandomIntInclusive(areaHeightAdjustMin, areaHeightAdjustMax)+"px";
// $item_1.style.left = getRandomIntInclusive(areaWidthAdjustMin, areaWidthAdjustMax)+"px";

// window.setInterval(function(){
//   $item_1.style.transform = "translate("+getRandomIntInclusive(-15, 15)+"px,"+getRandomIntInclusive(-15, 15)+"px)";
// }, 2000);

// $baloon_1.addEventListener('mousemove', move);
// $baloon_1.addEventListener('mouseout', reset);
// $item_1.addEventListener('mouseenter', clearInterval());

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min +1)) + min;
// }

// function move(e){
//   var mouseX = e.clientX - this.parentNode.offsetLeft - item1Width;
//   var mouseY = e.clientY - this.parentNode.offsetTop - item1Height/2;
//   this.style.transform = "translate(-"+Math.round(mouseX/6)+"px, -"+Math.round(mouseY/6)+"px)";

// }

// function reset() {
//   this.style.transform = "translate(0, 0)";
// }


setTimeout(function() {
    var $preloader = document.getElementById('preloader');
    $preloader.classList.add('show');
}, 500);
$brackets = document.querySelectorAll('.bracket');
setTimeout(function() {
    $brackets.forEach(function(item) {
        item.style.opacity = 1;
        item.classList.add('bounceIn');
      });
}, 1500);