import { GameObjects } from "./GameObject";
export class GameMap extends GameObjects {
  constructor(ctx,parent) { //ctx 画布 parent画布的父元素
    super(); //父类的构造函数
    this.ctx = ctx;
    this.parent = parent;
    this.length = 0; //每一个格子的绝对距离

    this.col = 13;
    this.row = 13;
  }

  start() {

  }

  update() {
    /* console.log("gamemap update"); */
    this.length = parseInt(Math.min(this.parent.clientWidth / this.col , this.parent.clientHeight / this.row ));
    this.ctx.canvas.width = this.length * this.col;
    this.ctx.canvas.height = this.length * this.row;
    this.render();
  }

  render() { //渲染
    const color_even = "#67C23A";
    const color_odd = "green";
    for(let r = 0; r < this.row; r++){
      for(let c = 0; c< this.col; c++){
        if((r + c) % 2 == 0){
          this.ctx.fillStyle = color_even;
        } else {
          this.ctx.fillStyle = color_odd;
        }
        this.ctx.fillRect(c * this.length, r * this.length, this.length, this.length);
      }
    }
  }
}