export class Target {
  name:string;
  image: string;
  position: { x: number; y: number };
  id: string;
  isHit: boolean;
  gameContainer: HTMLElement;
  targetElement: HTMLElement;

  constructor(image: string,position: { x: number; y: number },gameContainer: HTMLElement,name:string) {
    this.name=name;
    this.image = image;
    this.position = position;
    this.id = crypto.randomUUID();
    this.isHit = false;
    this.gameContainer = gameContainer;
    this.targetElement = document.createElement("div");
  }
  setRandomPosition() {
    this.position.x = Math.floor(Math.random() * (window.innerWidth - 100)); 
    this.position.y = Math.floor(Math.random() * (window.innerHeight - 100)); 
}
  hit() {
    if (!this.isHit) {
      this.isHit = true;
      console.log(`Target ${this.id} hit!`);
      return true;
    }
    return false;
}
}
