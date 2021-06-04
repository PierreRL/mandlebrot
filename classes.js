
class CNum {
    constructor(real, complex) {
        this.real = real;
        this.complex = complex;
    }
    display() {
        console.log(this.real + " " + this.complex + "i");
    }
    add(second) {
        var realToReturn = this.real + second.real;
        var complexToReturn = this.complex + second.complex;
        return new CNum(realToReturn, complexToReturn);
    }
    multiply(second) {
        var realToReturn = (this.real * second.real) - (this.complex * second.complex);
        var complexToReturn = (this.real * second.complex) + (this.complex * second.real);
        return new CNum(realToReturn, complexToReturn);
    }
    square() {
        var realToReturn = (this.real * this.real) - (this.complex * this.complex);
        var complexToReturn = 2 * (this.real * this.complex);
        return new CNum(realToReturn, complexToReturn);
    }
    magnitude() {
        return Math.sqrt((this.real**2 + this.complex**2));
    }
    
};