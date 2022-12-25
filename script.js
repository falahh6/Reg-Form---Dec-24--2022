let textToChangeElement = document.getElementById('text-to-change');
let textArray = ['Git', 'GitHub', 'LinkedIn'];
let counter = 0;

function updateText() {
    textToChangeElement.classList.add('swipe-up');
    textToChangeElement.textContent = textArray[counter];
    counter = (counter + 1) % textArray.length;
}
setInterval(updateText, 3000);