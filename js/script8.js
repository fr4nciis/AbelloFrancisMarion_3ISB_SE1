class Dog 
{
    constructor(name, breed, color) {
        this.name = name;
        this.breed = breed;
        this.color = color;
    }

    displayInfo() {
        console.log(`name: ${this.name}, breed: ${this.breed}, color:${this.color}`);
    }
}

Dog.prototype.eat = function (food) {

    if (food === "fish" && this.name === "Bantay") {
        console.log(`${this.name} likes the food`)
    }
}
Dog.prototype.age = 2;

let dog = new Dog("Bantay");

dog.eat("fish");