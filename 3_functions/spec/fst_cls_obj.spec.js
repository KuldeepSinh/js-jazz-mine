describe("Functions are First-class objects : ", function()
{
    it("Function can be created via literals.", function()
       {
	   var foo = function() {return "bar";};
	   expect(foo()).toEqual("bar");
       });
    it("Function can be assigned to variables.", function()
       {
	   var foo = function() {return "bar";};
	   var bar = foo;
	   expect(bar()).toEqual("bar");
       });
    it("Function can be assigned to array elements.", function()
       {
	   var foo = function() {return "bar";};
	   var ary  = new Array();
	   ary[0] = foo;
	   expect(ary[0]()).toEqual("bar");
       });
    it("Function can be assigned to property of other objects.", function()
       {
	   var foo = function() {return "bar";};
	   var bar = {};
	   bar.fun = foo;
	   expect(bar.fun()).toEqual("bar");
       });
    it("Function can be passed as argument to other functions.", function()
       {
	   //map expects a functiona and an array
	   var map = function(fun, arr) 
	   {
	       for(var i = 0; i < arr.length; i++)
		   {
		       arr[i] = fun(arr[i]);
		   }
	       return arr;
	   };
	   //sqr returns square of the element passed to it.
	   var sqr = function(arg)
	   {
	       return arg * arg;
	   };
	   
	   var ary = [1,2,3,4,5];
	   //map is called here, with sqr function passed as one of the arguments.
	   var sqr_ary = map(sqr, ary);

	   //return array should contain square of each element passed.
	   expect(sqr_ary[0]).toEqual(1);
	   expect(sqr_ary[1]).toEqual(4);
	   expect(sqr_ary[2]).toEqual(9);
	   expect(sqr_ary[3]).toEqual(16);
	   expect(sqr_ary[4]).toEqual(25);
       });
    it("Function can be returned as a value from other functions.", function()
       {
	   //adder retruns other function.
	   var adder = function(num1) 
	   {
	       return function(num2) { return num1 + num2; }; 
	   };
	   //adder5 is a function, which takes an argument and returns argument + 5.
	   var adder5 = adder(5);
	   //adder7 is a function, which takes an argument and returns argument + 7.
	   var adder7 = adder(7);

	   expect(adder5(10)).toEqual(15);
	   expect(adder7(10)).toEqual(17);
       });
});
