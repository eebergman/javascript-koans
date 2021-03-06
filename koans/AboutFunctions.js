describe("About Functions", function() {

  it("should declare functions", () => {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  })

  it("should know internal variables override outer variables", () => {
    var message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      var message = "Inner";
      return message;
    }
    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
  })

  it("should have lexical scoping", () => {
    var vari = "top-level";

    function parentFunction() {
      var vari = "local";
      function childFunction() {
        return vari;
      }
      return childFunction();
    }
    expect(parentFunction()).toBe("local");
  })

  it("should use lexical scoping to synthesis functions", () => {
    
    function makeMysteryFunction(makerValue) {
      var newFunction = function doMysteriousThing(param) {
        return makerValue + param;
      };
      return newFunction;
    };

    var mysteryFunction3 = makeMysteryFunction(3);
    var mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
  })

  it("should allow extra function arguments", () => {

    function returnFirstArg(firstArg) {
      return firstArg;
    };
    expect(returnFirstArg("first", "second", "third")).toBe("first");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    };
    expect(returnSecondArg("only give first arg")).toBe(undefined);

    function returnAllArgs() {
      var argsArray = [];
            var argsArray = [];
      for (var i = 0; i < arguments.length; i++) {
        argsArray.push(arguments[i]);
      };
      return argsArray.join(",");
    };
    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", () => {
    var appendRules = function (name) {
      return name + " rules!"
    };

    var appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    var praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");
  });
});
