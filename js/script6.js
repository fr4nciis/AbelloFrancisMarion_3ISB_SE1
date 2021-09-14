let Cinema = {
    name: "Cinema 1", 
    Location: "megamall", 
    capacity: 1000 
};
 
let show = function(movie)
{
    this.movie = "End Game";
    return(this.name + " " + "is showing " + this.movie + ".");
}
 
console.log(show.call(Cinema))