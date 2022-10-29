const arr = [];
const arr5 = new Array(10).fill(0);
arr5[4] = 4;
arr5[arr5.length-1] = 10;
console.log(arr5.length, arr5[0], arr5[(arr5.length-1)/5], arr5[arr5.length-1]);

const arrMixed = [
    12,
    "Hello",
    true,
    null,
    {
        name: "Deep",
        age: 22
    }
];

const itCompanies = [
    "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
];

console.log(itCompanies);
console.log(itCompanies.length, itCompanies[0], itCompanies[(itCompanies.length-1)/5], itCompanies[itCompanies.length-1]);

itCompanies.forEach(company => console.log(company.toUpperCase()));

console.log(`${itCompanies.join()} are big IT companies`);

console.log(itCompanies.includes("Facebook") ? itCompanies[itCompanies.indexOf("Facebook")] : "company not found");

let newArr = [];
for (let index = 0; index < itCompanies.length; index++) {
    let count = 0;
    let currItem = itCompanies[index].split('');
    for(let i = 0; i< currItem.length; i++){
        if(currItem[i].toLowerCase() == 'o') count++;
    }
    if(count > 1) newArr.push(currItem.join(''));
    count = 0;
}

console.log(newArr);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0,3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice((itCompanies.length-1)/5));
console.log(itCompanies.splice(0,1));
console.log(itCompanies.splice((itCompanies.length-1)/5),1);
console.log(itCompanies.splice(-1,1));
console.log(itCompanies.splice(0));