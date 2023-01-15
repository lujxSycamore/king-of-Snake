import { GameObjects } from "./GameObjects";
import { Wall } from "./Wall";
export class GameMap extends GameObjects {
  constructor(ctx,parent) { //ctx 画布 parent画布的父元素
    super(); //父类的构造函数
    this.ctx = ctx;
    this.parent = parent;
    this.length = 0; //每一个格子的绝对距离

    this.col = 13;
    this.row = 13;

    this.wall = [];
  }

  create_walls() {
    //js没有二维数组 手动初始化二维数组用于存放墙
    const bool_wall = [];
    for(let r = 0; r < this.row; r++){
      bool_wall[r]= [];
      for (let c =0;c < this.col; c++){
        bool_wall[r][c] = false;
      }
    }
    /* 地图四周放上墙壁 */
    for(let r = 0;r< this.row;r++){
      bool_wall[r][0] = true;
      bool_wall[r][this.col -1] =true;
    }

    for(let c =0;c<this.col;c++){
      bool_wall[0][c] = true;
      bool_wall[this.row -1][c]=true;
    }
    //画墙
    for(let r = 0;r < this.row; r++){
      for(let c = 0; c < this.col; c++){
        if(bool_wall[r][c]){
          this.wall.push(new Wall(c, r, this));
        }
      }
    }
  }

  start() {
    this.create_walls();
  }

  update() {
    /* console.log("gamemap update"); */
    this.length = parseInt(Math.min(this.parent.clientWidth / this.col , this.parent.clientHeight / this.row ));
    //根据当前浏览器尺寸获得一个单元的长度
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