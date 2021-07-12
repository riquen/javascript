const { ips, cpfs } = require('./base');

console.log(cpfs);
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

const regex = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//     const ip = `${i}.${i}.${i}.${i}`;
//     console.log(ip, ip.match(regex));
// }

console.log(ips);
console.log(ips.match(regex));