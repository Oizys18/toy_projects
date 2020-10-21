import { Wave } from './wave.js';


class App {
    constructor() {
        // canvas 생성
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.wave = new Wave();

        // resize event
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // animation 시작 
        requestAnimationFrame(this.animate.bind(this))

    }
    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        // canvas double size, retina 선명도 
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.wave.resize(this.stageWidth, this.stageHeight)
    }
    animate(t) {
        // canvas clear 
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.wave.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this))

    }
}

window.onload = () => {
    new App();
}