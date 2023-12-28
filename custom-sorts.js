function ageSort(users) {
 return users.sort((a,b) => a.age - b.age)
}

function oddEvenSort(arr) {
 return arr.sort((a,b) => {
  if(a%2 ===0 && b%2 ===1) return 1;
  if(a%2 === 1 && b%2 ===0) return -1;
  return a-b;
 })
}

function validAnagrams(s, t) {
  return ( s.split("").sort().join("") === t.split("").sort().join(""))
}

function reverseBaseSort(arr) {
  // Your code here
  return arr.sort((a,b) => {
    if(Math.floor(Math.log10(a)+1) > Math.floor(Math.log10(b)+1)) return -1;
    if (Math.floor(Math.log10(a) + 1) < Math.floor(Math.log10(b) + 1)) return 1;
    return a-b;
  })
}

function frequencySort(arr) {
  let mapArr = new Map();
  for(const num of arr){
    mapArr.set(num, (mapArr.get(num) || 0) + 1);
  }
  return arr.sort((a,b) => {
   let freqA = mapArr.get(a);
   let freqB = mapArr.get(b);
   if(freqA !== freqB){
    return freqA - freqB;
   }

   return b-a;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];