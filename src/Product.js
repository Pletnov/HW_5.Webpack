export default class Product {
    constructor(title, img) {
        this.title = title;
        this.img = img;
        this.date = new Date();
        this.test = '11111345sdf';
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            img: this.img,
            date: this.date
        });
    }
}