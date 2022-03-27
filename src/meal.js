 function nameMenuItem(itemName) {
  return `Delicious ${itemName}`
}

function createMenuItem(itemName, itemPrice, itemType) {
  return {
    name: itemName,
    price: itemPrice,
    type: itemType
  }
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return ingredients;
  } else {
    ingredients.push(ingredient);
    }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;

}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredient, menuItemType) {
  var newRecipe = {
    title: title,
    ingredients: ingredient,
    type: menuItemType,
  }
  return newRecipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
