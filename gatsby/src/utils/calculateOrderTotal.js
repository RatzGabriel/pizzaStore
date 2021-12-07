import calculatePizzaPrice from './calculatePizzaPrice';

function calculateOrderTotal(order, pizzas) {
  // Loop over each item in the order
  return order.reduce((runningTotal, singleOrder) => {
    // Calc the total for that pizza
    const pizza = pizzas.find(
      (singlePizza) => singlePizza.id === singleOrder.id
    );
    // add that total to the running total
    return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}

export default calculateOrderTotal;
