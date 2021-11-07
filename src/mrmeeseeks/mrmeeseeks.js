function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.randomGoodbyeMessage = ["Oooh yeah! Can do!", 
                                "Yes sireee!" , 
                                "Oh, yeah!, Yes, ma'am!"];

}

MrMeeseeks.prototype.makeRequest = function(verb, peticion) {
    this.wish = verb + " " + peticion;
    console.log(this.randomGoodbyeMessage[Math.floor(Math.random()*this.randomGoodbyeMessage.length)])
}

MrMeeseeks.prototype.lookAtMe = function(){
    console.log(this.messageOnCreate);
}

MrMeeseeks.prototype.fulfillRequest = function(){
    console.log(this.wish +" All done!");

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

