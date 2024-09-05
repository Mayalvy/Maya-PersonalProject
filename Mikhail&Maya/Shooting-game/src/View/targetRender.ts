import { Target } from "../Model/TargetModel";
import { handleStartGame } from "../Controllers/handleStartGame";
import MohamadD from "../images/targets/MohamadD.jpg";
import Nassralla from "../images/targets/Nassralla.jpg";
import Sinwar from "../images/targets/Sinwar-mouse.jpg";
import yismail from "../images/targets/yismail.jpg";

let score = 0;

export function renderTarget(targets: Target[], container: HTMLElement) {
  console.log("Rendering targets:", targets);
  container.innerHTML = "";

  container.style.position = "relative";

  targets.forEach((target) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

    const targetElement = document.createElement("div");
    targetElement.classList.add("viewtarget");
    targetElement.style.backgroundImage = `url(${MohamadD})`;
    targetElement.style.backgroundImage = `url(${Nassralla})`;
    targetElement.style.backgroundImage = `url(${Sinwar})`;
    targetElement.style.backgroundImage = `url(${yismail})`;

    targetElement.style.left = `${target.position.x}px`;
    targetElement.style.top = `${target.position.y}px`;
    targetElement.style.backgroundSize = "cover";
    targetElement.style.backgroundPosition = "center";

    gridItem.appendChild(targetElement);
    container.appendChild(gridItem);

    targetElement.addEventListener("click", () => {
      if (!target.isHit) {
        target.hit();
        updateScore();
      }
    });
    target.targetElement = targetElement;


    animateTarget(targetElement);
  });
}
export function downScore(){
  if(score ===0){

  }
  else{
  score -= 5;
  }
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = `Score: ${score}`;
  }
}
export function updateScore() {
  score += 5;
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = `Score: ${score}`;
  }
}

function animateTarget(targetElement: HTMLElement) {
  const popInOut = () => {
    targetElement.classList.add("up");
    targetElement.classList.remove("out");

    setTimeout(() => {
      targetElement.classList.add("out");
      targetElement.classList.remove("up");
    }, Math.random() * 2000 + 1000);
  };

  setInterval(popInOut, Math.random() * 4000 + 1000);
}
