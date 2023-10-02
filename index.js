const mainContainer = document.getElementById("mainContainer");
const myJourney = document.getElementById("myJourney");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const reservia = document.getElementById("reservia");
const ohmyfood = document.getElementById("ohmyfood");
const reserviaDot = document.getElementById("reserviaDot");
const ohmyfoodDot = document.getElementById("ohmyfoodDot");
const preSlide = document.getElementById("previousSlide");
const nSlide = document.getElementById("nextSlide");
const PPBoxText = document.getElementById("PPBoxText");
const PPBoxImg = document.getElementById("PPBoxImg");
const premierePage = document.getElementById("premierePage");
const deuxiemePage = document.getElementById("deuxiemePage");
const divProject = document.getElementById("divProject");
const divStory = document.getElementById("divStory");
const divSkills = document.getElementById("divSkills");


let projectArray = [reservia, ohmyfood];
let projectDot = [reserviaDot, ohmyfoodDot];

let index = 0;




function switchNextProject() {
    if ( index < projectArray.length && index < 1){
      index ++;
    } else {
      index = 0;
    }
    projectArray.forEach( element => {
        if (element === projectArray[index]){
          projectArray[index].classList.add('imgProjectDisplay');
          console.log( projectArray[index], " class added");
        }else{
          element.classList.remove('imgProjectDisplay');
          console.log(projectArray[index], " class removed");
        }
    });
    projectDot.forEach( element => {
        if (element === projectDot[index]){
          projectDot[index].classList.add('greenDot');
        }else{
          element.classList.remove('greenDot');
        }
    });
}

function switchPreviousProject() {
    if ( index < projectArray.length && index > 0){
        index--;
    } else {
        index = 1;
    }
    projectArray.forEach( element => {
        if (element === projectArray[index]){
            projectArray[index].classList.add('imgProjectDisplay');
        }else{
            element.classList.remove('imgProjectDisplay');
        }
    });
    projectDot.forEach( element => {
        if (element === projectDot[index]){
            projectDot[index].classList.add('greenDot');
        }else{
            element.classList.remove('greenDot');
        }
    });
}

PPBoxImg.addEventListener("click", () => {
  premierePage.classList.add('displayFalse');
  deuxiemePage.classList.remove('displayFalse');
})

PPBoxText.addEventListener("click", () => {
  premierePage.classList.add('displayFalse');
  deuxiemePage.classList.remove('displayFalse');
})



myJourney.addEventListener("click", () => {
  divStory.classList.remove("displayFalse");
  divProject.classList.add("displayFalse");
  divSkills.classList.add("displayFalse");
});

skills.addEventListener("click", () => {
  divSkills.classList.remove("displayFalse");
  divProject.classList.add("displayFalse");
  divStory.classList.add("displayFalse");
});

projects.addEventListener("click", () => {
  divProject.classList.remove("displayFalse");
  divStory.classList.add("displayFalse");
  divSkills.classList.add("displayFalse");

});

preSlide.addEventListener("click", () =>  {
  console.log("je suis utilisé");
    switchPreviousProject()
})

nSlide.addEventListener("click", () => {
  console.log("je suis utilisé")
    switchNextProject()
})