//apply() and call() are methods of 
//Function() constructor.
describe("Invocation with apply() and call() : ", function()
{
    function sum()
    {
	var total = 0;
	for(var i = 0; i < arguments.length; i++)
	{
	    total += arguments[i];
	}
	this.total = total;
    }
    
    it("apply() method expects an object and an arrary of arguments.", function()
       {
	   var o1 = {};
	   
	   //apply method
	   sum.apply(o1, [1,2,3,4,5]);
	   expect(o1.total).toEqual(15);
       });
    it("call() method expects an object and a number of arguments.", function()
       {   
	   var o2 = {};
	   //call method
	   sum.call(o2, 1,2,3,4,5)
	   expect(o2.total).toEqual(15);

       });
    it("When apply() or call() method is called, the 'this' context becomes same as of the passed object.", function()
       {   
	   function context () {this.con = this;}

	   //apply method
	   var o1 = {};
	   context.apply(o1);
	   expect(o1.con).toBe(o1);

	   //call method
	   var o2 = {};
	   context.call(o2);
	   expect(o2.con).toBe(o2);
       });

});
