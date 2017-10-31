function VendController() {

    // PRIVATE PART
    var vendService = new VendService() //CONSTRUCTORS RETURN OBJECTS
    var balanceElem = document.getElementById('current-balance')
    var dewElem = document.getElementById("dew-can")
    var changeElem = document.getElementsByClassName("change-span")[0]

    function update() {
        balanceElem.innerText = vendService.getBalance()
        // changeElem.innerText = vendService.makeChange()
    }

    // PUBLIC PARTS
    this.buyPop = function buyPop(type) {
        // console.log('buyPop Start')
        console.log(type)
        if (vendService.buyPop(type) && vendService.getQuantity(type) >= 1) { //current test line
            console.log("Enjoy your drink")
            vendService.decrementQuantity(type)
            changeElem.innerText = vendService.makeChange()
            update()
            if (type == 'dew') {
                document.getElementById("dew-can").classList.remove("hidden")
            } else if (type == 'pepsi') {
                document.getElementById("pepsi-can").classList.remove("hidden")
            }

        } else if (vendService.getQuantity(type) <= 0) {
            console.log("Out of stock");
            update()
        } else {
            console.log("Feed me more quarters")
        }
    }
    update();


    this.addQuarter = function addQuarter() {
        document.getElementById("dew-can").classList.add("hidden")
        document.getElementById("pepsi-can").classList.add("hidden")
        vendService.addQuarter()
        update()
    }
}
