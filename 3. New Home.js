function home(input) {
  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);
  let flowerCost = 0;

  switch (flowerType) {
    case "Roses":
      flowerCost = flowerCount * 5;
      if (flowerCount > 80) {
        flowerCost = flowerCost * 0.9;
      }
      break;
  }
  switch (flowerType) {
    case "Dahlias":
      flowerCost = flowerCount * 3.8;
      if (flowerCount > 90) {
        flowerCost = flowerCost * 0.85;
      }
      break;
  }
  switch (flowerType) {
    case "Tulips":
      flowerCost = flowerCount * 2.8;
      if (flowerCount > 80) {
        flowerCost = flowerCost * 0.85;
      }
      break;
  }
  switch (flowerType) {
    case "Narcissus":
      flowerCost = flowerCount * 3;
      if (flowerCount < 120) {
        flowerCost = flowerCost * 1.15;
      }
      break;
  }
  switch (flowerType) {
    case "Gladiolus":
      flowerCost = flowerCount * 2.5;
      if (flowerCount < 80) {
        flowerCost = flowerCost * 1.2;
      }
      break;
  }
  let diff = Math.abs(flowerCost - budget);
  if (budget >= flowerCost) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

home(["Narcissus",
"119",
"360"])
