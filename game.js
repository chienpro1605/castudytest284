class Game {
    constructor() {
        this.canvas = null;
        this.context = null;
        this.init();
        this.Consau = new Consau(this);
        this.Qua = new Qua(this);
        this.Vatcan = new Vatcan(this);
        this.list = [];
        this.loop();

    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);


    }

    loop() {
        this.update();
        this.draw();

        document.getElementById('diem').innerHTML = 'Score:' + this.Consau.score;
        setTimeout(() => this.loop(), 100);

    }

    update() {
        this.Consau.update();
        if (this.Consau.eat(this.Qua.x, this.Qua.y)) {
            this.Qua.update();
            this.Vatcan.update();
            let a = new Vatcan(this);
            a.update();
            this.list.push(a);
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.Consau.draw();
        this.Qua.draw();
        //this.Vatcan.draw()
        for (let i = 0; i < this.list.length; i++) {
           this.list[i].draw();
        }
    }
}

let g = new Game();
// setInterval(main,100)
// console.log(g.list.length);
