// Day 2 - #2
const dataArray = data.split(/\r?\n/).map( m => m.split(' '));
let aim = 0;
let horizontalPos = 0;
let depth = 0;
for(let i =0; i<dataArray.length; i++) {
  const key = dataArray[i][0];
  const val = parseInt(dataArray[i][1]);

  switch(key) {
    case 'up':
      aim -= val;
      break;
    case 'down':
      aim += val;
      break;
    case 'forward':
      horizontalPos += val;
      depth += aim * val;
      break;
  }
  
}
const result = horizontalPos * depth;
console.log(result);