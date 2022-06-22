class Collector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.items = [];//greem-trapped items
        this.radio = 25;
    }
    verifyContact(item) {
        if (dist(item.getX(), item.getY(), this.x, this.y) < this.radio) {
            return true;
        }
        return false;
    }
    show() {
        //green trapped items
        let dx = this.x + 30;
        let dy = this.y;
        for (let index = 0; index < this.items.length; index++) {
            this.items[index].showTrapped(dx, dy);
            dx += 15;
        }
        //black collector
        fill(0);
        circle(this.x, this.y, this.radio * 2);
    }
    add(item) {
        this.items.push(item);
    }
    setX(x) {
        this.x = x;
    }
}
// black Collector withCredentials = truetype

