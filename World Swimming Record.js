function record(input) {
  let oldRecord = Number(input[0]);
  let distance = Number(input[1]);
  let secPerMeter = Number(input[2]);

  let time = distance * secPerMeter;
  let slowTime = Math.floor(distance / 15) * 12.5;
  let newRecord = time + slowTime;
  diff = newRecord - oldRecord;
  if (newRecord < oldRecord) {
      console.log(`Yes, he succeeded! The new world record is ${newRecord.toFixed(2)} seconds.`);
  }
  else {
      console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
  }
}

record(["55555.67",
"3017",
"5.03"])
