describe("Retrieve values from object : ", function()
{
    it('Value of an object property can be retrieved using following syntax : obj["key"].', function(){
		var o = {key:"value"};
		expect(o["key"]).toEqual("value");
	});
    it('Value of an object property can be retrieved using following syntax : obj.key.', function(){
		var o = {key:"value"};
		expect(o.key).toEqual("value");
	});
    it('If the property/key does not exist, value = undefined is return.', function(){
		var o = {key:"value"};
		expect(o.foo).toEqual(undefined);
	});
    it('If the property/key does not exist, || operator can be used to set default value.', function(){
		var o = {key:"value"};
		var f = o.foo || "Not Available";
		expect(f).toEqual("Not Available");
	});
    it('Attempting to retrieve values from an undefined property throws a TypeError exception.', function(){
		var o = {key:"value"};
		var f = function(){
			try { return o.f.bar; }
			catch(err) { throw err; }
		};
		expect(f).toThrow();
	});
});

