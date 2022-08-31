import { IAnimate } from './type';

export default class ShootingStar implements IAnimate {
    private x: number = 0;
    private y: number = 0;
    private len: number = 0;
    private speed: number = 0;
    private size: number = 0;
    private waitTime: number = 0;
    private height: number = 0;
    private active: boolean = false;

    constructor(private ctx: CanvasRenderingContext2D | null) {
        this.reset();
        this.height = document?.body?.offsetHeight ?? 0;
    }

    reset() {
        this.x = Math.random() * window?.innerWidth * 2 ?? 0;
        this.y = 0;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 0.5 + 0.1;

        // this is used so the shooting stars arent constant
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        this.active = false;
    }

    update() {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < -10 || this.y >= this.height + 10) {
                this.reset();
            } else {
                if (this.ctx) {
                    this.ctx.lineWidth = this.size;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.x, this.y);
                    this.ctx.lineTo(this.x + this.len, this.y - this.len);
                    this.ctx.stroke();
                }
            }
        } else {
            if (this.waitTime < new Date().getTime()) {
                this.active = true;
            }
        }
    }
}
