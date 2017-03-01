describe("About Objects", function () {

  describe("Properties", () => {
    var megalomaniac;

    beforeEach(() => {
      megalomaniac = { mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).toBe("Joker");
    });

    it("should confirm properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).toBe("Harley");
      expect(megalomaniac.henchWoman).toBe(undefined);
    })
  })

  it("should knot properties that are functions act like methods", () => {
    var megalomaniac = {
      mastermind: "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);
      }
    };

    var battleCry = megalomaniac.battleCry(4);
    expect("They are Pinky and the Brain Brain Brain Brain")
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Woods",
      henchman: "Adam West",
      birthYear: 1970,
      calcAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2017);
    expect(megalomaniac.calcAge()).toBe(47);


  });


  describe(" 'in' keyword", () => {
    var megalomaniac;

    beforeEach(() => {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr. Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", () => {
      var hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator", () => {
      var hasDetonator = "theDetonator" in megalomaniac;
      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", () => {
    var megalomaniac = {
      mastermind: "Agent Smith",
      henchman: "Agent Smith",
    };

    expect("enemy" in megalomaniac).toBe(false);

    megalomaniac.enemy = "Mr. Anderson";
    expect("enemy" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);

  })

  it("should use prototype to add all objects", () => {
    function Circle(radius) {
      this.radius = radius;
    };

    var simpleCircle = new Circle(10);
    var coloredCircle = new Circle(5);
    coloredCircle.color = "red";

    expect(simpleCircle.color).toBe(undefined);
    expect(coloredCircle.color).toBe("red");

    Circle.prototype.describe = function () {
      return "This circle has a radius of: " + this.radius;
    };

    expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
    expect(coloredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
