//Instead of undefined, if fuctions return this, a cascading effect can be generated.
//Cascading makes code more elegant.
describe("Cascading : ", function(){
	it("Cascading makes code elegant.", function(){
		var me = {
			set_name : function(name){
				this.name = name;
				return this;
			},
			set_height : function(height){
				this.height = height;
				return this;
			},
			set_color : function(color){
				this.color = color;
				return this;
			}
		};
		me.set_name("Joe")
			.set_height(180)
			.set_color("Brown");
	
		expect(me.name).toEqual("Joe");
		expect(me.height).toEqual(180);
		expect(me.color).toEqual("Brown");
	});
});