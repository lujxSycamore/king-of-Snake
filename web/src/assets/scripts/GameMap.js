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

    this.inner_walls_count = 20;
    this.wall = [];
  }

  check_continue(g,sx,sy,tx,ty){
    //检查地图连通性
    if (sx == tx && sy == ty) return true;
    g[sx][sy] = true;
    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];
    for (let i = 0; i < 4; i ++ ) {
      let x = sx + dx[i], y = sy + dy[i];
      if(!g[x][y]&&this.check_continue(g,x,y,tx,ty))
        return true
    }
    return false;
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
    //创建随机障碍物
    for(let i=0; i<this.inner_walls_count; i++){
      for(let j=0; j<1000;j++){
        let r=parseInt(Math.random()*this.row);
        let c=parseInt(Math.random()*this.row);
        if(bool_wall[r][c] || bool_wall[c][r] )
          continue;
        if(r==this.row-2 && c == 1 || c==this.col -2 && r == 1)
          continue;
        
        bool_wall[r][c] = bool_wall[c][r] =true;
        break;
      }
    }
    //检查连通性
    const copy_bool_wall =JSON.parse(JSON.stringify(bool_wall));

    if(!this.check_continue(copy_bool_wall, this.row-2, 1, 1, this.col-2))
      return false;

    //画墙
    for(let r = 0;r < this.row; r++){
      for(let c = 0; c < this.col; c++){
        if(bool_wall[r][c]){
          this.wall.push(new Wall(c, r, this));
        }
      }
    }
    return true;
  }

  start() {
    for(let i=0; i<1000; i++){
      if(this.create_walls())
        break;
    }
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