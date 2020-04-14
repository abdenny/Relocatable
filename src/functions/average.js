let findAverage = (items, itemName) => {
  let prices = [];
  items.forEach((item) => {
    if (item.item_name.includes(itemName)) {
      prices.push(item.average_price);
    }
  });
  return prices;
};

export default findAverage;
