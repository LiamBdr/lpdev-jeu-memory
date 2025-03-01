import '../scss/app.scss';

let cardsCollected = [];
let DeckOfCards = [];
let cardOneElement, cardTwoElement, startTime;
let seconds = 0;
let currentTurn = 0;
let moves = 0;
let gameWon = false;

const deck = document.querySelector('.deck');
const winContainer = document.querySelector('.win');
const btnReplay = document.querySelector('.replay');
const moveHolder = document.querySelector('.moves');
const resetButton = document.querySelector('.refresh');
const movesContainer = document.querySelector('.moves-selector');
const startBtn = document.querySelector('.game-start-btn');
const timerContainer = document.querySelector('.timer');
const secondsContainer = document.querySelector('.seconds');

const classList = ['fa-paypal', 'fa-paypal', 'fa-docker', 'fa-docker', 'fa-shopify', 'fa-shopify', 'fa-stripe', 'fa-stripe', 'fa-react', 'fa-react', 'fa-android', 'fa-android', 'fa-google-play', 'fa-google-play', 'fa-airbnb', 'fa-airbnb'];
const filteredList = ['fa-paypal', 'fa-docker', 'fa-shopify', 'fa-stripe', 'fa-react', 'fa-android', 'fa-google-play', 'fa-airbnb'];

// ------------------------
//      The Game
// ------------------------

// start game when clicked
startBtn.addEventListener('click', function(){
    // 1. hide the btn
    this.classList.add('hide-start-btn');
    // 2. start the game
    game();
});

// Part 3: When game completes add option to play again
btnReplay.addEventListener('click', replayTheGame);
resetButton.addEventListener('click', replayTheGame);


// ------------------------
//      Functions
// ------------------------

// game function
function game() {
    // Part 1. Shuffle the cards
    letsShuffleThis();

    // Part 2: set the timer: timer function taken from sltackoverflow: https://stackoverflow.com/a/29972322
    startTime = Date.now();
    resetButton.classList.remove('hidden');
    setInterval(function () {
        timerContainer.classList.remove('hidden');
        const delta = Date.now() - startTime; // milliseconds elapsed since start
        seconds = (Math.floor(delta / 1000)); // in seconds
        timerContainer.textContent = seconds;
    }, 1000); // update about every second

    // Part 3: add the flipping functionality to the deck of cards
    //  make use of the bubbling of events and attach the listener to the parent
    deck.addEventListener('click', cardClickHandler)
}

