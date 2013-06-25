describe("typeof Objects: ", function(){
    it("objects are typeof objects", function(){
      var o = {};
      expect(typeof(o)).toEqual("object");
    });
    it("arrays are typeof objects", function(){
      var a = [1,2,3];
      expect(typeof(a)).toEqual("object");
    });
    it("functions are typeof function", function(){
      var f = function() {};
      expect(typeof(f)).toEqual("function");
    });
    it("regular expressions are typeof object", function(){
      var r = /test/;
      expect(typeof(r)).toEqual("object");
    });
});
