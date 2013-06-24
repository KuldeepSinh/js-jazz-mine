//When a function is assigned to a property AND
//the function is invoked through referencing the property,
//the invocation is method invocation.
describe("Method Invocation : ", function()
{
    var o = 
	{
	    msg : "Hello, Wrld!!!",
	    //Function is assigned to property
	    get_msg : function() {return this.msg;}    
	};

    it("Function can be stored as a property of an object.", function()
       {
	   expect(typeof(o.get_msg)).toBe("function");
       });
    it("Function can be invoked from the property of an object, as a method.", function()
       {
	   //Side note: 
	   //o.msg - in following method call, is accesible,
	   //because var o is defined inside the enclosing function (describe),
	   //which leads to the closure effect.
	   
	   //Function is invoked through property.
	   expect(o.get_msg()).toBe(o.msg);
       });
    it("The 'this' invocation context referes to the object of the property.", function()
       {
	   //function returns 'this'
	   function msg() {return this;}
	   var o1 = 
	       {
		   msg_prop : msg
	       };
	   var o2 = 
	       {
		   msg_prop : msg
	       };
	   //if msg() called directly, this context refers to global.
	   expect(msg()).toBe(global);
	   //if callsed as a part of method invocation, this context refers to the enclosing object.
	   expect(o1.msg_prop()).toBe(o1);
	   expect(o2.msg_prop()).toBe(o2);
       });
    it("Function defined as a property of an object can access other propertise with 'this' invocation context.", function()
       {
	   expect(o.get_msg()).toBe(o.msg);
       });
});
