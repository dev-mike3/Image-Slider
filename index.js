const slider = document.getElementById("slider");
const slides = document.getElementById("slides");

let slideIndex = 0;
const slideWidth = slider.clientWidth;



function nextBtn() {
   slideIndex++;

   if (slideIndex > 5) {
     slideIndex = 0;
   }

   //
   slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`
         
};



function PrevBtn() {
    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = 5
    }

    slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
};















// //previous btn functionality
// prevBtn.addEventListener("click", () => {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = 5;
//   }
//   slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
// });

// //nextBtn functionality
// nextBtn.addEventListener("click", () => {
//   slideIndex++;
//   if (slideIndex > 5) {
//     slideIndex = 0;
//   }
//   slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
// });

