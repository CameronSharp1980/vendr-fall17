function VendService(){

    // PRIVATE PARTS
    var machineTotal = 5
    var balance = 0
    var mtDewCost = 1
    var quarterValue = .25

    // PUBLIC PARTS
    // GETTERS AND SETTERS
    this.getBalance = function getBalance(){
        return balance
    }

    this.addQuarter = function addQuarter(){
        balance += quarterValue
    }

    


}