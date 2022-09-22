// world format

// 2 - brick
// 1 - coin
// 0 - empty
// 3 cherry

// Sound effects
// import soundBeginning from '/pacman_beginning.wav';



let pacmanEats =  new Audio('sounds/pacman_chomp.wav');
let gameDefeat = new Audio('sounds/pacman_death.wav');
let cherryEats = new Audio('sounds/pacman_eatfruit.wav')

window.onload = () => {
    let introSound =  new Audio('sounds/pacman_beginning.wav');
    introSound.play();
}

//              Worlds;
let worldNo1 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,1,1,1,1,1,0,1,1,1,1,1,1,2],
    [2,2,2,2,1,2,1,2,1,2,1,2,2,2,2],
    [2,1,1,1,1,2,1,0,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,1,2,2,2,2,1,2],
    [2,0,0,0,0,0,0,2,0,0,0,0,0,0,2],
    [2,1,2,2,2,2,1,2,1,2,2,2,2,1,2],
    [2,1,1,1,1,2,1,3,1,2,1,1,1,1,2],
    [2,2,2,2,1,2,1,2,1,2,1,2,2,2,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,0,2,1,2,1,2,0,2,1,2,1,2,0,2],
    [2,0,2,2,2,1,2,0,2,1,2,2,2,0,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
let worldNo2 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,1,0,1,1,1,1,1,1,2],
    [2,2,0,2,1,2,1,2,1,2,1,2,0,2,2],
    [2,1,1,1,1,2,1,0,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,1,2,2,2,2,1,2],
    [2,0,0,0,0,0,0,2,0,0,0,0,0,0,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,2,1,3,1,2,1,1,1,1,2],
    [2,2,0,2,1,2,1,2,1,2,1,2,0,2,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,0,2,2,2,1,2,2,2,1,2,2,2,0,2],
    [2,0,2,2,2,1,2,2,2,1,2,2,2,0,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
let worldNo3 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,2,1,1,1,2,1,2,1,1,1,2,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,2,0,2,1,1,1,1,1,2],
    [2,2,0,2,2,2,2,0,2,2,2,2,0,2,2],
    [2,1,1,1,1,2,1,0,1,2,1,1,1,1,2],
    [2,1,2,2,2,2,1,2,1,2,2,2,2,1,2],
    [2,0,0,0,0,0,0,2,0,0,0,0,0,0,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,2,1,3,1,2,1,1,1,1,2],
    [2,2,0,2,2,2,1,2,1,2,2,2,0,2,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,0,2,1,1,1,1,0,1,1,1,1,2,0,2],
    [2,0,2,1,1,1,2,2,2,1,1,1,2,0,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
let worldNo4 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,2,1,2,1,1,1,1,1,2],
    [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2],
    [2,1,1,1,1,1,2,0,2,1,1,1,1,1,2],
    [2,1,2,2,2,1,1,0,1,1,2,2,2,1,2],
    [2,1,1,1,1,1,2,2,2,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,2,2,1,2,2,2,1,2],
    [2,0,0,0,0,1,2,2,2,1,0,0,0,0,2],
    [2,1,2,2,2,1,1,1,1,1,2,2,2,1,2],
    [2,1,1,1,2,2,1,3,1,2,2,1,1,1,2],
    [2,2,0,2,2,0,1,2,1,0,2,2,0,2,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,0,2,2,2,2,2,0,2,2,2,2,2,0,2],
    [2,0,2,1,1,1,2,2,2,1,1,1,2,0,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];
let worldNo5 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,1,1,2,1,2,1,1,1,1,1,2],
    [2,1,1,1,2,1,0,1,0,1,2,1,1,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2],
    [2,1,2,1,1,1,2,0,2,1,1,1,2,1,2],
    [2,1,2,2,2,2,2,0,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,2,1,2,1,1,1,1,1,2],
    [2,1,2,2,2,1,2,1,2,1,2,2,2,1,2],
    [2,0,0,0,2,1,2,1,2,1,2,0,0,0,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,3,1,1,1,1,1,1,2],
    [2,1,0,2,2,2,2,2,2,2,2,2,0,1,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,0,2,2,2,2,2,2,2,2,2,2,2,0,2],
    [2,0,0,1,1,1,0,1,0,1,1,1,0,0,2],
    [2,0,1,1,1,1,1,0,1,1,1,1,1,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
];

