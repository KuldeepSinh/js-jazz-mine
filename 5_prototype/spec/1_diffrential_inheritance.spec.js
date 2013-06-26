//A new object can inherit the properties of old object
describe("Prototypal inheritance : ", function(){
	it("Differential inheritance, customizes the parent object.", function(){

		//following method provides cloning mechanism.
		Object.prototype.clone = function(){
			// Extract the prototype from the "this" object
			var p = Object.getPrototypeOf(this);
			// Create a new object with p as its prototype
			return Object.create(p);
		};

		//create base/parent object.
		var mammal = {
			kind : "Mammal",
			get_kind : function(){
				return this.kind;
			}
		};

		//inherit parent object and customize it.
		var cow = mammal.clone();
		cow.kind = "Bowine";
		cow.legs = 4;
		cow.graze = "grass";
		cow.get_status = function(){
			return "Eating " + cow.graze;
		};

		//test
		expect(cow.kind).toEqual("Bowine");
		expect(cow.get_status()).toEqual("Eating grass");
	});
});