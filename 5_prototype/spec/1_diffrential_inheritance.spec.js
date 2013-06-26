//A new object can inherit the properties of old object
describe("Prototypal inheritance : ", function(){

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
		//properties of person object.
		person.firstName = false;
		person.lastName = false;		
		//method of person object
		person.toString = function(){ 
		return this.firstName ? (this.lastName ? this.firstName + " " +this.lastName : this.firstName) 
			: (this.lastName ? this.lastName : "a Person");
		}; 

	it("Differential inheritance, customizes the parent object.", function(){
				
		//JoePerson is created from person.
		var JoePerson = Object.create(person);
		JoePerson.firstName = "Joe";
		//test
		expect(JoePerson.toString()).toEqual("Joe");

		//JuliePerson is created from person.
		var JuliePerson = Object.create(person);
		JuliePerson.firstName = "Julie";
		JuliePerson.lastName = "Jackson";
		//test
		expect(JuliePerson.toString()).toEqual("Julie Jackson");
	});
});