let world = 0;
let randomWord = Math.round(Math.random() * 4);
    if (randomWord === 0) {
        console.log('world number', randomWord + 1)
        world = worldNo1;
    } else if (randomWord === 1) {
        console.log('world number', randomWord + 1)
        world = worldNo2;
    } else if (randomWord === 2) {
        console.log('world number', randomWord + 1)
        world = worldNo3;
    } else if (randomWord === 3) {
        console.log('world number', randomWord + 1)
        world = worldNo4;
    } else {
        world = worldNo5;
        console.log('world number', randomWord + 1)
    };


function displayWorld() {
    let worldFormat = "";
    for (let i = 0; i < world.length; i++) {
        worldFormat += `\n<div class="row">\n`;
        for (let c = 0; c < world.length; c++) {
            
            if (world[i][c] === 2) {
                worldFormat += `<div class="brick"></div>`;
            } else if (world[i][c] === 1) {
                worldFormat += `<div class="coin"></div>`;
            }
            else if (world[i][c] === 0) {
                worldFormat += `<div class="empty"></div>`;
            } else if (world[i][c] === 3) {
                worldFormat += `<div id="cherry"></div>`;
            }
        }
        worldFormat += `</div>`;
    }
    // inserting it into the html
    document.getElementById('world').innerHTML = worldFormat;
}
displayWorld();

let maxPoints = 0;
for (let i = 0; i < world.length; i++) {
    for (let c = 0; c < world.length; c++) {
        if (world[i][c] === 1) {
            maxPoints++;
        }
    }
}
console.log(world[3][5])
console.log(maxPoints);
// ------------------------------------------------------------

// Character movement
let leftValue = 30;
let topValue = 30;
pacman = {
    x: 1,
    y: 1
}

// functions para ma move si character kada press ng arrow key
function moveToLeft() {
    // facing direction of pacman

    document.getElementById('character').style.transform = 'rotate(180deg)';
    leftValue -= 30;
    document.getElementById('character').style.left = leftValue + 'px';

    pacman.y--;
   
}
function moveToRight() {
    // facing direction of pacman
    document.getElementById('character').style.transform = 'rotate(0deg)';

    leftValue += 30;
    document.getElementById('character').style.left = leftValue + 'px';

    pacman.y++;
}
function moveToTop() {
    // facing direction of pacman
    document.getElementById('character').style.transform = 'rotate(-90deg)';

    topValue -= 30;
    document.getElementById('character').style.top = topValue + 'px';

    pacman.x--;
}
function moveToDown() {
    // facing direction of pacman
    document.getElementById('character').style.transform = 'rotate(90deg)';

    topValue += 30;
    document.getElementById('character').style.top = topValue + 'px';

    pacman.x++;
}
// console.log(pacLoc);
// for moving the character

let xVal = 1
let yVal = 1;
// let winningScore = 0;
// ------------------------------------------
document.onkeydown = function(e) {
    if (e.keyCode === 37) { 
        if (world[xVal][yVal - 1] != 2) {
            yVal--;
            moveToLeft();
        }  else {
            console.log('a brick');
        }
    } else if (e.keyCode === 38) {
        if (world[xVal - 1][yVal] != 2) {
            xVal--;
            moveToTop();
        }  else {
            console.log('a brick');
        }
    } else if (e.keyCode === 39) { 
        if (world[xVal][yVal + 1] != 2) {
            yVal++;
            moveToRight();
        }
    } else if (e.keyCode === 40) {
        if (world[xVal + 1][yVal] != 2) {
            xVal++;
            moveToDown();
        }  else {
            console.log('a brick');
        }
    }

    if (world[pacman.x][pacman.y] === 1) {
        // pacman eats
        world[pacman.x][pacman.y] = 0;
        pacmanEats.play();
        
        addScore();
        maxPoints--;
        if (maxPoints === 0) {
            pacman.x = 1;
            pacman.y = 1;
            window.alert('You win!');
            window.location.reload();
        }
        console.log('points remaining', maxPoints);
    }
    if (world[pacman.x][pacman.y] === 3) {
        world[pacman.x][pacman.y] = 0;
        cherryEats.play()
        cherryScore();

    }
    displayWorld();
}
// ------------------------------------------------------------
// for scoring sytem
let score = 0;

