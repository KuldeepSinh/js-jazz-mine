describe("Scope of the function : ", function()
{
    it("Inner function overrides variables defined in the outer function", function()
       {
	   function outer()
	   {
	       var a = 1, b = 2;
	       function inner()
	       {
		   var b = 3, c = 4;
		   return a + b + c;
	       }
	       return inner(); 
	   }
	   expect(outer()).toEqual(8);	   
       });
    it("Outer function does not have access to variables defined in the inner function", function()
       {
	   function outer()
	   {
	       var a = 1, b = 2;
	       function inner()
	       {
		   var b = 3, c = 4;
		   return a + b + c;
	       }
	       return a + b; 
	   }
	   expect(outer()).toEqual(3);	   
       });
    it("If outer function tries to access any variable defined in the inner function, exceptoin is thrown.", function()
       {
	   function outer()
	   {
	       var a = 1;
	       function inner()
	       {
		   var b;
	       }
	       return b; 
	   }
	   expect(outer).toThrow();	   
       });
});
