//define a global varible.
message = "Hello, World!!!";

//When a function is not a property of an object, it is invoked as a function.
describe("Function Invocation : ", function()
{
    it("When a function is not a property, it can be invoked directly with name.", function()
       {
	   function add(a, b) {return a+b;}
	   expect(add(1,2)).toEqual(3);	   
       });
    it("When function is invoded directly, the 'this' context refers to the global context.", function()
       {
	   function msg() {return this.message}
	   expect(msg()).toEqual(message);	   
	   expect(msg()).toEqual("Hello, World!!!");	   
       });

});