function addScore() {
    score += 10;
    document.getElementById('score').innerText = score;
    
}
function cherryScore() {
    score += 20;
    document.getElementById('score').innerText = score;

    spawnCherry();
}

// random cherry spawnning

// let row = 17;
// // let col = 15;

function spawnCherry() {
    let row = 0;
    let col = 0;

    while(true) {
        let row = Math.round(Math.random() * 16);
        let col = Math.round(Math.random() * 16);

        if (world[row][col] === 0 || world[row][col] === 1) {
            console.log('grabbed', row, col);
            if (world[row][col] === 1) {
                maxPoints--;
            }
            world[row][col] = 3;
            displayWorld();
            break;
        }
    }
}

// --------------------------------------------------------
// Ghosts movements

                            // fist ghost
let ghost1Loc = {
    x: 15,
    y: 13
}
function ghost1Movement() {
    // chase pacman
    if (ghost1Loc.y - 3 === pacman.y || ghost1Loc.y - 2 === pacman.y || ghost1Loc.y - 1 === pacman.y)  {
        if (ghost1Loc.x === pacman.x) {
            console.log('chase him to the left!');
            console.log('!');
            
            if (world[ghost1Loc.x][ghost1Loc.y - 1] != 2) {
            document.getElementById('ghost1').style.transform = ' scaleX(1)';
            ghost1Loc.y--;
            document.getElementById('ghost1').style.left = ghost1Loc.y * 30 + 'px';
            }
        }
    } else if  (ghost1Loc.y + 3 === pacman.y || ghost1Loc.y + 2 === pacman.y || ghost1Loc.y + 1 === pacman.y) {
            if (ghost1Loc.x === pacman.x) {
                console.log('chase him to the right!');
                console.log('!');
            
                if (world[ghost1Loc.x][ghost1Loc.y + 1] != 2) {
                document.getElementById('ghost1').style.transform = ' scaleX(-1)';
                ghost1Loc.y++;
                document.getElementById('ghost1').style.left = ghost1Loc.y * 30 + 'px';
                }
            }
    } else if  (ghost1Loc.x + 3 === pacman.x || ghost1Loc.x + 2 === pacman.x || ghost1Loc.x + 1 === pacman.x) {
            if (ghost1Loc.y === pacman.y) {
                console.log('chase him to the bottom!');
                console.log('!');

                if (world[ghost1Loc.x + 1][ghost1Loc.y] != 2) {
                    ghost1Loc.x++;
                    document.getElementById('ghost1').style.top = ghost1Loc.x * 30 + 'px';
                }
            }
    } else if (ghost1Loc.x - 3 === pacman.x || ghost1Loc.x - 2 === pacman.x || ghost1Loc.x - 1 === pacman.x) {
            if (ghost1Loc.y === pacman.y) {
                console.log('chase him to the top!');
                console.log('!');

                if (world[ghost1Loc.x - 1][ghost1Loc.y] != 2) {
                    ghost1Loc.x--;
                    document.getElementById('ghost1').style.top = ghost1Loc.x * 30 + 'px';
                }
            }
    }
    
    else {
        let random = Math.round(Math.random() * 3);
        if (random === 0 && world[ghost1Loc.x][ghost1Loc.y - 1] != 2) {
            document.getElementById('ghost1').style.transform = 'scaleX(1)';
            ghost1Loc.y--;
            document.getElementById('ghost1').style.left = ghost1Loc.y * 30 + 'px';

        } else if (random === 1  && world[ghost1Loc.x][ghost1Loc.y + 1] != 2) {
            document.getElementById('ghost1').style.transform = 'scaleX(-1)';
            ghost1Loc.y++;
            document.getElementById('ghost1').style.left = ghost1Loc.y * 30 + 'px';

        } else if (random === 2 && world[ghost1Loc.x - 1][ghost1Loc.y] != 2) {

            ghost1Loc.x--;
            document.getElementById('ghost1').style.top = ghost1Loc.x * 30 + 'px';

        } else if (random === 3 && world[ghost1Loc.x + 1][ghost1Loc.y] != 2) {

            ghost1Loc.x++;
            document.getElementById('ghost1').style.top = ghost1Loc.x * 30 + 'px';
        }
    }
    gameOver(ghost1Loc.x, ghost1Loc.y, pacman.x, pacman.y);
    
}
ghost1Movement();
setInterval(ghost1Movement, 1000/3);

                                // second ghost
