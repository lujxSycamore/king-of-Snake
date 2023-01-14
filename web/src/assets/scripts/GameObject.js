const GAME_OBJECTS = []; //将所有的游戏对象存储在数组里

export class GameObjects {
  constructor(){
    GAME_OBJECTS.push(this);
    this.timedelta = 0; //刷新的时间间隔
    this.have_started = false; //是否已经执行过
  }
  start() { //只执行第一帧一次

  }
  update() { //除了第一次之外每一帧都执行

  }
  on_destory() { //在destroy之前执行

  }
  destory() { //删除一个GameObject
    this.on_destory();
    for(let i in GAME_OBJECTS ) {   //js中 of 遍历数组的值 in遍历数组下标
      if(this == GAME_OBJECTS[i]) {
        GAME_OBJECTS.splice(i,1);//从数组第i个项开始，删除1个元素
        break;
      }
    }
  }
}

let last_timestamp; //上一次的执行的时刻
function step(timestamp) {
  for(let obj of GAME_OBJECTS) {
    if(!obj.have_started) {
      obj.have_started = true;
      obj.start();
    } else {
      obj.timedelta = timestamp -last_timestamp;
      obj.update()
    }
  }
  last_timestamp = timestamp;
  requestAnimationFrame(step);//实现在每一帧结束之后都会调用一次step函数（回调）
}

requestAnimationFrame(step);
/* requestAnimationFrame：浏览器每一帧结束之后都会执行requestAnimationFrame，并启动指定的回调函数
告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行 */