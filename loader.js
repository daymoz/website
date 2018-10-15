function Load(element) {
    var that = this;
    var elementStyle = getComputedStyle(element);
    var elementWidthValue = element.offsetWidth;
    console.log(elementWidthValue);

    function getRandomDigit(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.go = function() {
        var timer = setInterval(function() {
            elementWidthValue += getRandomDigit(5, 18);
            console.log(elementWidthValue);
            console.log(element);
            element.style.width = "'"+elementWidthValue+"%'";
            if(elementWidthValue >= 100) {
                clearInterval(timer);
            }
        }, getRandomDigit(250, 850));
        //element.style.width = "50%";
    }

}

var $loader = document.getElementById('inner-load');
var head = new Load($loader);
head.go();