// Function to shuffle a list of class names and then attaches them to a card
function letsShuffleThis() {
    // 1. shuffle the list to randomize position
    DeckOfCards = shuffle([...classList]);
    // 2. get a refrence of the icon element to add class font awesome to.
    const icons = document.querySelectorAll('.back');
    // 3. remove any pre-defined classes in them
    icons.forEach(function (el) {
        for (let x = 0; x < filteredList.length; x++) {
            if (el.classList.contains(filteredList[x])) {
                el.classList.remove(filteredList[x]);
            }
        }
    });
    // 4. add the class to the list of classes in the icon element
    for (let i = 0; i < icons.length; i++) {
        icons[i].classList.add(DeckOfCards[i]);
    }
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// function to replay the game
function replayTheGame() {
    // hide message again
    hideWin();
    // remove any disabled elements
    document.querySelectorAll('.cant-click-this').forEach(function(el) {
        el.classList.remove('cant-click-this');
    });
    // remove any flipped classes
    document.querySelectorAll('.card-container').forEach(function (el) {
        flipDown(el);
    });
    // reset the variables
    resetGame();

    // reset UI
    resetUI();

    // play again
    game();
}

// function reset start game
function resetGame() {
    // reset the global variables
    cardsCollected = [];
    DeckOfCards = [];
    cardOneElement = null;
    cardTwoElement = null;
    startTime = null;
    currentTurn = 0;
    gameWon = false;
    seconds = 0;
    moves = 0;
}

// function that handles the card click event
function cardClickHandler(e) {
    const cardIsNotAlreadyChosen = e.target.parentNode != cardOneElement;
    if (!gameWon && e.target.classList.contains('card-face') && cardIsNotAlreadyChosen) {
        checkStats(e.target.parentNode);
        flipUp(e.target.parentNode);
    }
}

// functions to assigning values and check stats
function checkStats(el) {
    // assign pointers to elements based on the turn number
    switch (currentTurn) {
        case 0:
            cardOneElement = el;
            currentTurn += 1;
            break;
        case 1:
            cardTwoElement = el;
            break;
    }

    if (cardOneElement && cardTwoElement) {
        disableClick(deck);
        // disable the deck
        setTimeout(function(){
            // re-enable it in a while
            areTheyEqual()
        }, 1000);
    }

}

// function to check their euality and handels the result
function areTheyEqual() {

    // check class list -> to get the value of teh faced down card
    const cardOneValue = cardOneElement.innerHTML.trim();
    const cardTwoValue = cardTwoElement.innerHTML.trim();

    // check if both classes are equal and that the item isn't in the list to begin with
    if (!cardsCollected.includes(cardOneValue) && (cardOneValue === cardTwoValue)) { // if they are equal
        equal(cardOneValue, cardTwoValue);
    } else {
        notEqual();
    }
    // increase move count
    moves += 1;
    updateUI();

    // reset the round back to zero
    currentTurn = 0;

    // check if all cards flipped open
    if (cardsCollected.length === 16) {
        gameWon = true;
        setTimeout(winMessage, 300);
    }
}

// function to handel what happenes when cards match
function equal(itemOne, itemTwo) {
    // 1. add them to the array of flipped classes
    cardsCollected.push(itemOne, itemTwo);
    // 2. TO DO: add animation UI for correct result
    correct(cardOneElement);
    correct(cardTwoElement);
    // 3. disable the element from being clicked
    disableClick(cardOneElement);
    disableClick(cardTwoElement);
    // 4. reset element pointers
    setTimeout(resetElementPointer, 300);
}

// function to handel cards not matching
function notEqual() {
    // 1. TO DO: add animation UI for wrong match
    wrong(cardOneElement);
    wrong(cardTwoElement);
    // 2. flip the card back down
    setTimeout(function () {
        removeWrong(cardOneElement);
        flipDown(cardOneElement);
     }, 250);
    setTimeout(function () {
        removeWrong(cardTwoElement);
        flipDown(cardTwoElement);
    }, 250);
    // 3. reset element pointers
    setTimeout(resetElementPointer, 300);
}

// function display win message
function winMessage() {
    // updating the UI for the end screen to display the correct values
    moveHolder.textContent = moves;
    secondsContainer.textContent = seconds;

    // add the class that will view the wining screen
    winContainer.classList.add('win-screen');

    deck.removeEventListener('click', cardClickHandler);
}

function hideWin() {
    winContainer.classList.remove('win-screen');
}

function flipUp(element) {
    element.classList.add('flipped');
}

function flipDown(element) {
    element.classList.remove('flipped');
}

function correct(el) {
    el.classList.add('correct');
}

function removeCorrect(el) {
    el.classList.remove('correct');
}

function wrong(el) {
    el.classList.add('wrong');
}

function removeWrong(el) {
    el.classList.remove('wrong');
}

function disableClick(el) {
    el.classList.add('cant-click-this');
}

function enableClick(el) {
    el.classList.remove('cant-click-this');
}

function updateUI() {
    movesContainer.textContent = moves;
}

function resetUI() {
    timerContainer.classList.add('hidden');
    movesContainer.textContent = moves;
    timerContainer.textContent = "";
}

function resetElementPointer() {
    cardOneElement = null;
    cardTwoElement = null;

    enableClick(deck)
}