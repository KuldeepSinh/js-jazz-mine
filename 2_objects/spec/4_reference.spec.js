describe("object Reference : ", function(){
    it("objects are always passed by reference, they are never copied.",function(){
		var o = {};
		var p = o;
		var q = p;
		expect(p).toBe(o);
		expect(q).toBe(p);
		expect(o).toBe(q);
	});
    it("objects created with same values but from different references are considered equal.",function(){
		var o = [1,2,3];
		var p = [1,2,3];
		expect(p).toEqual(o);
	});
    it("objects created with same values but from different references are not considered identical.",function(){
		var o = [1,2,3];
		var p = [1,2,3];
		expect(p).not.toBe(o);
	});
});