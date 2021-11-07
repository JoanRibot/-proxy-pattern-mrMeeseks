

function Box() {
    this.name="Rick's Box"
}


var boxAboveAll = (function createBox() {

    const theBox = new Box();
    return { 
        getBox :function getBox() {
            return theBox;
        }
    };
})(); 


exports.singletonBox = boxAboveAll