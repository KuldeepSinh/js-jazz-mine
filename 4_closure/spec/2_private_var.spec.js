describe("private variable approximation : ", function(){
	it("Closure can be used to approximate private variables.", function(){
		function Circle(){
			//variables declared with var are local to the function.
			var radius = 0;
			this.set_radius = function (radius){
				this.radius = radius;
			};
			this.get_area = function(){
				//this is important, which refers to var radius defined at top of the function.
				var a = 3.1415 * this.radius * this.radius;
				return Number((a).toFixed(4));
			};
		}
		circ = new Circle();
		circ.set_radius(10);				
		expect(circ.get_area()).toEqual(314.1500);
	});
});