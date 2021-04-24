class Item {
    constructor() {
        this.x = random(0, 800);
        this.y = random(0, 300);
        this.type = int(random(3));
    }
 
    show() {//red
        fill(255, 0, 0);
        circle(this.x, this.y, 20);
    }
    showTrapped(refX, refY) {//green
        fill(0, 255, 0);
        circle(refX, refY, 10);
    }
    move() {
        this.y++;
        if (this.y > 600) {
            this.x = random(0, 800);
            this.y = random(-150, 0);
        }
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y
    }
}