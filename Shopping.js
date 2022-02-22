function shopping(input) {
  let budget = Number(input[0]);
  let GPUCount = Number(input[1]);
  let CPUCount = Number(input[2]);
  let RAMCount = Number(input[3]);
  let GPUPrice = GPUCount * 250;
  let CPUPrice = CPUCount * GPUPrice * 0.35;
  let RAMPrice = RAMCount * GPUPrice * 0.1;
  let partsCost = GPUPrice + CPUPrice + RAMPrice;

  if (GPUCount > CPUCount) {
    partsCost = partsCost * 0.85;
  }
  let diff = Math.abs(partsCost - budget);
  if (budget >= partsCost) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}

shopping(["900",
"2",
"1",
"3"])