function yardGreening(input) {
    let finalPrice = Number(input[0]) * 7.61 * 0.82;
    let discount = Number(input[0]) * 7.61 * 0.18;
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

yardGreening([150])

function yardGreening(input) {
    let garden = Number(input[0]);
    let m2 = garden * 7.61;
    let discount = 0.18 * m2;
    let finalPrice = m2 - discount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}