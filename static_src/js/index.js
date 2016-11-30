// Sale

function Sale(price) {
  this.price = price || 0;
  this.decorators_list = [];
}

Sale.prototype.getPrice = function () {
  let price = this.price;
  let i;
  let max = this.decorators_list.length;
  let name;
  console.log(price);
  for (i = 0; i < max; i += 1) {
    name = this.decorators_list[i];
    price = Sale.decorators[name].getPrice(price);
  }
  return price;
};

// Методы для добавления к создаваемому объекту
Sale.decorators = {};

Sale.decorators.fedtax = {
  getPrice: function (price) {
    return price + price * 5 / 100;
  }
};

Sale.decorators.money = {
  getPrice: function (price) {
    return `$ ${price.toFixed(2)}`;
  }
};

Sale.prototype.decorate = function (decorator) {
  this.decorators_list.push(decorator);
};

// создаем цену для товара
const sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('money');

alert(sale.getPrice());
