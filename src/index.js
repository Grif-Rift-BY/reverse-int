module.exports = function reverse (number) {
  let reverseNumber = +Math.abs(number).toString().split('').reverse().join('');
  return reverseNumber;
}
