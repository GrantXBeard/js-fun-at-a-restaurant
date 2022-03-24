function takeOrder(order, deliveries) {
  if (deliveries.length < 3)
  deliveries.push(order)
}

function refundOrder(orderNum, deliveries) {
  for (var i = 0; i < deliveries.length; i++) {
    if (orderNum === deliveries[i].orderNumber) {
      deliveries.splice(i,1);
    }
  }
}

function listItems(deliveries) {
  var listItems = '';
  for (var i = 0; i < deliveries.length; i++) {
    if (i === deliveries.length - 1) {
    listItems += deliveries[i].item;
  } else {
    listItems += deliveries[i].item + ', '
  }
  }
  return listItems
}

function searchOrder(deliveries, itemName) {
  for (var i = 0; i < deliveries.length; i++) {
    if (deliveries[i].item === itemName) {
      return true;
    }
  }
  return false;
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
