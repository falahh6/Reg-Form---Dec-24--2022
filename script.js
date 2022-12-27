let textToChangeElement = document.getElementById('text-to-change');
let textArray = ['GitHub', 'LinkedIn', 'Git'];
let counter = 0;

function updateText() {
    textToChangeElement.classList.add('swipe-up');
    textToChangeElement.textContent = textArray[counter];
    counter = (counter + 1) % textArray.length;
}
setInterval(updateText, 3000);


var countDownDate = new Date("Dec 29, 2022 09:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);