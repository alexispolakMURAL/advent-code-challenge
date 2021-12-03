// Day 3 - #1
import { data } from "./data";
const dataArray = data.split(/\r?\n/).map(m => m.split(''));

let gammaRate = '';        // most common per column
let epsilonRate = '';      // leat common per column

const dataArray = data.split(/\r?\n/).map(m => m.split(''));

for (let x = 0; x < dataArray[0].length; x++) {
    let counter = 0;
    for (let y = 0; y < dataArray.length; y++) {
        counter += dataArray[y][x] > 0 ? 1 : -1;
    }
    gammaRate += counter > 0 ? '1' : '0';
    epsilonRate += counter > 0 ? '0' : '1';
}

const powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
console.log(powerConsumption);