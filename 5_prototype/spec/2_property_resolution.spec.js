describe("Property Resolution : ", function(){
	var Person = function(){
		Person.firstName = "FirstConMan";
		Person.prototype.firstName = "FirstProtMan";

		Person.lastName = "LastConMan";
		Person.prototype.lastName = "LastProtMan";

		Person.prototype.middleName = "MidProtMan";
	};

	var JoePerson = new Person();
	JoePerson.firstName = "Joe";

	it("Property resolution starts from the object itself.", function(){
		expect(JoePerson.firstName).toEqual("Joe");
	});
	it("If property is not present in the object, property of its construcor is checked.", function(){
		expect(JoePerson.lastName).toEqual("LastConMan");
	});
	it("If property is neither present in the object, nor in its construcor, then construcor's prototype is checked.", function(){
		expect(JoePerson.middleName).toEqual("MidProtMan");
	});
	it("If property is not present in the object, its construcor, and its construcor's prototype 'undefined' is returned.", function(){
		expect(JoePerson.alias).toEqual(undefined);
	});	
	it("Above Test#2 fails : Similar test also fails : derived from JavaScript Ninja book : pg.no. 126.", function(){
		function Ninja(){
			this.swung = true;
			this.swingSword = function(){return !this.swung;};
		}
		var ninja = new Ninja();
		Ninja.prototype.swingSword = function(){return this.swung;};
		expect(ninja.swingSword()).toBeTruthy();	
	});
	
});