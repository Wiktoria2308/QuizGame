const classmates = [
	{
		"name" : "Adi",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander B.",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander K.",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin B.",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin T.",
		"image": "assets/images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle",
		"image": "assets/images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage",
		"image": "assets/images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel B.",
		"image": "assets/images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel C.",
		"image": "assets/images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin",
		"image": "assets/images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma",
		"image": "assets/images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric",
		"image": "assets/images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans",
		"image": "assets/images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira",
		"image": "assets/images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf",
		"image": "assets/images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna",
		"image": "assets/images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi",
		"image": "assets/images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo",
		"image": "assets/images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper",
		"image": "assets/images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan",
		"image": "assets/images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna B.",
		"image": "assets/images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna J.",
		"image": "assets/images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona",
		"image": "assets/images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine",
		"image": "assets/images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia J.",
		"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia N.",
		"image": "assets/images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus L.",
		"image": "assets/images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin O.",
		"image": "assets/images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria H.",
		"image": "assets/images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria L.",
		"image": "assets/images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola",
		"image": "assets/images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina",
		"image": "assets/images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond",
		"image": "assets/images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin",
		"image": "assets/images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara",
		"image": "assets/images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim",
		"image": "assets/images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat",
		"image": "assets/images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias",
		"image": "assets/images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria",
		"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	},
];

//function for making array elements in random order
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffleArray(classmates);

const container = document.getElementById('container');
let index = 0;
let howManyRight = 0;
let highscore = 0;

// using array map() method
// array with all names
const allNames = classmates.map(function (element) {
	return `${element.name}`;
})


// function adding classes to buttons to show right and wrong answers
// and showing text with information if user guessed right or wrong
const workButtons = () => {
  let buttons = document.querySelectorAll('.button');

  document.querySelector('.buttons-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let buttonEl = e.target;
      buttonEl.classList.add('selected-button');

      buttons.forEach((button) => {
        if (button.innerHTML === classmates[index].name) {
          button.classList.add('right-button');
        } else {
          button.classList.add('wrong-button');
        }
        button.disabled = true;
			});
			
      if (buttonEl.innerHTML === classmates[index].name) {
        document.getElementById('right-or-wrong').innerHTML = 'You guessed right!';
        howManyRight++;
        index++;
        setTimeout(function () {
          renderImages();
				}, 1500);
      } else {
        document.getElementById('right-or-wrong').innerHTML = 'You guessed wrong!';
        index++;
        setTimeout(function () {
          renderImages();
        }, 1500);
      }
    }
  });
}


//play again after one round
const makePlayAgain = () => {
  document.getElementById('play_again').addEventListener('click', (e) => {
    howManyRight = 0;
		index = 0;
		shuffleArray(classmates);
    renderImages();
  });
}

/**
 * function for checking if there is new highscore or not 
 */
const betterOrNot = () => {
	console.log('highscore', highscore);
console.log('howmanyright', howManyRight);
  const better_or_not = document.getElementById('betterOrNot');
  
  if (highscore !== 0 && highscore >= howManyRight) {
    better_or_not.innerHTML = 'No new highscore.';
	}
	if (highscore !== 0 && highscore < howManyRight) {
		better_or_not.innerHTML = 'New highscore!';
		highscore = howManyRight;
	}
	if (highscore === 0) {
    highscore = howManyRight;
  }
}


// function for render quiz
const renderImages = () => {
  container.innerHTML = '';
	// showing only 10 photos by round to shorten the game
	if (index < 10) {
		//using array filter() method
		let randomNames = allNames.filter(() => {
			return allNames[Math.floor(Math.random() * allNames.length)];
		})
		const fourNames = [];
		fourNames.push(classmates[index].name);
		let count = 0;
		for (let i = 0; i < randomNames.length; i++) {
			  if (!fourNames.includes(randomNames[i]) && count !== 3) {
			    fourNames.push(randomNames[i]);
			    count++;
				}
				if (count === 3) {
					break;
				}
			}

    let randomArray = shuffleArray(fourNames); // shuffle array because name to guess is always first in index;
    container.innerHTML += `
  <image src='${classmates[index].image}' class='image'>
  <p class='right-or-wrong' id='right-or-wrong'></p>
  <div class='buttons-container'>
  <button class='button'>${randomArray[0]}</button>
  <button class='button'>${randomArray[1]}</button>
  <button class='button'>${randomArray[2]}</button>
  <button class='button'>${randomArray[3]}</button>
  </div>
  `;

    workButtons();
  } else {
    container.innerHTML += `
    <p class='result' id='result'>End of game.<br>Your result is ${howManyRight}/${10}.</p>
    <p class='highscore' id='betterOrNot'></p>
    <button class='play-again-button' id='play_again'>Play again</button>
    `;
    betterOrNot();
    makePlayAgain();
  }
};

renderImages();



