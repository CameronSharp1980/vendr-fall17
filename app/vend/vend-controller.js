function VendController() {

    // PRIVATE PART
    var vendService = new VendService() //CONSTRUCTORS RETURN OBJECTS
    var balanceElem = document.getElementById('current-balance')
    var dewElem = document.getElementById("mt-dew-pic")
    var changeElem = document.getElementsByClassName("change-span")[0]

    function update() {
        balanceElem.innerText = vendService.getBalance()
        // changeElem.innerText = vendService.makeChange()
    }

    // PUBLIC PARTS
    this.buyPop = function buyPop(type) {
        console.log('buyPop Start')
        console.log(type)
        if (vendService.buyPop(type)) {
            console.log("Do the Dew")
            changeElem.innerText = vendService.makeChange()
            update()
            document.getElementById("mt-dew-pic").classList.remove("hidden")
        } else {
            console.log("Feed me more quarters")
            update()
        }
    }
    update();


    this.addQuarter = function addQuarter() {
        document.getElementById("mt-dew-pic").classList.add("hidden")
        vendService.addQuarter()
        update()
    }
}
