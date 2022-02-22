function toyShop(input) {
    let vacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let teddy = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    let toyCount = puzzle + doll + teddy + minion + truck;
    let toySales = puzzle * 2.60 + doll * 3 + teddy * 4.10 + minion * 8.20 + truck * 2;
    if (toyCount >= 50) {
        toySales = toySales * 0.75;
    }
    profit = toySales * 0.9;
    let diff = Math.abs(vacation - profit);
    if (profit >= vacation) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }
} 

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

