const covers = document.querySelectorAll(".cover");

covers.forEach(function(cover){

    cover.addEventListener("click", function(){

        const details =
            this.parentElement.querySelector(".details");

        details.classList.toggle("open");

    });

});
