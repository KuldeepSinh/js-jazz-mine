describe("Conctructor Invocation : ", function()
{
    it("When functions are invoked with the 'new' keyword, it is called constructor invocation.", function()
       {
	   function Context() {this.con = function() {return this}; }
	   //invocation with the new keyword.
	   var con1 = new Context();
	   expect(con1.con()).toBe(con1);
       });
    it("When functions are invoked with the 'new' keyword, its definition serves to be a blue-print.", function()
       {
	   function Context() {this.con = function() {return this}; }
	   //From the blue print, multiple functions can be created.
	   var con1 = new Context();
	   var con2 = new Context();
	   expect(con1.con()).toBe(con1);
	   expect(con2.con()).toBe(con2);
       });

});
