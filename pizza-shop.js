class PizzaShop{
    constructor(){
            this.orderNumber = 0;
    }

    order(){
        this.orderNumber++;
    }

    displayOrderNumber(){
        console.log(`Current Order number ${this.orderNumber}`)
    }
}

module.expxorts = PizzaShop; 