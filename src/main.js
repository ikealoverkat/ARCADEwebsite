import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-200px";
        }
    }        
        
    const scrollers = document.querySelectorAll(".scroller");

    if(!(window.matchMedia("(prefers-reduced-motion: reduce)").matches || (window.innerWidth <= 768))) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
        });
    }

    const click = document.getElementById('click1');
    const clickableElements = document.querySelectorAll('.click-sound');

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            click.load();
            click.play();
        });
    });    
});        

document.addEventListener('DOMContentLoaded', () => {
    const signup = document.getElementById('signup');
    const signupElements = document.querySelectorAll('.click-signup');
    signupElements.forEach(element => {
        element.addEventListener('click', () => {
            signup.load();
            signup.play();
        });
    });
})