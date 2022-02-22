function petFoodCostCalc(input) {
    let catFood = Number(input[1]);
    let dogFood = Number(input[0]);
    let totalCost = (catFood * 4) + (dogFood * 2.5);
    console.log(`${totalCost} lv.`);
}

petFoodCostCalc([5, 4])