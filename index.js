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

const varProjects = `
  <div class="containerProject">
    <h2>Mes projets</h2>
    <div class="projectDisplay">
      <div class="sizeChevron" id="previousSlide"><i class="fa-solid fa-chevron-left"></i></div>
      <div class="imgContainerProject">
        <a href="https://duncancbr.github.io/CarbonnierDuncan_02_08012021/"><img src="./images/reservia.png" class="imgProject imgProjectDisplay"alt="Projet Réservia" id="reservia" /></a>
        <a href="https://duncancbr.github.io/CarbonnierDuncan_3_07052021/"><img src="./images/ohmyfood.png" class="imgProject" alt="" id="ohmyfood"></a>
      </div>
      <div class="sizeChevron">
        <i class="fa-solid fa-chevron-right" id="nextSlide"></i>
      </div>
    </div>
    <div class="dotProjectDisplay">
      <i class="fa-solid fa-circle colorDot greenDot" id="reserviaDot" l></i>
      <i class="fa-solid fa-circle colorDot" id="ohmyfoodDot"></i>
    </div>
    </div>`;

const varMyJouney = `    <div class="containerStory">
<div class="containerPlacementStory">
  <h2>A propos de mon parcours...</h2>
  <p>
    Mon parcours débute avec l'obtention d'un Bac
    <abbr title="Science technologique du management et de la gestion"
      >STMG</abbr
    >, aprés une année reserviste en gendarmerie j'ai décidé d'aller
    en Fac de sport. N'y trouvant pas ma place, je découvre le
    développement web sur Openclassrooms, une formation à distance.
    Pour payer ma formation et subvenir à mes besoins, je travail en
    parallèle à temps plein en tant qu'Employé polyvalent. A la suite
    de cette formation, je découvre le cursus MSC d'épitech. Afin de
    financer l'école, j'ai travaillé un an au poste d'employé
    polyvalent dans un fast food. Aujourd'hui je suis Etudiant Epitech
    .
  </p>
</div>
</div>`;

const varSkills = `<div class="containerSkill">
<div class="containerPlacementSkill">
  <h2>Compétences</h2>
  <table>
    <thead>
      <tr>
        <th>Langages</th>
        <th>Niveau</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="marginTable">HTML</td>
        <td class="marginTable">
          <i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i>
        </td>
      </tr>
      <tr>
        <td class="marginTable">CSS</td>
        <td class="marginTable">
          <i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i>
        </td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td>
          <i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i
          ><i class="fa-regular fa-star"></i>
        </td>
      </tr>
      <tr>
        <td>React</td>
        <td>
          <i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-solid fa-star"></i
          ><i class="fa-regular fa-star"></i
          ><i class="fa-regular fa-star"></i>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>`;

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

preSlide.addEventListener("click", () => {
    switchPreviousProject()
})

nSlide.addEventListener("click", () => {
    switchNextProject()
})


myJourney.addEventListener("click", () => {
  mainContainer.innerHTML = varMyJouney;
});

skills.addEventListener("click", () => {
  mainContainer.innerHTML = varSkills;
});

projects.addEventListener("click", () => {
  index = 0;
  projectArray.forEach( element => {
    element.classList.remove('imgProjectDisplay')
  })
  projectDot.forEach ( element => {
    element.classList.remove('greenDot')
  })
  mainContainer.innerHTML = varProjects;

});