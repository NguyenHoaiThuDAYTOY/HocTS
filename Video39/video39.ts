class Circle {
    static pi: number = 3.14;
    static calArea(radius: number): number {
        return this.pi * radius * radius;
    }
}
console.log('Circle', Circle.pi, Circle.calArea(5));