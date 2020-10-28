import { Point } from "./point.js";

export class Cloud {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }
    // animation 생성 시, 그리려는 애니메이션의 좌표값을 가져와야한다.
    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;
        // point의 간격, 스테이지 넓이를 총 포인트 -1 로 나눈 간격 
        this.pointGap = this.stageWidth / (this.totalPoints - 1);
        this.init();
    }
    init() {
        this.points = [];
        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            );
            this.points[i] = point;
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        // 처음과 마지막 포인트는 움직이지 않음 
        ctx.moveTo(prevX, prevY);
        // cloud 만들기 
        // i = 0은 시작 부분, 흔들리지 않도록 
        for (let i = 1; i < this.totalPoints; i++) {
            // 마지막 인덱스면 update()안함 
            if (i < this.totalPoints - 1) {
                this.points[i].update();
            }
            // 이전값과 현재값의 중간값을 곡선의 포인트로 잡아준다.
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            // 직선
            // ctx.lineTo(cx, cy);

            // 곡선 
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY);
        // ctx.lineTo(this.stageWidth, this.stageHeight);
        // ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}