function shop(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = input[2];
  let price = 0;
  if (
    (day === "Monday" ||
      day === "Tuesday" ||
      day === "Wednesday" ||
      day === "Thursday" ||
      day === "Friday") &&
    (fruit == "banana" ||
      fruit == "apple" ||
      fruit == "orange" ||
      fruit == "grapefruit" ||
      fruit == "kiwi" ||
      fruit == "pineapple" ||
      fruit == "grapes")
  ) {
    switch (fruit) {
      case "banana":
        price = quantity * 2.5;
        break;
      case "apple":
        price = quantity * 1.2;
        break;
      case "orange":
        price = quantity * 0.85;
        break;
      case "grapefruit":
        price = quantity * 1.45;
        break;
      case "kiwi":
        price = quantity * 2.7;
        break;
      case "pineapple":
        price = quantity * 5.5;
        break;
      case "grapes":
        price = quantity * 3.85;
        break;
    }
    console.log(price.toFixed(2));
  } else if (
    (day === "Saturday" || day === "Sunday") &&
    (fruit == "banana" ||
      fruit == "apple" ||
      fruit == "orange" ||
      fruit == "grapefruit" ||
      fruit == "kiwi" ||
      fruit == "pineapple" ||
      fruit == "grapes")
  ) {
    switch (fruit) {
      case "banana":
        price = quantity * 2.7;
        break;
      case "apple":
        price = quantity * 1.25;
        break;
      case "orange":
        price = quantity * 0.9;
        break;
      case "grapefruit":
        price = quantity * 1.6;
        break;
      case "kiwi":
        price = quantity * 3.0;
        break;
      case "pineapple":
        price = quantity * 5.6;
        break;
      case "grapes":
        price = quantity * 4.2;
        break;
    }
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }
}

shop(["grapes",
"noneday",
"0.5"])

