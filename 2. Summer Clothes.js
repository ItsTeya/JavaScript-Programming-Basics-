function clothes(input) {
  let degrees = Number(input[0]);
  let timeOfDay = input[1];
  let outfit;
  let shoes;
  if (timeOfDay === "Morning") {
    if (degrees <= 18 && degrees >= 10) {
      outfit = "Sweatshirt";
      shoes = "Sneakers";
    } else if (degrees >= 25 && degrees <= 42) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (timeOfDay === "Afternoon") {
    if (degrees > 18 && degrees <= 24) {
      outfit = "T-Shirt";
      shoes = "Sandals";
    } else if (degrees >= 25 && degrees <= 42) {
      outfit = "Swim Suit";
      shoes = "Barefoot;";
    } else {
      outfit = "Shirt";
      shoes = "Moccasins";
    }
  } else if (timeOfDay === "Evening") {
    outfit = "Shirt";
    shoes = "Moccasins";
  }
  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

clothes(["10",
"Morning"])
