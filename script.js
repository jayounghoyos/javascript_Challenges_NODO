const snake = document.getElementById("snake");
const food = document.getElementById("food");

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let direction = "right";
let snakeBody = [];

function getRandomPosition() {
    return Math.floor(Math.random() * 15) * 20;
}

function updateFoodPosition() {
    foodX = getRandomPosition();
    foodY = getRandomPosition();
    food.style.left = foodX + "px";
    food.style.top = foodY + "px";
}

function updateSnake() {
    snakeBody.push({ x: snakeX, y: snakeY });

    while (snakeBody.length > 1) {
        const tail = snakeBody.shift();
        snake.style.left = tail.x + "px";
        snake.style.top = tail.y + "px";
    }
}

function checkCollision() {
    if (
        snakeX < 0 ||
        snakeX >= 300 ||
        snakeY < 0 ||
        snakeY >= 300 ||
        snakeBody.some((segment) => segment.x === snakeX && segment.y === snakeY)
    ) {
        clearInterval(gameLoop);
        alert("Game Over!");
        location.reload();
    }
}

function updateGame() {
    switch (direction) {
        case "up":
            snakeY -= 20;
            break;
        case "down":
            snakeY += 20;
            break;
        case "left":
            snakeX -= 20;
            break;
        case "right":
            snakeX += 20;
            break;
    }

    snake.style.left = snakeX + "px";
    snake.style.top = snakeY + "px";

    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        updateSnake();
    } else {
        checkCollision();
        updateSnake();
    }
}

updateFoodPosition();
updateSnake();

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowRight":
            if (direction !== "left") direction = "right";
            break;
    }
});

const gameLoop = setInterval(updateGame, 300);