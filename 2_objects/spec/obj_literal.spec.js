describe("Oject Literals : ", function()
{
    it("object literal can be empty.", function()
       {
	   var o = {};
	   expect(typeof(o)).toEqual("object");
       });
    it("object is a collection of zero or more key:value pair.", function()
       {
	   var o = {key:"value"};
	   expect(typeof(o)).toEqual("object");
	   expect(o.key).toEqual("value");
       });
    it("Nested Objects : value of a key can be another object literal.", function()
       {
	   var o = 
	       {
		   outer_key:
		   {
		       inner_key : "inner_value"
		   }
	       };
	   expect(typeof(o)).toEqual("object");
	   expect(typeof(o.outer_key)).toEqual("object");
	   expect(o.outer_key.inner_key).toEqual("inner_value");
       });
});
