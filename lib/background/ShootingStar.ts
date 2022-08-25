// function ShootingStar() {
//     this.reset();
// }

// ShootingStar.prototype.reset = function () {
//     this.x = Math.random() * width;
//     this.y = 0;
//     this.len = Math.random() * 80 + 10;
//     this.speed = Math.random() * 10 + 6;
//     this.size = Math.random() * 1 + 0.1;
//     // this is used so the shooting stars arent constant
//     this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
//     this.active = false;
// };

ShootingStar.prototype.update = function () {
    if (this.active) {
        this.x -= this.speed;
        this.y += this.speed;
        if (this.x < 0 || this.y >= height) {
            this.reset();
        } else {
            bgCtx.lineWidth = this.size;
            bgCtx.beginPath();
            bgCtx.moveTo(this.x, this.y);
            bgCtx.lineTo(this.x + this.len, this.y - this.len);
            bgCtx.stroke();
        }
    } else {
        if (this.waitTime < new Date().getTime()) {
            this.active = true;
        }
    }
};

export default class ShootingStar {
    private x: number = 0;
    private y: number = 0;
    private len: number = 0;
    private speed: number = 0;
    private size: number = 0;
    private waitTime: number = 0;
    private active: boolean = false;

    constructor() {
        this.reset();
    }

    private reset(): void {
        this.x = Math.random() * width;
        this.y = 0;
        this.len = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.size = Math.random() * 1 + 0.1;
        // this is used so the shooting stars arent constant
        this.waitTime = new Date().getTime() + Math.random() * 3000 + 500;
        this.active = false;
    }

    upate() {
        if (this.active) {
            this.x -= this.speed;
            this.y += this.speed;
            if (this.x < 0 || this.y >= height) {
                this.reset();
            } else {
                bgCtx.lineWidth = this.size;
                bgCtx.beginPath();
                bgCtx.moveTo(this.x, this.y);
                bgCtx.lineTo(this.x + this.len, this.y - this.len);
                bgCtx.stroke();
            }
        } else {
            if (this.waitTime < new Date().getTime()) {
                this.active = true;
            }
        }
    }
}
