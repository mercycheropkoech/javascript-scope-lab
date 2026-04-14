// Write your solution in this file!
// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a burger (function scope)
function addBurger() {
  const newBurger = 'Flatburger';
  burgers.push(newBurger);
}

// Block scope example
if(true) {
  const anotherNewBurger = 'Maple Bacon Burger';
  burgers.push(anotherNewBurger);
}

// Function to change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}