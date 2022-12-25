let textToChangeElement = document.getElementById('text-to-change');

function updateText() {
    let currentText = textToChangeElement.innerHTML;
    let nextText = 'Git/Github';
    currentText.innerHTML = nextText;
}
setInterval(updateText, 3000);