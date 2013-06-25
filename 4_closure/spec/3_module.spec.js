//Modules are the objects or fuctions that present an interface but hide implementation.
describe("Modules : ", function(){
	it("Modules hide implementation.", function(){
		//outer function (closure) hides implementation.
		var serial_maker = function(){
			//variables defined with var are local to the function,
			//they are not accessible from outside.
			var prefix = "";
			var seq = 0;
			//an object is returned, with 3 properties.
			//each property is an inner function.
			return {
				set_prefix : function(p){
					prefix = String(p);
				},
				set_sequence : function(s){
					seq = s;
				},
				generate_symbol : function(){
					var result = prefix + seq;
					seq += 1;
					return result;
				}
			};
		};

		var sequencer = serial_maker();
		sequencer.set_prefix("Q");
		sequencer.set_sequence(1000);
		expect(sequencer.generate_symbol()).toEqual("Q1000");
		expect(sequencer.generate_symbol()).toEqual("Q1001");
	});
});