class Cinema 
{
    constructor(name, location, capacity) {
        this.name = name;
        this.location = location;
        this.capacity = capacity;
    }

    displayInfo() {
        console.log(`name: ${this.name}, location: ${this.location}, capacity:${this.capacity}`);
    }
}

Cinema.prototype.show = function (movie) {

    if (movie === "End Game" && this.name === "Cinema 1") {
        console.log(`${this.name} is showing ${movie}`)
    }
}
Cinema.prototype.age = 2;

let c1 = new Cinema("End Game");

c1.show("End Game");