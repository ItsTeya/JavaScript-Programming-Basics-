function movie(input) {
  let budget = Number(input[0]);
  let extraCount = Number(input[1]);
  let extraPrice = extraCount * input[2];
  let decor = budget * 0.1;
  if (extraCount > 150) {
    extraPrice = extraPrice * 0.9;
  }
  let expenses = decor + extraPrice
  let diff = Math.abs(budget - expenses);

  if (budget >= expenses) {
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  }
}

movie(["15437.62", "186", "57.99"]);
