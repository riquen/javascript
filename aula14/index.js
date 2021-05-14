let umaString = "Um \texto";
console.log(umaString);
umaString = "Um texto";
console.log(umaString[4]);
console.log(umaString.charAt(6));
console.log(umaString.concat(' enorme.'));
console.log(umaString + ' enorme.');
console.log(`${umaString} enorme.`);
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('o'));
console.log(umaString.lastIndexOf('m', 3));
console.log(umaString.replace('Um', 'O'));
console.log(umaString.replace(/O/, 'Um'));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.search(/[a-z]/));
console.log(umaString.search(/x/));
console.log(umaString.length);
console.log(umaString.slice(2, 5));
console.log(umaString.slice(-5));
console.log(umaString.split('t', 1));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());