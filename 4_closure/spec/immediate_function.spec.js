describe("Immediate Function : ", function()
{
    it("Anonymous funcitons can be called, with immediate functions.", function()
       {
	   expect((function() {return ("Hello, World!!!");}) ()).toEqual("Hello, World!!!");
       });
    it("Arguments can be passed to immediate functions.", function()
       {
	   expect((function(msg) {return (msg);}) ("Hello, World!!!")).toEqual("Hello, World!!!");
       });
});
