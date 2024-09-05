import { Target } from "../Model/TargetModel";

let score = 0;
export function updateScore() {
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = `Score: ${score}`;
  }
}

export function handleTargetHit(target: Target) {
  if (target.hit()) {
    score += 5;
    updateScore();
  


const targetElement = target.gameContainer.querySelector('.viewtarget') as HTMLElement;
if (targetElement) {
  targetElement.classList.add('hit-effect'); 

  setTimeout(() => {
    targetElement.style.display = 'none'; 
  }, 1000);
}
  }
}