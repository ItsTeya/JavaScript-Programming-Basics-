function areaOfFigures(input) {
  let type = input[0];
  let area;

  if (type === "square") {
    a = Number(input[1]);
    area = a * a;
  } else if (type === "rectangle") {
    a = Number(input[1]);
    b = Number(input[2]);
    area = a * b;
  } else if (type === "circle") {
    a = Number(input[1]);
    area = a * a * Math.PI;
  } else if (type === "triangle") {
    width = Number(input[1]);
    height = Number(input[2]);
    area = (width * height) / 2;
  }
  console.log(area.toFixed(3));
}

areaOfFigures(["triangle", 5, 2]);
