function VendService() {

    // PRIVATE PARTS
    var machineTotal = 5
    var balance = 0
    var pops = {
        dew: { name: "Mountain Dew", price: 1, quantity: 5 },
        pepsi: { name: "Pepsi", price: 1.25, quantity: 5 }
    }
    // var mtDewCost = 1
    var quarterValue = .25
    var change = 0;


    // PUBLIC PARTS
    // GETTERS AND SETTERS

    this.getBalance = function getBalance() {
        return balance
    }

    this.addQuarter = function addQuarter() {
        balance += quarterValue
        machineTotal += quarterValue
        console.log("Balance: " + balance)
        console.log("Machine Total: " + machineTotal)
    }

    this.makeChange = function makeChange() {
        change = balance;
        balance = 0;
        console.log("Change: " + change);
        console.log("Balance: " + balance);
        return change;
    }

    this.buyPop = function buyPop(type) {
        if (balance >= pops[type].price) {
            balance -= pops[type].price;
            return true;
        } else {
            return false;
        }
    }

    this.getQuantity = function getQuantity(type) {
        // pops[type].quantity--;
        // if (pops[type].quantity < 0) {
        //     pops[type].quantity = 0
        // }
        console.log("Quantity before subtraction: " + pops[type].quantity);
        return pops[type].quantity;
    }

    this.decrementQuantity = function decrementQuantity(type) {
        pops[type].quantity--;
        if (pops[type].quantity < 0) {
            pops[type].quantity = 0;
        }
        console.log("Quantity after subtraction: " + pops[type].quantity);
    }



}