describe("Scope : ", function(){
	it("Variables are accessible from the point they are defined.", function(){
		function f(){
			var a = 1, b = 2;
			var sum = a + b;
			expect(typeof(sum)).toBe("number");
			expect(sum).toBe(3);
		}
		f();
	});
    it("Variables remain undefined until their point of definition within a funcion.", function(){
		function f(){
			var a = 1, b = 2;
			expect(typeof(sum)).toBe("undefined");
			var sum = a + b;
		}
		f();
	});
    it("Inner function is accessible within entire outer funcion.", function(){
		function outer(){
			expect(inner()).toEqual(1);
			function inner() {return 1;}
			expect(inner()).toEqual(1);
		}
		outer();
	});
    it("Inner function is not accessible outside of the outer funcion.", function(){
		function outer(){
			function inner() {}
		}
		expect(typeof(inner)).toBe("undefined");
	});
});