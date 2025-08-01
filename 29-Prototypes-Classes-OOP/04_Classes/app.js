class Color {
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB(){
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }


    greet() {               // method used inside of class
        return `HELLO FROM ${this.name}!`;
    }       


    rgb() {
        const { r, g, b } = this;       // same thing with `rgb(${this.r},${this.g},${this.b},)` or directly return `rgb(${this.innerRGB()})`
        return `rgb(${r},${g},${b})`
    }     
}

const c1 = new Color(255, 67, 89,'tomato');  

console.log(c1);    // it is an object  -> Color { r: 255, g: 67, b: 89, name: 'tomato' }
console.log(c1.greet());    // HELLO FROM tomato!
console.log(c1.rgb());   // rgb(255,67,89)   

