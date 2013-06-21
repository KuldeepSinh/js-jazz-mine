describe("Closure : ", function()
{
    //variable defined at the function named describe.
    var a = 1;
    it("Inner fuction has access to the variables defined in the outer function.", function()
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
});
