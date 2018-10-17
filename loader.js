function Load(element) {
    var that = this;
    var elementStyle = getComputedStyle(element);
    var elementWidthValue = element.offsetWidth;

    function getRandomDigit(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.go = function() {
        var timer = setInterval(function() {
            if(elementWidthValue <= 75) {
                elementWidthValue += getRandomDigit(5, 25);
            } else {
                elementWidthValue += getRandomDigit(3, (100 - elementWidthValue));
            }
            element.style.width = elementWidthValue+'%';
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