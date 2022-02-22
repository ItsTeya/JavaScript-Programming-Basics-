function lunch(input) {
  let show = input[0];
  let showLength = Number(input[1]);
  let lunchBreak = Number(input[2]);
  let eating = lunchBreak * 0.125;
  let relaxing = lunchBreak * 0.25;
  let freeTime = lunchBreak - (eating + relaxing);
  diff = Math.ceil(Math.abs(freeTime - showLength))
  if (freeTime >= showLength) {
      console.log(`You have enough time to watch ${show} and left with ${diff} minutes free time.`)
  }
  else {
      console.log(`You don't have enough time to watch ${show}, you need ${diff} more minutes.`)
  }
}

lunch(["Teen Wolf",
"48",
"60"])
