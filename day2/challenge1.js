// Day 2 - #1
import { data } from "./data";
const dataArray = data.split(/\r?\n/).map( m => m.split(' '));
let dataMap = new Map();
for(let i =0; i<dataArray.length; i++) {
  const key = dataArray[i][0];
  const val = parseInt(dataArray[i][1]);
  
  if(dataMap.has(key))
    dataMap.set(key, dataMap.get(key) + val);
  else
    dataMap.set(key, val);
}
const result = dataMap.get('forward') * (dataMap.get('down') - dataMap.get('up'));
console.log(result);