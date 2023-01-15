import { GameObjects } from "./GameObjects"

export class Wall extends GameObjects {
  constructor(r,c,gameMap) {
    super();

    this.r = r;
    this.c = c;
    this.gameMap = gameMap;
    this.color = "#E6A23C";
  }

  update() {
   this.render(); 
  }

  render(){
    const length = this.gameMap.length;
    const ctx = this.gameMap.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.c * length, this.r * length, length, length);
  }

}