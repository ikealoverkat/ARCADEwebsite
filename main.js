document.addEventListener('DOMContentLoaded', () => {
    const scrollers = document.querySelectorAll(".scroller");

    if(!(window.matchMedia("(prefers-reduced-motion: reduce)").matches || (window.innerWidth <= 768))) {
        addAnimation();
    }

    function addAnimation() {
        scrollers.forEach((scroller) => {
            scroller.setAttribute("data-animated", true);
        });
}
});