function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }
}

function addMenuItem(name, menuItem) {
  var menuToAddItem = name.menus[menuItem.type];
  for (var i = 0; i < menuToAddItem.length; i++) {
    if (menuToAddItem[i] === menuItem) {
      menuToAddItem.splice(i,1)
    }
  }
  menuToAddItem.push(menuItem);
}

function removeMenuItem(restName, menuItem, type) {
  for (var i = 0; i < restName.menus[type].length; i++) {
    if (restName.menus[type][i].name === menuItem) {
      restName.menus[type].splice(i,1)
      return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
