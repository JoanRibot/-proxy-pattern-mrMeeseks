



function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";

}


var meeseekAboveAll = (function createMeeseek() {

    const theMeeseek = new MrMeeseeks();

    return {
        get: function() {
            return theMeeseek;
        }
    };
})();

exports.meeseekAboveAll = meeseekAboveAll;

