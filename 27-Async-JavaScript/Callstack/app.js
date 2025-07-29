const multiply = (x, y) => x * y;

const square = x => x * x;

const isRightTriangle = (a,b,c) => {
    return square(a) + square(b) === square(c);
}

console.log("BEFORE");
isRightTriangle(3,4,5);
console.log("AFTER");