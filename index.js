const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((previous, current) => previous + current)


// Create a new variable called `totalBatteries`, which holds the sum of all of
//   the battery amounts in the `batteryBatches` array. (Note that the
//   `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
//   you should use `reduce()` for this!