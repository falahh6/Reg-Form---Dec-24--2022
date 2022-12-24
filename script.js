window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (scrollTop > 500) {
        document.body.style.background = 'linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)';
    } else {
        document.body.style.backgroundColor = '#ffffff';
    }
});