let ghost2Loc = {
    x: 15,
    y: 1
}
function ghost2Movement() {
    // chase pacman
    if (ghost2Loc.y - 3 === pacman.y || ghost2Loc.y - 2 === pacman.y || ghost2Loc.y - 1 === pacman.y)  {
        if (ghost2Loc.x === pacman.x) {
            console.log('chase him to the left!');
            console.log('!');
            
            if (world[ghost2Loc.x][ghost2Loc.y - 1] != 2) {
            document.getElementById('ghost2').style.transform = ' scaleX(1)';
            ghost2Loc.y--;
            document.getElementById('ghost2').style.left = ghost2Loc.y * 30 + 'px';
            }
        }
    } else if  (ghost2Loc.y + 3 === pacman.y || ghost2Loc.y + 2 === pacman.y || ghost2Loc.y + 1 === pacman.y) {
            if (ghost2Loc.x === pacman.x) {
                console.log('chase him to the right!');
                console.log('!');
            
                if (world[ghost2Loc.x][ghost2Loc.y + 1] != 2) {
                document.getElementById('ghost2').style.transform = ' scaleX(-1)';
                ghost2Loc.y++;
                document.getElementById('ghost2').style.left = ghost2Loc.y * 30 + 'px';
                }
            }
    } else if  (ghost2Loc.x + 3 === pacman.x || ghost2Loc.x + 2 === pacman.x || ghost2Loc.x + 1 === pacman.x) {
            if (ghost2Loc.y === pacman.y) {
                console.log('chase him to the bottom!');
                console.log('!');

                if (world[ghost2Loc.x + 1][ghost2Loc.y] != 2) {
                    ghost2Loc.x++;
                    document.getElementById('ghost2').style.top = ghost2Loc.x * 30 + 'px';
                }
            }
    } else if (ghost2Loc.x - 3 === pacman.x || ghost2Loc.x - 2 === pacman.x || ghost2Loc.x - 1 === pacman.x) {
            if (ghost2Loc.y === pacman.y) {
                console.log('chase him to the top!');
                console.log('!');

                if (world[ghost2Loc.x - 1][ghost2Loc.y] != 2) {
                    ghost2Loc.x--;
                    document.getElementById('ghost2').style.top = ghost2Loc.x * 30 + 'px';
                }
            }
    }
    
    else {
        let random = Math.round(Math.random() * 3);
        if (random === 0 && world[ghost2Loc.x][ghost2Loc.y - 1] != 2) {
            document.getElementById('ghost2').style.transform = 'scaleX(1)';
            ghost2Loc.y--;
            document.getElementById('ghost2').style.left = ghost2Loc.y * 30 + 'px';

        } else if (random === 1  && world[ghost2Loc.x][ghost2Loc.y + 1] != 2) {
            document.getElementById('ghost2').style.transform = 'scaleX(-1)';
            ghost2Loc.y++;
            document.getElementById('ghost2').style.left = ghost2Loc.y * 30 + 'px';

        } else if (random === 2 && world[ghost2Loc.x - 1][ghost2Loc.y] != 2) {

            ghost2Loc.x--;
            document.getElementById('ghost2').style.top = ghost2Loc.x * 30 + 'px';

        } else if (random === 3 && world[ghost2Loc.x + 1][ghost2Loc.y] != 2) {

            ghost2Loc.x++;
            document.getElementById('ghost2').style.top = ghost2Loc.x * 30 + 'px';
        }
    }
    gameOver(ghost2Loc.x, ghost2Loc.y, pacman.x, pacman.y);
    
}
ghost2Movement();
setInterval(ghost2Movement, 1000/3);

// Game over
function gameOver(x,y,z,a) {
    if (x === z && y === a) {
        gameDefeat.play();
        window.alert('Game Over!');
        pacman.x = 1;
        pacman.y = 1;
        window.location.reload();
    }
}