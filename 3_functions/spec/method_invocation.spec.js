describe("Method Invocation : ", function()
{
    var o = 
	{
	    msg : "Hello, Wrld!!!",
	    get_msg : function() {return this.msg;}    
	};

    it("Function can be stored as a property of an object.", function()
       {
	   expect(typeof(o.get_msg)).toBe("function");
       });
    it("Function can be from the property of an object, as a method.", function()
       {
	   //just a side note: 
	   //o.msg - in following method call, is accesible,
	   //because var o is defined inside the enclosing function (describe),
	   //which leads to the closure effect.
	   expect(o.get_msg()).toBe(o.msg);
       });
    it("Function defined as a property of an object can access other propertise with 'this' invocation context.", function()
       {
	   expect(o.get_msg()).toBe(o.msg);
       });
});
