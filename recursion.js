function countSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence.');
  }
  console.log(`${num}: Another sheep jumps over the fence.`);
  return countSheep(num-1);
}

countSheep(4);

function powerCalculator(base, power) {
  if (power < 0) {
    return 'Exponent should be >= 0.';
  }

  if (power === 0) {
    return base;
  }

  base = base * base;
}

function reverseString(str) {
  if (str.length === 0) { 
    re
  }
}