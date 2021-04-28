class Consau{
    constructor(Game) {
        this.Game = Game;
        this.x =0;
        this.y = 0;
        this.grid = 20;
        this.dx = this.grid;
        this.dy = 0;
        this.cell = [];
        this.maxcell = 2;
        this.score = 0;
    }
    update(){
        if (this.endGame() == true){
          this.x+=this.dx;
          this.y+=this.dy;
        }
        this.cell.unshift({x: this.x, y: this.y});//unshirt: thêm phần tử vào đầu mảng
       if (this.cell.length > this.maxcell){
            this.cell.pop(); //pop() : xóa phần tử cuối cùng của mảng và trả về phần tử đó
       }
        this.catchHandle();

    }
    draw(){
        for (let i = 0; i< this.cell.length; i++){
          this.Game.context.fillStyle = 'white';
          this.Game.context.fillRect(this.cell[i].x, this.cell[i].y,this.grid,this.grid);
        }
        if (this.endGame() == false){
            this.Game.context.font = '40px Calibri';
            this.Game.context.fillText('Gêm âu vờ haha',100,200);
        }
    }
    catchHandle(){
        document.addEventListener('keydown', (e)=>{
            if (e.which == 37 && this.dx == 0){
                this.dx= -this.grid;
                this.dy = 0;
            }
            else if (e.which == 38 && this.dy == 0){
                this.dx = 0;
                this.dy = -this.grid;
            }
            else if (e.which == 39 && this.dx == 0){
                this.dx = +this.grid;
                this.dy = 0;
            }
            else if (e.which == 40 && this.dy == 0){
                this.dx = 0;
                this.dy = +this.grid;
            }
        });

    }
    eat(x, y){
        if (this.x == x && this.y == y){
            this.maxcell ++;
            this.score ++;
            return true;
        }
        return false;
    }
    endGame(){
        for (let i = 1; i < this.cell.length; i++){
            for (let j = 0; j<this.Game.list.length;j++){
            if (this.x === this.cell[i].x && this.y === this.cell[i].y || this.x >= this.Game.canvas.width
                || this.y >= this.Game.canvas.height || this.x<0 || this.y <0 || this.x === this.Game.list[j].x && this.y === this.Game.list[j].y){
                return false;
            }
        }

        }
        return true;
    }
}