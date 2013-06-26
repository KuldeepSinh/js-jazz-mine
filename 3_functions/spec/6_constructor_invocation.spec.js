//If a function is invoked with a new keyword, then that invocaiton is called contructor-invocation.
describe("Conctructor Invocation : ", function(){
	//constructor function.
	function Context() {this.con = function() {return this;}; }

	it("When functions are invoked with the 'new' keyword, it is called constructor invocation.", function(){		
		//invocation with the new keyword.
		var con1 = new Context();
		expect(con1.con()).toBe(con1);
	});	
	it("Functions created with new operator, are of type = object.", function(){
		var con1 = new Context();
		expect(typeof(con1)).toBe("object");
		expect(con1 instanceof Context).toBeTruthy();
		expect(con1.constructor).toBe(Context);
	});
	it("Functions created with new operator, are instances of parent type.", function(){
		var con1 = new Context();		
		expect(con1 instanceof Context).toBeTruthy();
		expect(con1.constructor).toBe(Context);
	});
	it("Function created with new operator, contains a constructor, which is of parent type.", function(){
		var con1 = new Context();
		expect(con1.constructor).toBe(Context);
	});
	it("When functions are invoked with the 'new' keyword, their parent's definition serves to be a blue-print.", function(){		
		//From the blue print, multiple functions can be created.
		var con1 = new Context();
		var con2 = new Context();
		expect(con1.con()).toBe(con1);
		expect(con2.con()).toBe(con2);
	});
	it("When multiple functions are created from a common parent, their constructors point to the same parent.", function(){
		var con1 = new Context();
		var con2 = new Context();
		expect(con1.constructor).toBe(con2.constructor);
	});
	it("Even if multiple functions are created from a common parent, they are not identical.", function(){
		var con1 = new Context();
		var con2 = new Context();
		expect(con1).not.toBe(con2);
	});
});
