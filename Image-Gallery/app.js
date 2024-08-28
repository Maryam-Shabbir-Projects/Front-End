

const thumbnails = document.querySelectorAll('.thumbnail');
const fullSizeImage = document.getElementById('full-size-image');
const fullSizeContainer = document.querySelector('.full-size');
const prevIcon = document.querySelector('#previous');
const nextIcon = document.querySelector('#next');
const back = document.querySelector("#back");
let body = document.querySelector("body");

let currentImageIndex = 0;


thumbnails.forEach((thumbnail,index) => {
  thumbnail.addEventListener('click', () => {
     currentImageIndex = index;
    updateFullSizeImage();
    prevIcon.style.color = "black";
    nextIcon.style.color = "black";
  });
});

function updateFullSizeImage() {
    fullSizeImage.src = thumbnails[currentImageIndex].src;
    fullSizeContainer.style.display = 'block';
    
  }


prevIcon.addEventListener('click', () => {
    prevIcon.style.color = "red";
  if (currentImageIndex > 0){ 
    currentImageIndex--;
  updateFullSizeImage();
  }
});

nextIcon.addEventListener('click', () => {
    nextIcon.style.color = "green";
  if (currentImageIndex < thumbnails.length) {
    currentImageIndex++;
  updateFullSizeImage();
  }
});


back.addEventListener("click",()=>{
  fullSizeContainer.style.display = 'none';
})
