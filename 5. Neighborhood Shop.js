function shop(input) {
  let productType = input[0];
  let town = input[1];
  let quantity = Number(input[2]);
  price = 0;
  if ((town === "Varna")) {
    switch (productType) {
      case "coffee":
        price = quantity * 0.45; break;
      case "water":
        price = quantity * 0.7; break;
      case "beer":
        price = quantity * 1.1; break;
      case "sweets":
        price = quantity * 1.35; break;
      case "peanuts":
        price = quantity * 1.55; break;
    }
  }

  else if ((town === "Plovdiv")) {
    switch (productType) {
      case "coffee":
        price = quantity * 0.4; break;
      case "water":
        price = quantity * 0.7; break;
      case "beer":
        price = quantity * 1.15; break;
      case "sweets":
        price = quantity * 1.3; break;
      case "peanuts":
        price = quantity * 1.5; break;
    }
  }
  else if ((town === "Sofia")) {
    switch (productType) {
      case "coffee":
        price = quantity * 0.5; break;
      case "water":
        price = quantity * 0.8; break;
      case "beer":
        price = quantity * 1.2; break;
      case "sweets":
        price = quantity * 1.45; break;
      case "peanuts":
        price = quantity * 1.6; break;
    }
  }
  console.log(price);
}

shop(["sweets",
"Sofia",
"2.23"])
