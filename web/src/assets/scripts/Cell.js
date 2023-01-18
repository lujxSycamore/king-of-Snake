//组成蛇身体的圆圈
export class Cell {
  constructor(r,c){
    this.r = r;
    this.c = c;
    //canvas的row col 与颜色的坐标系需要转化
    this.x = c + 0.5;
    this.y = r + 0.5;
  }
}