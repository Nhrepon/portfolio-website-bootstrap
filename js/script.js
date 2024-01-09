const ageInput = document.querySelector(".age-input");
const ageSubmit = document.querySelector(".age-submit");
const ageImg = document.querySelector(".age-img");
const ageTitle = document.querySelector(".age-title");
const ageText = document.querySelector(".age-text");
const ageStatus = document.querySelector(".status");

ageSubmit.addEventListener("click",function(){
  
    if( ageInput.value >= 18 ){
        ageStatus.classList.remove("d-none");
        
        ageTitle.innerHTML = "Congrates! you are adult.";
        ageText.innerHTML = "Enroll our new course to take yuor skill in the next level.";
        ageImg.src = "img/developer.png";
    }else if(ageInput.value < 18){
        ageStatus.classList.remove("d-none");
        ageTitle.innerHTML = "Wow! Your are a cute baby.";
        ageText.innerHTML = "Now watch your favourite cartoons.";
        ageImg.src = "img/baby.jpg";
    }
});
if(ageInput>18){
ageImg.src("img/developer.png");
}