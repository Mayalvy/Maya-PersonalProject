import { handleStartGame } from "../Controllers/handleStartGame";
import { weaponCreate } from "../Controllers/weaponCreate";
export function renderWeaponSelect(root:HTMLElement){
    console.log("hello world");
    root.innerHTML=`
    <div class="weaponSelect" style="background-image: url(/src/images/weaponSelect.png);">
        <h1 style="color:white;margin-bottom:50px;">Choose Your Weapon</h1>
        <div class="weaponCard">
                <img src="/src/images/weapons/pistolSelect.png" id="pistolImage" alt="Pistol" style="width:100px;height:100px;">
        </div>
        <div class="weaponCard">
                <img src="/src/images/weapons/akSelect.png" id="akImage" alt="Ak-47" style="width:150px;height:100px;">
        </div>
        <div class="weaponCard">
                <img src="/src/images/weapons/m16Select.png" id="m16Image" alt="M16" style="width:150px;height:100px;">
        </div>
    </div>`;
     
    const weaponImages = root.querySelectorAll('.weaponCard img');
    weaponImages.forEach(img => {
        img.addEventListener('click', () => weaponCreate(img.id,root));
    });
    const weaponCards = root.querySelectorAll('.weaponCard');
    weaponCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const audioClick = document.querySelector('#click') as HTMLAudioElement;
            if (audioClick) {
                audioClick.play();
            }
        });
    });

}