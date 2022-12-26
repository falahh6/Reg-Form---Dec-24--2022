let textToChangeElement = document.getElementById('text-to-change');
let textArray = ['GitHub', 'LinkedIn', 'Git'];
let counter = 0;

function updateText() {
    textToChangeElement.classList.add('swipe-up');
    textToChangeElement.textContent = textArray[counter];
    counter = (counter + 1) % textArray.length;
}
setInterval(updateText, 3000);


// Set the date we're counting down to
var countDownDate = new Date("Dec 29, 2022 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);