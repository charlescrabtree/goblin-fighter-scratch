// import functions and grab DOM elements
const deadNumberEl = document.querySelector('#deaded-number');
const arnoldHPEl = document.querySelector('#arn-hp');
const arnImgEl = document.querySelector('#arn-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
// let state
let deadGobs = 0;
let arnoldHP = 200;
let goblins = [
    { name: 'Samantha', hp: 4},
    { name: 'Noi', hp: 6},
    { name: 'Kalia', hp: 20}
];
// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const gobName = data.get('gob-gob-name');

    const newGob = {
        name: gobName,
        hp: Math.ceil(Math.random() * 15),
    };

    goblins.push(newGob);

    displayGoblins();
});

function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {

        const goblinEl = renderGoblin(goblin);

        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
                if (Math.random() < .25) {
                    goblin.hp--;
                    alert('you hit poor wittle ' + goblin.name);
                } else {
                    alert ('Shame on you! You tried to hit ' + goblin.name + ' but you missed. Big meanie.');
                }
            }
          }

          goblinListEl.append(goblinEl);
    }
}

displayGoblins();