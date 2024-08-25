var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Snake = /** @class */ (function () {
    function Snake() {
        this.body = [{ x: 10, y: 10 }];
        this.direction = { x: 0, y: 0 };
        this.size = 20;
        this.growPending = false;
    }
    Snake.prototype.move = function () {
        var head = __assign({}, this.body[0]);
        head.x += this.direction.x;
        head.y += this.direction.y;
        this.body.unshift(head);
        if (!this.growPending) {
            this.body.pop();
        }
        else {
            this.growPending = false;
        }
    };
    Snake.prototype.grow = function () {
        this.growPending = true;
    };
    Snake.prototype.setDirection = function (x, y) {
        this.direction.x = x;
        this.direction.y = y;
    };
    Snake.prototype.checkCollision = function (food) {
        var head = this.body[0];
        console.log("Checking collision: Snake head at (" + head.x + ", " + head.y + "), Food at (" + food.position.x + ", " + food.position.y + ")");
        return head.x === food.position.x && head.y === food.position.y;
    };
    Snake.prototype.checkSelfCollision = function () {
        var head = this.body[0];
        return this.body
            .slice(1)
            .some(function (segment) { return segment.x === head.x && segment.y === head.y; });
    };
    Snake.prototype.checkWallCollision = function (width, height) {
        var head = this.body[0];
        return head.x < 0 || head.x >= width || head.y < 0 || head.y >= height;
    };
    return Snake;
}());
var Food = /** @class */ (function () {
    function Food(containerSize) {
        this.position = { x: 5, y: 5 };
        this.size = 20;
        this.containerSize = containerSize;
    }
    Food.prototype.generateNewPosition = function () {
        this.position.x = Math.floor(Math.random() * (this.containerSize.width / this.size));
        this.position.y = Math.floor(Math.random() * (this.containerSize.height / this.size));
        console.log("New food position: (" + this.position.x + ", " + this.position.y + ")");
    };
    return Food;
}());
var GameModel = /** @class */ (function () {
    function GameModel(containerSize) {
        this.snake = new Snake();
        this.food = new Food(containerSize);
        this.score = 0;
        this.highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;
        this.containerSize = containerSize;
        this.eatSound = new Audio('sounds/music_food.mp3');
        this.gameOverSound = new Audio('sounds/gameover.mp3');
    }
    GameModel.prototype.updateGame = function () {
        this.snake.move();
        if (this.snake.checkCollision(this.food)) {
            this.snake.grow();
            this.score++;
            this.food.generateNewPosition();
            this.eatSound.play();
        }
        var wallCollision = this.snake.checkWallCollision(this.containerSize.width / this.snake.size, this.containerSize.height / this.snake.size);
        var selfCollision = this.snake.checkSelfCollision();
        return { gameOver: wallCollision || selfCollision };
    };
    GameModel.prototype.updateHighScore = function () {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('highScore', this.highScore.toString());
        }
    };
    return GameModel;
}());
var GameView = /** @class */ (function () {
    function GameView(gameContainer, scoreElement, highScoreElement) {
        this.gameContainer = gameContainer;
        this.scoreElement = scoreElement;
        this.highScoreElement = highScoreElement;
        this.startAgainButton = document.getElementById("start-again");
    }
    GameView.prototype.renderSnake = function (snake) {
        var _this = this;
        this.gameContainer.innerHTML = "";
        snake.body.forEach(function (segment) {
            var segmentElement = document.createElement("div");
            segmentElement.style.left = segment.x * snake.size + "px";
            segmentElement.style.top = segment.y * snake.size + "px";
            segmentElement.style.width = snake.size + "px";
            segmentElement.style.height = snake.size + "px";
            segmentElement.classList.add("snake-segment");
            _this.gameContainer.appendChild(segmentElement);
        });
    };
    GameView.prototype.renderFood = function (food) {
        var foodElement = document.querySelector(".food");
        if (!foodElement) {
            foodElement = document.createElement("div");
            foodElement.classList.add("food");
            this.gameContainer.appendChild(foodElement);
        }
        foodElement.style.left = food.position.x * food.size + "px";
        foodElement.style.top = food.position.y * food.size + "px";
    };
    GameView.prototype.updateScore = function (score) {
        this.scoreElement.textContent = "Score: " + score;
    };
    GameView.prototype.updateHighScore = function (highScore) {
        this.highScoreElement.textContent = "High Score: " + highScore;
    };
    GameView.prototype.showGameOver = function () {
        alert("Game Over. Press the button to play again!");
        this.startAgainButton.style.display = "block";
    };
    GameView.prototype.hideGameOver = function () {
        this.startAgainButton.style.display = "none";
    };
    return GameView;
}());
var GameController = /** @class */ (function () {
    function GameController(model, view) {
        var _this = this;
        this.gameLoop = null;
        this.model = model;
        this.view = view;
        var startAgainButton = document.getElementById("start-again");
        startAgainButton.addEventListener("click", function () {
            _this.startAgain();
        });
    }
    GameController.prototype.startGame = function () {
        var _this = this;
        this.view.hideGameOver();
        this.view.updateHighScore(this.model.highScore);
        var gameLoop = setInterval(function () {
            var gameState = _this.model.updateGame();
            _this.view.renderSnake(_this.model.snake);
            _this.view.renderFood(_this.model.food);
            _this.view.updateScore(_this.model.score);
            if (gameState.gameOver) {
                clearInterval(gameLoop);
                _this.model.updateHighScore();
                _this.view.updateHighScore(_this.model.highScore);
                _this.view.showGameOver();
                _this.model.gameOverSound.play();
            }
        }, 100);
        document.addEventListener("keydown", this.handleMovement.bind(this));
    };
    GameController.prototype.handleMovement = function (event) {
        switch (event.key) {
            case "ArrowUp":
                if (this.model.snake.direction.y !== 1)
                    this.model.snake.setDirection(0, -1);
                break;
            case "ArrowDown":
                if (this.model.snake.direction.y !== -1)
                    this.model.snake.setDirection(0, 1);
                break;
            case "ArrowLeft":
                if (this.model.snake.direction.x !== 1)
                    this.model.snake.setDirection(-1, 0);
                break;
            case "ArrowRight":
                if (this.model.snake.direction.x !== -1)
                    this.model.snake.setDirection(1, 0);
                break;
        }
    };
    GameController.prototype.startAgain = function () {
        this.model = new GameModel(this.model.containerSize);
        this.startGame();
    };
    return GameController;
}());
var gameContainer = document.getElementById("game-container");
var scoreElement = document.getElementById("score");
var containerSize = { width: 500, height: 500 };
var highScoreElement = document.getElementById("high-score");
var model = new GameModel(containerSize);
var view = new GameView(gameContainer, scoreElement, highScoreElement);
var controller = new GameController(model, view);
controller.startGame();
