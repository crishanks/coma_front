const startDiv = document.getElementById('start-div');
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  startDiv.remove();
  startGame();
});
let currentLevel = 0;

function startGame() {
  //Show resources nav bar with pre-set values
  const resourcesBar = document.getElementById('resources-bar');
  resourcesBar.style.visibility = "visible";

  //Create Rows
  createRows();

  //Show level with cards face-down
  level.style.visibility = "visible";
  renderCards(currentLevel);
}

function gameOver(){
  const heroUnit = document.getElementById('hero-unit');
  const healthNum = parseInt(document.getElementById('resource-health-value').textContent);

  if (healthNum > 0) {
    //Win Condition
    destroyRows();
    let title = "You Win";
    let message = "Congratulations. Would you like to play again?"
    createHeroDiv('win', title, message);
  } else {
    //Lose Condition
    destroyRows();
    let title = "You Lose";
    let message = "How Unfortunate. Would you like to play again?"
    createHeroDiv('lose', title, message);
  }
}

function createHeroDiv(str, title, message) {

  destroyRows();
  const body = document.body;
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero-unit');
  heroDiv.classList.add('shadow');
  heroDiv.classList.add('fixed-top');
  heroDiv.id = `${str}-hero-div`;
  const h2 = document.createElement('h2');
  h2.id = `${str}-hero-title`;
  h2.textContent = title;
  const p = document.createElement('p');
  p.id = `${str}-hero-content`;
  p.textContent = message;
  const button = document.createElement('button');
  button.id = 'start-button';
  button.textContent = 'Continue';

  button.addEventListener('click', () => {
    if (str === 'win' || str === 'lose') {
      currentLevel = 0;
    } 
    renderNewLevel(`${str}-hero-div`);
  });

  body.appendChild(heroDiv);
  heroDiv.appendChild(h2);
  heroDiv.appendChild(p);
  heroDiv.appendChild(button);
}

// function clearBoard() {
//   const level = document.getElementById('level');
//   level.remove();
// }

  // if health is 0 turn this true.
  // if end card found turn this true.
  // if health is above 0 and gameOver is true show win screen
  // if gameOver is true and health is 0 or less show lose screen, return to start menu.
