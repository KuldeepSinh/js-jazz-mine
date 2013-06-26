//A new object can inherit the properties of old object
describe("Prototypal inheritance : ", function(){
	it("Differential inheritance, customizes the parent object.", function(){
		if (typeof Object.create !== 'function') {
			Object.create = function (o) {
			var F = function () {};
			F.prototype = o;
			return new F();
			};
		}

		//base object
		var root = {}; // Could be any object with any prototype object

		//generic person object, created from root.
		var person = Object.create(root);
		person.firstName = false;
		person.lastName = false;		
		person.toString = function(){ 
		return this.firstName ? (this.lastName ? this.firstName + " " +this.lastName : this.firstName) 
			: (this.lastName ? this.lastName : "a Person");
		}; 
		
		//JoePerson is created from person.
		JoePerson = Object.create(person);
		JoePerson.firstName = "Joe";
		//test
		expect(JoePerson.toString()).toEqual("Joe");
	});

});