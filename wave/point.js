export class Point {
    // 간격을 가진 좌표를 생성, 좌표의 Y값을 이동시키고 
    // 각 좌표를 선으로 연결하는 것 
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = 0;
        this.max = Math.random() * 100 + 150;

    }
    update() {
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);

    }
}