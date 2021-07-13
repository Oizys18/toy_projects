class Burger {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        const burgerLayer = document.getElementById('burger-layer')
        burgerLayer.appendChild(this.canvas);

        this.burgerGroup = new BurgerGroup();
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        requestAnimationFrame(this.animate.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight
        // canvas double size, retina 선명도 
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }
    animate(t) {
        // canvas clear 
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
        this.BurgerGroup.draw(this.ctx)
        requestAnimationFrame(this.animate.bind(this))
    }
}

window.onload = () => {
    new App();
}