function fishing(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let count = Number(input[2]);
  let rent = 0;
  switch (season) {
    case "Spring":
      rent = 3000;
      break;
    case "Summer":
    case "Autumn":
      rent = 4200;
      break;
    case "Winter":
      rent = 2600;
      break;
  }

  if (count <= 6) {
    rent = rent * 0.9;
  } else if (count <= 11) {
    rent = rent * 0.85;
  } else {
    rent = rent * 0.75;
  }
  if (count % 2 === 0 && season != "Autumn") {
    rent = rent * 0.95;
  }
  let diff = Math.abs(budget - rent);
  if (budget >= rent) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}

fishing(["2000", "Winter", "13"]);
