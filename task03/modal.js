window.onload = function() {
    let images = document.querySelectorAll('.image_gallery img');
    for (let i=0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            images[i].classList.toggle("modal");
        });
    };
};