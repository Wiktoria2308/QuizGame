const classmates = [
  {
    name: 'Wiktoria',
    image: 'images/1.jpg',
  },
  {
    name: 'Glafira',
    image: 'images/2.jpg',
  },
  {
    name: 'Paulina',
    image: 'images/3.jpg',
  },
  {
    name: 'Emma',
    image: 'images/4.jpg',
  },
  {
    name: 'Malin',
    image: 'images/5.jpg',
  },
  {
    name: 'Sara',
    image: 'images/6.jpg',
  },
  {
    name: 'Johanna',
    image: 'images/7.jpg',
  },
  {
    name: 'Elin',
    image: 'images/8.jpg',
  },
  {
    name: 'Josefine',
    image: 'images/9.jpg',
  },
  {
    name: 'Hanna',
    image: 'images/10.jpg',
  },
];
const container = document.getElementById('container');
let next = 0;
let howManyRight = 0;

// array with all names
let allNames = [];
for (let i = 0; i < classmates.length; i++) {
  allNames.push(classmates[i].name);
}

// function for making array elements in random order
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// function for render quiz
const renderImages = () => {
  container.innerHTML = '';

  if (next < allNames.length) {
    //array with four names for four buttons
    let fourNames = [];
    fourNames.push(classmates[next].name);
    let count = 0;
    for (let i = 0; i < 100; i++) {
      //////////////////////////////////////100 or allNames.length
      let randomName = allNames[Math.floor(Math.random() * allNames.length)];
      if (!fourNames.includes(randomName) && count !== 3) {
        fourNames.push(randomName);
        count++;
      }
    }
    console.log(fourNames);
    let randomArray = shuffleArray(fourNames);

    container.innerHTML += `
  <image src='${classmates[next].image}' class='image'>
  <button class='next-image' id='next-image'>></button>
  <p class='right-or-wrong' id='right-or-wrong'></p>
  <div class='buttons-container'>
  <button class='button'>${randomArray[0]}</button>
  <button class='button'>${randomArray[1]}</button>
  <button class='button'>${randomArray[2]}</button>
  <button class='button'>${randomArray[3]}</button>
  </div>
  `;
    document.getElementById('next-image').disabled = true;
    workButtons();
  } else {
    container.innerHTML += `
    <p class='result' id='result'>End of game.<br>Your result is ${howManyRight}/${allNames.length}.</p>
    `;
  }
};

renderImages();

function workButtons() {
  let buttons = document.querySelectorAll('.button');

  document.querySelector('.buttons-container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let buttonEl = e.target;
      buttonEl.classList.add('selected-button');

      if (buttonEl.innerHTML === classmates[next].name) {
        document.getElementById('right-or-wrong').innerHTML = 'You guessed right!';
        howManyRight++;
      } else {
        document.getElementById('right-or-wrong').innerHTML = 'You guessed wrong!';
      }
      buttons.forEach((button) => {
        if (button.innerHTML === classmates[next].name) {
          button.classList.add('right-button');
        } else {
          button.classList.add('wrong-button');
        }
        button.disabled = true;
      });
      document.getElementById('next-image').disabled = false;
    }
  });

  document.getElementById('next-image').addEventListener('click', (e) => {
    next++;
    renderImages();
    console.log(next);
  });
}