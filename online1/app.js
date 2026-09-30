//Создаем класс Продуктов
class Product {
    constructor(name,price,category) {
this.name = name;
this.price = price;
this.category = category;
this.buyers = [];
    }

addBuyer(buyer) {
    this.buyers.push(buyer.name);
}
info() {
    console.log(`Product: ${this.name}, Price: $${this.price}, Category: ${this.category}, Buyers: ${this.buyers.join(", ")}`);
}
}
class Buyer {
    constructor(name, age, budget) {
        this.name = name;
        this.age = age;
        this.budget = budget;
    }
    buy(product){
        console.log(`Попытка покупки ${product.name} за $${product.price} покупателем ${this.name}`);
        // Вызываем функцию для подтверждения
        const confirmed = makePurchase(product.name, product.price);
        if (confirmed) {
            if (this.budget >= product.price) {
                console.log(`${this.name} купил ${product.name} за ${product.price}`);
                this.budget -= product.price;
                product.addBuyer(this);
            }
            else{
                console.log (`${this.name} не имеет достаточно бюджета для покупки ${product.name}`);
            }
        } else {
            console.log (`${this.name} отменил покупку ${product.name}`);
        }
    }
    info() {
        console.log(`Buyer: ${this.name}, Age: ${this.age}, Budget: $${this.budget}`);
    }
}
class Store{
    constructor(name,location,revenue) {
        this.name = name;
        this.location = location;
        this.revenue = revenue;
    }
    sell(buyer, product) {
        console.log(`Попытка продажи ${product.name} покупателю ${buyer.name} в магазине ${this.name}`);
        if(buyer.budget >= product.price) {
            buyer.buy(product);
            if(buyer.budget >= 0) {
                this.revenue += product.price;
            }
        } else {
            console.log(`${buyer.name} не имеет достаточно денег для покупки ${product.name} в ${this.name}`);
        }
    }
    info() {
        console.log(`Store: ${this.name}, Location: ${this.location}, Revenue: $${this.revenue}`);
    }
}
//окошко
function makePurchase(productName, price) {
    console.log(`Запрос на подтверждение покупки ${productName} за $${price}`);
    const confirmed = confirm(`Вы уверены, что хотите купить ${productName} за $${price}?`);
    if (confirmed) {
        alert(`Вы купили ${productName} за $${price}!`);
    return true;
  } else {
    alert(`Покупка ${productName} отменена.`);
    return false;
  }
}
const product1 = new Product('Chanel Bag', 5000, 'Accessories');
const product2 = new Product('Dior Lipstick', 40, 'Cosmetics');
const product3 = new Product('YSL Shoes', 1200, 'Footwear');

const buyer1 = new Buyer('Sophia', 30, 6000);
const buyer2 = new Buyer('Emma', 25, 100);
const buyer3 = new Buyer('Olivia', 35, 1500);

const store1 = new Store('Luxury Boutique', 'Paris', 0);
const store2 = new Store('Exclusive Shop', 'New York', 0);

product1.addBuyer(buyer1);
product1.info();

buyer1.buy(product1);
store1.sell(buyer1, product3);

console.log('--- After transactions ---');
product1.info();
product3.info();

buyer2.info();
buyer3.info();
store1.info();
store2.info();
