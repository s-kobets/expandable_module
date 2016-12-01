import Sale from './page/decorator.js'

// создаем цену для товара
const sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('money');

alert(sale.getPrice());
