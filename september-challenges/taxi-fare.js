function taxiFare (distances, baseFare){
// Multiply each distance by 10 and sum to calculate milelage fare
let milelageFare = distances.reduce((acc, num) => acc + (num * 10), 0);
// Add base fare to milelage fare to calculate total fare
let totalFare = baseFare + milelageFare;
return totalFare;
}

module.exports = { taxiFare };