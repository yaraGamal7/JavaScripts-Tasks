class EggGame {
    constructor() {
        this.top1 = 1;
        this.eggObject = document.getElementById('egg');
        this.basketObject = document.getElementById('basket');
        this.moveBy = 12;
        this.eggInterval = null;

        this.basketObject.style.top = window.innerHeight - 100 + 'px';
        this.basketObject.style.left = (window.innerWidth - this.basketObject.width) / 2 + 'px';
        this.eggObject.style.left = Math.ceil(Math.random() * window.innerWidth) + 'px';

        this.startGame();
        this.setupEvent();
    }

    startGame() {
        this.eggInterval = setInterval(() => this.moveEgg(), 16);
    }

    moveEgg() {
        this.eggObject.src = "images/rgg.png";
        this.top1 += 4;

        if (this.top1 >= window.innerHeight - this.eggObject.height) {
            clearInterval(this.eggInterval);
            this.eggObject.src = "images/Uovo_sorridente.png";

            this.eggObject.hidden =
                this.top1 >= window.innerHeight - 110 &&
                this.eggObject.offsetLeft > this.basketObject.offsetLeft - this.basketObject.width &&
                this.eggObject.offsetLeft < this.basketObject.offsetLeft + this.basketObject.width;

            if (this.eggObject.hidden) {
                this.creatNew();
            }
        }

        this.eggObject.style.top = this.top1 + 'px';
    }

    creatNew() {
        this.top1 = 1;
        this.eggObject.style.left = Math.ceil(Math.random() * window.innerWidth) + 'px';
        this.eggObject.src = 'images/rgg.png';
        this.eggObject.hidden = false;
        this.startGame();
    }

    setupEvent() {
        window.addEventListener('keydown', (e) => this.handleKeyPress(e));
        window.addEventListener('keyup', () => this.handleKeyRelease());
    }

    handleKeyPress(e) {
        switch (e.key) {
            case 'ArrowLeft':
                this.moveBasket('left');
                break;
            case 'ArrowRight':
                this.moveBasket('right');
                break;
        }
    }

    moveBasket(direction) {
        const currentLeft = parseInt(this.basketObject.style.left) || 0;

        if (direction === 'left') {
            this.basketObject.style.left = Math.max(0, currentLeft - this.moveBy) + 'px';
        } else if (direction === 'right') {
            const maxWidth = window.innerWidth - this.basketObject.width;
            this.basketObject.style.left = Math.min(maxWidth, currentLeft + this.moveBy) + 'px';
        }
    }
}

const game = new EggGame();
