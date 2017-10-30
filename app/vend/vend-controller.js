function VendController(){

    // PRIVATE PART
    var vendService = new VendService() //CONSTRUCTORS RETURN OBJECTS
    
    var balanceElem = document.getElementById('current-balance')
    
    function update(){
        balanceElem.innerText = vendService.getBalance()
    }

    // PUBLIC PARTS
    this.buyMtDew = function buyMtDew(){
        console.log('DID IT WORK?')
    }

    this.addQuarter = function addQuarter(){
        vendService.addQuarter()
        update()
    }
}
