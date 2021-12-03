
import { data } from "./data";
const numbers = data.split(/\r?\n/).map(m => parseInt(m));
let amount = 0;
for(let i = 1; i < numbers.length; i++) {
  if((numbers[i] > numbers[i-1]))
    amount++;
}
console.log('Amount: '+ amount);