// const userBuilder = require('./helpers/user.builder')

// const im = userBuilder('vas', 23, 'male')
// im.greeting()
// console.log(im)

const fs = require('fs')
const path = require('path')
console.log(__dirname)

// //cycle for creating boys
// for (let num = 0; num < 10; num++) {
//     const filePath = path.join(__dirname, 'boyz', `${num}.json`);
//     if (num % 2 === 0) {
//         fs.writeFile(filePath, `{"name":"max${num}","gender":"female"}`, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('OK');
//         });
//     } else {
//         fs.writeFile(filePath, `{"name":"max${num}","gender":"male"}`, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('OK');
//         });
//     }
// }

// //cycle for creating girls
// for (let num = 10; num < 20; num++) {
//     const filePath = path.join(__dirname, 'girlz', `${num}.json`);
//     if (num % 2 === 0) {
//         fs.writeFile(filePath, `{"name":"karina${num}","gender":"male"}`, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('OK');
//         });
//     } else {
//         fs.writeFile(filePath, `{"name":"karina${num}","gender":"female"}`, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log('OK');
//         });
//     }
// }
