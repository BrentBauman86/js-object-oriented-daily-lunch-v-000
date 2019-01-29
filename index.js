// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0
let mealId = 0
let customerId = 0
let deliveryId = 0

class Neighborhood {
    constructor(name){
        this.name = name; 
        this.id = ++neighborhoodId; 

        store.neighborhoods.push(this);
    }
    
    deliveries() {
        return store.deliveries.filter(function(delivery){
            return delivery.neighborhoodId === this.id;
        }.bind(this)
    );
}

    customers() {
        return store.customers.filter(function(customer){
            return customer.neighborhoodId === this.id;
        }.bind(this)
    );
}
    
    meals() {
        return store.meals.filter(function(meal){
            return meal.neighborhoodId === this.id;
        }.bind(this)
    );
 }
}

class Customer {
    constructor(name, neighborhoodId){
        this.name = name;
        this.neighborhoodId = neighborhoodId;
        this.id = ++customerId; 

        store.customers.push(this);
    }

    deliveries() {
        return store.deliveries.filter(function(delivery){
            return delivery.customerId === this.id;
        }.bind(this)
    );
    }

    meals() {
        return store.meals.filter(function(meal){
            return meal.customerId === this.id;
        }.bind(this)
    );
    }

    totalSpent() {

    }
}

class Meal {
    constructor(title, price) {
        this.title = title
        this.price = price 
        this.id = ++mealId;

        store.meals.push(this);
    }

    deliveries() {
        return store.deliveries.filter(function(delivery){
            return delivery.mealId === this.id;
        }.bind(this)
    );
    }

    customers() {
        return store.customers.filter(function(customer){
            return customer.mealId.uniq === this.id;
        }.bind(this)
    );
    }

    byPrice() {
        return 
    }
}

class Delivery {
    constructor(mealId, customerId, neighborhoodId) {
        this.id = deliveryId++;
        this.mealId = mealId 
        this.customerId = customerId 
        this.neighborhood = neighborhoodId 
    }

    setDelivery(delivery) {
        this.deliveryId = delivery.id;
    }
    
    meal() {
        return store.meals.find(function(meal){
            return meal.id === this.mealId;
        }.bind(this)
    );
    }

    customer() {
        return 
    }
}