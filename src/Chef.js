class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }
  greetCustomer(name, timeOfDay) {
    if (timeOfDay === true) {
    return `Good morning, ${name}!`
  } else {
    return `Hello, ${name}!`
  }
  }
  checkForFood(foodItem) {
    if (foodItem.name === undefined) {
      return `Sorry, we aren't serving ${foodItem.name} today.`
    } else {
      return `Yes, we're serving ${foodItem.name} today!`
    }
  }
}

module.exports = Chef;
