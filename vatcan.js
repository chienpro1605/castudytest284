class Vatcan {
    constructor(Game) {
        this.Game = Game;
        this.x = 0;
        this.y = 0;
        this.grid = 20;
        this.image = new Image();
        this.image.src = "phan" + ".png";

    }

    update() {
        this.x = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;
        this.y = (Math.floor(Math.random() * (19 - 0)) + 0) * this.grid;

    }

    draw() {
        this.Game.context.fillStyle = 'black';
        this.Game.context.drawImage(this.image,this.x, this.y, this.grid, this.grid);

    }
}