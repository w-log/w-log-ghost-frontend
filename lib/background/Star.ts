import { IAnimate } from './type';

type StarOptions = {
    x: number;
    y: number;
};

export default class Star implements IAnimate {
    private size: number = 0;
    private speed: number = 0;
    private x: number = 0;
    private y: number = 0;

    constructor(
        { x, y }: StarOptions,
        private ctx: CanvasRenderingContext2D | null
    ) {
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.05;

        this.x = x;
        this.y = y;
    }

    reset() {
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.05;

        this.x = window?.innerWidth ?? 0;
        this.x = Math.random() * document?.body?.offsetHeight ?? 0;
    }

    update() {
        this.x -= this.speed;

        if (this.x < 0) this.reset();
        else this.ctx?.fillRect(this.x, this.y, this.size, this.size);
    }
}
