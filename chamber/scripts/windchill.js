let temperature = 43;
// mph
let windSpeed = 10;

windSpeed = windSpeed ** 0.16;

let result = windSpeed * temperature * 0.4275;
let temp = windSpeed * 35.75;
let temp1 = temperature * 0.6125;

result = (35.74 + temp1) - (temp) + (result);
console.log(result);

// 35.74 + 0.6125 * temperature - 35.75 * windSpeed ^ 0.16 + 0.4275 * temperature * windSpeed ^ 0.16