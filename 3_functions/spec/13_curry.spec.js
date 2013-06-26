//Currying allows us to produce a function by combining a function and a value.
describe("Curry : ", function(){
	it("Function and value can be combined to form a new function.", function(){
		var adder = function (num1){
			return function(num2) {
				return num1 + num2;
			};
		};

		var adder_5 = adder(5);
		expect(adder_5(5)).toEqual(10);

		var adder_10 = adder(10);
		expect(adder_10(5)).toEqual(15);
	});
});