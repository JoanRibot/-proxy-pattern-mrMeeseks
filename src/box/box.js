
var singletonMrMeeseeks = require('../mrmeeseeks/mrmeeseeks');

function Box() {
    this.name="Rick's Box"
}


Box.prototype.createMrMeeseeks = function(){
    if(! this.mrMeeseeks){
    this.mrMeeseeks = singletonMrMeeseeks.meeseekAboveAll.get();
    }
    let clone = Object.create(this.mrMeeseeks);
    return clone;
}

Box.prototype.pressButton = function(reality){
    reality.push(this.mrMeeseeks);
    this.mrMeeseeks.lookAtMe();
}

Box.prototype.getProtoMeeseks = function(){
    return this.mrMeeseeks;
}


var boxAboveAll = (function createBox() {

    const theBox = new Box();
    return { 
        getBox: function() {
            return theBox;
        }
    };
})(); 


exports.singletonBox = boxAboveAll