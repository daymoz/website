var $baloon_1 = document.getElementById('item-1');
var $area = document.getElementById('area');

var item1Width = $baloon_1.clientWidth;

var areaHeight = $area.clientHeight;
var areaWidth = $area.clientWidth;

var areaWidthAdjustMin = (areaWidth/3) - (areaWidth/4); 
var areaWidthAdjustMax = (areaWidth/3) - (item1Width/2); 

var areaHeightAdjustMin = areaHeight - ((areaHeight*2)/3);
var areaHeightAdjustMax = areaHeight - (areaHeight/3);

$baloon_1.style.top = getRandomIntInclusive(areaHeightAdjustMin, areaHeightAdjustMax)+"px";
$baloon_1.style.left = getRandomIntInclusive(areaWidthAdjustMin, areaWidthAdjustMax)+"px";

$baloon_1.addEventListener('mousemove', move);

window.setInterval(function(){
    $baloon_1.style.transform = "translate("+getRandomIntInclusive(10, 15)+"px,"+getRandomIntInclusive(10, 15)+"px)";
  }, 100);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function move(e){
  //console.log(this);
  // console.log(this.offsetLeft);
  // console.log(this.offsetTop);
  // console.log(e.clientX);
  // console.log(e.clientY);
  mouseX = e.clientX - this.offsetLeft;
  mouseY = e.clientY - this.offsetTop;
  console.log(mouseX);
  console.log(mouseY);
  
}
