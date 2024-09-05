export class Weapon{
   name:string;
   id: string;
   image: string;
   shootingAudio: string; 
   
   constructor(image:string, shootingAudio:string, name:string){
    this.name=name;
    this.id = crypto.randomUUID(),
    this.image = image,
    this.shootingAudio = shootingAudio
   }
   shoot() {
    const audio = new Audio(this.shootingAudio);
    audio.play();
}
}