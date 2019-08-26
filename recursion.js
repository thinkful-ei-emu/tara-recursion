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

function mazeSolver(maze) {

  const length = maze[0].length;
  const height = maze.length;
  let x = 0;
  let y = 0;
  let path = [[0, 0]];
  let directions = '';

  let results = [];

  function directionPicker(maze, x, y, path, directions) {
    console.log(path);
    console.log(x, y);
    console.log(maze[0][0]);
    console.log(results);
    if ((x === (length - 1)) && (y === (height - 1))) {
      results.push(directions);
      return;
    } else {
      if (maze[y + 1][x] !== '*' && (y + 1 < height)) {
        let option = [x, y + 1];
        if (!(path.filter(point => point == option))) {
          let newDirections = directions + 'D';
          let newPath = [...path];
          newPath.push(option);
          y++;
          directionPicker(maze, x, y, newPath, newDirections);
        }
      } 
      if (maze[y][x + 1] !== '*' && (x + 1 < length)) {
        let option = [x, y + 1];
        if (!(path.filter(point => point == option))) {
          let newDirections = directions + 'R';
          let newPath = [...path];
          newPath.push(option);
          x++;
          directionPicker(maze, x, y, newPath, newDirections);
        }
      } 
      if (maze[y - 1][x] !== '*' && ((y - 1) >= 0)) {
        let option = [x, y - 1];
        if (!(path.filter(point => point == option))) {
          let newDirections = directions + 'U';
          let newPath = [...path];
          newPath.push(option);
          y--;
          directionPicker(maze, x, y, newPath, newDirections);
        }
      } 
      if (maze[y][x - 1] !== '*' && ((x - 1) >=0)) {
        let option = [x, y - 1];
        if (!(path.filter(point => point == option))) {
          let newDirections = directions + 'R';
          let newPath = [...path];
          newPath.push(option);
          x--;
          directionPicker(maze, x, y, newPath, newDirections);
        }
      } 
      
    }
  }
  directionPicker(maze, x, y, path, directions);
  return results;
}

console.log(
  mazeSolver([
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
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
