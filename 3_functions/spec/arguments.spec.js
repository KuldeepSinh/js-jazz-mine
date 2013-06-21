describe("arguments object : ", function()
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
});
