window.foobar = (function() {
        return {
                greetings : "Hello",
                sayHello : function() {
                        return this.sayHelloTo("World");
                },              
                sayHelloTo : function(to) {
                        return this. greetings + ", " + to + "!";
                },
                foobar : function() {
                        return "fooFOObarBAR";
                },
                Foobar : function(greetings) {
                        this.greetings = greetings;
                }
        };
})();

foobar.Foobar.prototype.sayHelloTo = foobar.sayHelloTo;