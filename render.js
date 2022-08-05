export function renderGoblin(goblinData) {
    const goblinEl = document.createElement('div');
    const faceEl = document.createElement('img');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');
    

    goblinEl.classList.add('goblin');

    nameEl.textContent = goblinData.name;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    faceEl.src = goblinData.hp > 0 ? `./assets/gob-gobs.png` : './assets/fire-gobs.png';

    if (goblinData.hp < 0) {
        goblinEl.classList.add('dead');
    }
    
    faceEl.classList.add('img-booger');

    goblinEl.append(nameEl, faceEl, hpEl);

    return goblinEl;
}