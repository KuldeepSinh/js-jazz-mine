describe("Function arguments : ", function()
{
    //sum is a function, which takes advantage of the arguments object,
    //to sum all the arguments passed to it.
    sum = function()
    {
	var i, s = 0;
	for(i = 0; i < arguments.length; i+=1)
	{
	    s += arguments[i];
	}
	return s;
    }

    it("arguments object contains zero arguments, when function is called without argument.", function()
       {
	   expect(sum()).toEqual(0);
       });
    it("arguments object contains all the arguments, when function is called with argument.", function()
       {
	   expect(sum(1,2,3,4,5)).toEqual(15);
       });
    it("If more arguments are passed than required, execive arguments are ignored.", function()
       {
	   function add(a, b) { return a+b; }
	   expect(add(1,2,3,4,5)).toEqual(3);
       });
    it("If less arguments are passed than required, remaining arguments remain undefined.", function()
       {
	   function arg_type(a) { return typeof(a); }
	   expect(arg_type()).toEqual("undefined");
       });
});
