import { Weapon } from "../Model/WeaponModel";
import { Target } from "../Model/TargetModel";
import { renderHomeScreen } from "../View/homescreen";

export function handleStartGame(weapon: Weapon, root: HTMLElement) {
  const targets: Target[] = [
    new Target("/src/images/targets/MohamadD.jpg", { x: 0, y: 0 }, root,"mohamad"),
    new Target("/src/images/targets/Nassralla.jpg", { x: 0, y: 0 }, root,"nasralla"),
    new Target("/src/images/targets/Sinwar-mouse.jpg", { x: 0, y: 0 }, root,"sinwar"),
    new Target("/src/images/targets/yismail.jpg", { x: 0, y: 0 }, root,"yismail"),
    new Target("/src/images/targets/cat.png", { x: 0, y: 0 }, root,"cat"),
    new Target("/src/images/targets/cat2.png", { x: 0, y: 0 }, root,"cat")
  ];

  

  renderHomeScreen(weapon, root, targets);

  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerText = "Score: 0";
  }
}
