describe("Update Object : ", function()
{
    it("Assigning new value to an existing property updates its value.", function()
       {
	   var o = {key : "value"};
	   o.key = "new_value";
	   expect(o.key).toEqual("new_value");
	   expect(o.key).not.toEqual("value");
       });
    it("Assigning new value to a non-existing property, accumulates new property to the object.", function()
       {
	   var o = {key : "value"};
	   o.foo = "bar";
	   expect(o.foo).toEqual("bar");
       });
    it("Assigning new value to a non-existing property, does not affect existing property and its value.", function()
       {
	   var o = {key : "value"};
	   o.foo = "bar";
	   expect(o.key).toEqual("value");
       });
});
