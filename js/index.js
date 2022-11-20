
function openMenu() {
  var x = document.getElementById("myNav");
  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

// let slideIndex = 0;
// showSlides();
// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// let slideIndex = 1;
// showSlides(slideIndex);


// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
  
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
 
//   slides[slideIndex - 1].style.display = "block";
 
// }
// function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
var currentIndex = 1;
displaySlides(currentIndex);
function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
function setSlides(num) {
    displaySlides(currentIndex += num);
}
const images = document.querySelectorAll(".anchor");
let imgSrc;
let imgIndex 

// get images src onclick
images.forEach((img ,i) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.id;
        imgModal(imgSrc)
        console.log(imgSrc);
        imgIndex = i;
      
    });
});
let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  const closeBtn = document.createElement("i");
closeBtn.setAttribute("class", "fas fa-times closeBtn");
// const text = document.createElement("p");
// text.innerHTML =`image  ${imgIndex}  of 6`
//close function
closeBtn.onclick = () => {
    modal.remove();
};

//next and previous buttons
const nextBtn = document.createElement("i");
nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
// change the src of current image to the src of next image
nextBtn.onclick = () => {
    newImage.setAttribute("src", nextImg())
};
const prevBtn = document.createElement("i");
prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
// change the src of current image to the src of pevious image
prevBtn.onclick = () => {
    newImage.setAttribute("src", prevImg())
   
}

modal.append(newImage, closeBtn, nextBtn, prevBtn);
 
};
//next image function
let nextImg = () => {
  imgIndex++;
  //check if it is the the last image
  if (imgIndex >= images.length) {
      imgIndex = 0
  }
  //return src of the new image
  return images[imgIndex].id;
};
//previous image function
let prevImg = () => {
  imgIndex--;
  console.log(imgIndex);
  //check if it is the first image
  if (imgIndex < 0) {
      imgIndex = images.length - 1
  }
  //return src of previous image
  return images[imgIndex].id
}


const dots = document.querySelectorAll(".dots button");
const clints = document.querySelectorAll(".sectionClints .container .clint");
let i = 0; // current slide
let j = 3; // total slides

$(document).ready(function(){
  $('.owl-one').owlCarousel({
       loop:true,
  margin:40,
  nav:true,
  dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });

  $('.owl-two').owlCarousel({
      loop:true,
       margin:40,
       nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:4
          }
      }
  });

  $('.owl-three').owlCarousel({
       loop:true,
  margin:40,
  nav:true,
  dots:false,
     responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });
  $('.owl-four').owlCarousel({
    loop:true,

nav:false,
dots:true,


  responsive:{
       0:{
           items:1
       },
       600:{
           items:1
       },
       1000:{
           items:1
       }
   }
});
});