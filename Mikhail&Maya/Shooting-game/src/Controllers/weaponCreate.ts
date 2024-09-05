import { Weapon } from "../Model/WeaponModel";
import { handleStartGame } from "./handleStartGame";
import { Target } from "../Model/TargetModel";

export function weaponCreate(weaponId:string,root:HTMLElement){
    let weapon: Weapon | null = null;
    switch(weaponId){
        case 'pistolImage':
            weapon=new Weapon('/src/images/weapons/pistolGame.png','/src/audio/pew.m4a',weaponId);
            break;
            case 'akImage':
            weapon=new Weapon('/src/images/weapons/ak47Game.png','/src/audio/akAudio.m4a',weaponId);
            break;
            case 'm16Image':
            weapon=new Weapon('/src/images/weapons/m16Game.png','/src/audio/m16Audio.m4a',weaponId);
            break;
            
        default: console.error("didnt choose weapon");
      }
      if(weapon)
         handleStartGame(weapon,root);
}