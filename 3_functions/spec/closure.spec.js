describe("Closure : ", function()
{
    //variable defined at the function named describe.
    var a = 1;
    it("Inner function has access to the variables defined in the outer function.", function()
       {
	   //variable defined at the function named it.
	   var b = 2;
	   function outer()
	   {
	       //variable defined at the function named outer.
	       var c = 3;
	       function inner()
	       {
		   //variable defined at the function named inner.
		   var d = 4;
		   return a + b + c + d; 
	       }
	       return inner(); 
	   }
	   expect(outer()).toEqual(10);	   	   
       });
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

    it("Inner function can be referenced before and after its definition.", function()
       {
	   function outer()
	   {
	       //inner is called before it is defined.
	       expect(typeof(inner)).toBe("function");
	       function inner() {}
	       expect(typeof(inner)).toBe("function");
	   }
	   outer();
       });
    it("Inner function can not be referenced outside the outer function.", function()
       {
	   function outer()
	   {        
	       function inner() {}
	   }
	   expect(typeof(inner)).toBe("undefined");
       });
});
