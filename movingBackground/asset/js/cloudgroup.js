import { Cloud } from './cloud.js'
export class CloudGroup {
    constructor() {
        this.totalClouds = 3;
        this.totalPoints = 3;
        this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)', 'rgba(30,45,102,0.6)'];

        this.clouds = [];

        for (let i = 0; i < this.totalClouds; i++) {
            const cloud = new Cloud(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.clouds[i] = cloud;
        }
    }
    resize(stageWidth, stageHeight) {
        for (let i = 0; i < this.totalClouds; i++) {
            const cloud = this.clouds[i];
            cloud.resize(stageWidth, stageHeight);
        }
    }
    draw(ctx) {
        for (let i = 0; i < this.totalClouds; i++) {
            const cloud = this.clouds[i];
            cloud.draw(ctx);
        }
    }
}