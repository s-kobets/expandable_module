import Sale from './page/decorator.js'
import cloneDom from './page/cloneDom.js'
import Button from './page/event.js'

// создаем цену для товара
const sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('money');

console.log(sale.getPrice());


cloneDom.init();
Button.init();