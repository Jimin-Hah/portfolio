const covers = document.querySelectorAll(".cover");

covers.forEach(function(cover){

    cover.addEventListener("click", function(){

        const details =
            this.parentElement.querySelector(".details");

        details.classList.toggle("open");

    });

});

// 제목 클릭

document.querySelectorAll(".work-title").forEach(title => {

    title.addEventListener("click", () => {

        const details = title.nextElementSibling;

        details.classList.toggle("active");

    });

});



// 슬라이더

document.querySelectorAll(".slider").forEach(slider => {

    const images = slider.querySelectorAll("img");

    const prev = slider.querySelector(".prev");

    const next = slider.querySelector(".next");

    let index = 0;

    images[index].classList.add("active");

    function showImage(i){

        images.forEach(img=>img.classList.remove("active"));

        images[i].classList.add("active");

    }

    next.addEventListener("click",()=>{

        index++;

        if(index>=images.length){

            index=0;

        }

        showImage(index);

    });

    prev.addEventListener("click",()=>{

        index--;

        if(index<0){

            index=images.length-1;

        }

        showImage(index);

    });

});