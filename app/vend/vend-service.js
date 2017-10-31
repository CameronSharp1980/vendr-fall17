function VendService() {

    // PRIVATE PARTS
    var machineTotal = 5
    var machineTotals = {
        fives: {units: 5, quarterValue: 5},
        ones: {units: 5, quarterValue: 1},
        quarters: {units: 40, quarterValue: .25}
    }
    var balance = 0
    var pops = {
        dew: { name: "Mountain Dew", price: 1, quantity: 5 },
        pepsi: { name: "Pepsi", price: 1.25, quantity: 5 }
    }
    // var mtDewCost = 1
    // var quarterValue = .25
    var change = 0;


    // PUBLIC PARTS
    // GETTERS AND SETTERS

    this.getBalance = function getBalance() {
        return balance
    }

    this.addQuarter = function addQuarter() {
        balance += machineTotals.quarters.quarterValue
        // balance += quarterValue
        machineTotal += machineTotals.quarters.quarterValue
        machineTotals.quarters.units++

        console.log("Balance: " + balance)
        console.log("Machine Total: " + machineTotal)
        console.log("Total quarters: " + machineTotals.quarters.units)
    }

    this.addOnes = function addOnes() {
        balance += machineTotals.ones.quarterValue
        // balance += quarterValue
        machineTotal += machineTotals.ones.quarterValue
        machineTotals.ones.units++

        console.log("Balance: " + balance)
        console.log("Machine Total: " + machineTotal)
        console.log("Total Ones: " + machineTotals.ones.units)
    }

    this.addFives = function addFives() {
        balance += machineTotals.fives.quarterValue
        // balance += quarterValue
        machineTotal += machineTotals.fives.quarterValue
        machineTotals.fives.units++

        console.log("Balance: " + balance)
        console.log("Machine Total: " + machineTotal)
        console.log("Total Fives: " + machineTotals.fives.units)
    }

    this.makeChange = function makeChange() {
        change = balance;
        balance = 0;
        machineTotals.quarters.units =  machineTotals.quarters.units - (change / machineTotals.quarters.quarterValue)
        console.log("units: " + machineTotals.quarters.units);
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