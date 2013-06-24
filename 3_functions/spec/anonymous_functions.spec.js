describe("Anonymous functions : ", function()
{
    it("Anonymous function has no name.", function()
       {
	   expect((function(){}).name).toBe("");
       });
    it("Anonymous function can be assigned to a variable.", function()
       {
	   var fun = function(){};
	   expect(fun.name).toBe("");
       });
    it("Anonymous function can be established as a method of an object.", function()
       {
	   var o = 
	       { 
		   //here method is the name of the property, it's not the name of the function.
		   method : function() {}
	       };
	   expect(o.method.name).toBe("");
       });
});
