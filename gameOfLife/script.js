function generator(matLen, gr, grEat, pred, seeds, crPred, boss, Energy, bomb) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < seeds; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }

    }
    for (let i = 0; i < crPred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    for (let i = 0; i < boss; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    }
    for (let i = 0; i < Energy; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }
    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 8;
        }
    }
    return matrix;
}
let side = 20;

let matrix = generator(50, 50, 50, 50, 10, 20, 5, 22);

let weather = false
function weatherFunc(){
    weather = !weather
}

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let seedsArr = []
let PrCreatorArr = []
let bossArr = []
let energyArr = []
let BombArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side)
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            } else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                predatorArr.push(pr)
            }
            else if (matrix[y][x] == 4) {
                let seed = new Seeds(x, y)
                seedsArr.push(seed)
            }
            else if (matrix[y][x] == 5) {
                let prcr = new PrCreator(x, y)
                PrCreatorArr.push(prcr)
            }
            else if (matrix[y][x] == 6) {
                let boss = new Boss(x, y)
                bossArr.push(boss)
            }
            else if (matrix[y][x] == 7) {
                let energy = new Energy(x, y)
                energyArr.push(energy)
            }
        }
    }

}

// else{
//     ChangeWeather.addEventListener("click", weatherFunc);
// }
function draw() {
    if (weather == false){
        Summer()
    }
    else{
        Winter()
    }
    function Summer() {
        
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill('green')
                }
                else if (matrix[y][x] == 0) {
                    fill('#acacac')
                }
                else if (matrix[y][x] == 2) {
                    fill('yellow')
                }
                else if (matrix[y][x] == 3) {
                    fill('red')
                }
                else if (matrix[y][x] == 4) {
                    fill('#9403fc')
                }
                else if (matrix[y][x] == 5) {
                    fill('#6e2c2c')
                }
                else if (matrix[y][x] == 6) {
                    fill('#1100ff')
                }
                else if (matrix[y][x] == 7) {
                    fill('#04ff00')
                }

                rect(x * side, y * side, side, side)
            }
        }
    }

    function Winter() {
        
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill('white')
                }
                else if (matrix[y][x] == 0) {
                    fill('#acacac')
                }
                else if (matrix[y][x] == 2) {
                    fill('#faff70')
                }
                else if (matrix[y][x] == 3) {
                    fill('#f76f6f')
                }
                else if (matrix[y][x] == 4) {
                    fill('#b854ff')
                }
                else if (matrix[y][x] == 5) {
                    fill('#8f5151')
                }
                else if (matrix[y][x] == 6) {
                    fill('#6b61ed')
                }
                else if (matrix[y][x] == 7) {
                    fill('#6cfc6a')
                }

                rect(x * side, y * side, side, side)
            }
        }
    }

    

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in seedsArr) {
        seedsArr[i].move()
        if (grassArr.length < 100) {
            seedsArr[i].mul()
        }
    }
    for (let i in PrCreatorArr) {
        PrCreatorArr[i].move()
        if (predatorArr.length < 5) {
            PrCreatorArr[i].mul()
        }
    }
    for (let i in bossArr) {
        bossArr[i].move()
        bossArr[i].eat()
    }
    for (let i in energyArr) {
        energyArr[i].move()
    }
var ChangeWeather = document.getElementById("Weather");

ChangeWeather.addEventListener("click", weatherFunc);

}






