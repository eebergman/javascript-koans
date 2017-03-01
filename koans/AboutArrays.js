describe("About Arrays", function () {

  //We shall contemplate truth by testing reality, via spec expectations.

  it("should create arrays", () => {
    var emptyArray = [];
    expect(typeof (emptyArray)).toBe(typeof (emptyArray));
    expect(emptyArray.length).toBe(0);

    var someFunction = function () { return 3; };

    var multiTypeArray = [0, 1, "two", someFunction, { value1: 4, value2: 5 }, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[1]).toBe(1);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]).toBe(someFunction);
    expect(multiTypeArray[4]).toEqual({ value1: 4, value2: 5 });
    expect(multiTypeArray[5]).toEqual([6, 7]);
  })

  it("should understand array literals", () => {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  })

  it("should understand arrat length", () => {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);

    
  })

  it("should slice arrays", () => {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
  })

  it("should know array references", () => {
    var array = ["zero", "one", "two", "three", "four", "five"];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }

    passedByReference(array);
    expect(array[1]).toBe("changed in function");

    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(assignedArray[5]).toBe("changed in assignedArray");

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(copyOfArray[3]).toBe("changed in copyOfArray");
  })

  it("should push and pop", () => {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  })

  it("should knot about shifting arrays", () => {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  })
});
