describe("Return : ", function(){
	it("Function can return values.", function(){
		function foo() {return "bar";}
		expect(foo()).toEqual("bar");
	});
	it("Function can return other function.", function(){
		function foo() { return function() {return "bar";};}
		var bar = foo();
		expect(bar()).toEqual("bar");
	});
	it("return statement terminates further execution of the function.", function(){
		function foo(){ 
			var a = 1, b = 2;
			if(a !== b){
				return "bar";
			}
			//unreachable
			return a + b;
		}
		expect(foo()).toEqual("bar");
	});
    it("In absence of return statment, function returns value = undefined.", function(){
		function foo() {console.log("Hello, World!!!");}
		expect(foo()).toEqual(undefined);
	});
});
