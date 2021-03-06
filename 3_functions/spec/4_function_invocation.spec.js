//define a global varible.
message = "Hello, World!!!";

//Function can be directly invoked with its name.
describe("Function Invocation : ", function(){
  it("When a function is not a property, it can be invoked directly, with the invocation operator ().", function(){
    function add(a, b) {return a+b;}
    expect(add(1,2)).toEqual(3);
  });
  it("Function can be assigned to a (non-property) variable and can be invoked with the invocation operator () applied on the variable.", function(){
    function add (a, b) {return a+b;}
    var add_var  = add;
    expect(add_var(1,2)).toEqual(3);
  });
  it("When function is invoked as function, the 'this' context refers to the global context.", function(){
    function msg(){return this.message;}
    expect(msg()).toEqual(message);
    expect(msg()).toEqual("Hello, World!!!");
  });
});
