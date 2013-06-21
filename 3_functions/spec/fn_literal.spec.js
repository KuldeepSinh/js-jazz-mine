describe("Functions Literals : ", function()
{
    it("Functions can be assigned as literals.", function()
       {
	   var add = function(a, b) {return a + b; };
	   expect(add(1,1)).toEqual(2);
       });
});
