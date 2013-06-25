describe("typeof simple types :", function() {
	it("numbers are not typeof object.", function(){
		var i = 1;
		expect(typeof(i)).not.toEqual("object");
		expect(typeof(i)).toEqual("number");

		var f = 1.1;
		expect(typeof(f)).not.toEqual("object");
		expect(typeof(f)).toEqual("number");
	});
	it("booleans are not typeof Object.", function(){
		var t = true;
		expect(typeof(t)).not.toEqual("object");
		expect(typeof(t)).toEqual("boolean");

		var f = false;
		expect(typeof(f)).not.toEqual("object");
		expect(typeof(f)).toEqual("boolean");
	});
	it("null are typeof Object.", function(){
		var n = null;
		expect(typeof(n)).toEqual("object");
		console.log("for null types read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof");
	});
    it("undefined are not typeof Object.", function(){
		var u;
		expect(typeof(u)).not.toEqual("object");
		expect(typeof(u)).toEqual("undefined");
	});
	it("string are not typeof Object.", function(){
		var str = "Hello, World!!!";
		expect(typeof(str)).not.toEqual("object");
		expect(typeof(str)).toEqual("string");
	});
});
