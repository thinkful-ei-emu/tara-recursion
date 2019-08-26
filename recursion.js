function countSheep(num) {
  if (num === 0) {
    return console.log('All sheep jumped over the fence.');
  }
  console.log(`${num}: Another sheep jumps over the fence.`);
  return countSheep(num - 1);
}

function powerCalculator(base, power) {
  if (power < 0) {
    return 'Exponent should be >= 0.';
  }

  if (power === 0) {
    return 1;
  }

  return base * powerCalculator(base, power - 1);
}

function reverseString(str) {
  if (str.length === 0) {
    return '';
  }

  return str.slice(-1) + reverseString(str.slice(0, str.length - 1));
}

function nthTriangle(n) {
  if (n === 0) {
    return 0;
  }

  return n + nthTriangle(n - 1);
}

function stringSplitter(str, splitter) {
  if (str.length === 0) {
    return '';
  }
  if (str[0] === splitter) {
    return '' + stringSplitter(str.slice(1), splitter);
  }
  return str[0] + stringSplitter(str.slice(1), splitter);
}

function fibonacci(n, i = 0, j = 0) {
  if (i === 0) {
    console.log(1);
    j++;
    n--;
  }

  if (n === 0) {
    return;
  }
  console.log(i + j);

  let newNum = i + j;
  fibonacci(n - 1, j, newNum);
}

function factorial(num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

const mazeAll = function(labyrinth, position=0, row, col, direction='S',path){
  if(col<0 || row < 0){
      return;
  }
  if(col>=labyrinth[0].length || row>=labyrinth.length){
      return;
  }
 
  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e'){
      PrintPath(path, 1, position - 1);
      return;
  }
  if (labyrinth[row][col] === ' ') {
      // The current cell is free. Mark it as visited
      labyrinth[row][col] = 's';
      // Invoke recursion to explore all possible directions
      mazeAll(labyrinth,position,row, col - 1, 'L',path); // left
      mazeAll(labyrinth,position,row - 1, col, 'U',path); // up
      mazeAll(labyrinth,position,row, col + 1, 'R',path); // right
      mazeAll(labyrinth,position,row + 1, col, 'D',path); // down
      // Mark back the current cell as free
      labyrinth[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;

}

console.log(
  mazeSolver([
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
])
);

function anagram(word) {
  let results = [];
  function combinator(ang, rest) {
    if (!rest) {
      results.push(ang);
    }

    for (let i = 0; i < rest.length; i++) {
      console.log(i, ang, rest);
      newAng = ang + rest[i];
      combinator(newAng, rest.slice(0, i) + rest.slice(i + 1));
    }
  }
  combinator('', word);
  return results;
}

function binaryConverter(num) {
  if (num === 1) {
    return 1;
  }

  let digit = String(num % 2);

  let binary = String(binaryConverter(Math.trunc(num / 2))) + digit;

  return Number(binary);
}
