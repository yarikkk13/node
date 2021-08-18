// const userBuilder = require('./helpers/user.builder')

// const im = userBuilder('vas', 23, 'male')
// im.greeting()
// console.log(im)

const fs = require('fs')
const path = require('path')
const {readDir, readFile, rename} = require('./helpers/async.helper')
const girlz = path.join(__dirname, 'girlz')
const boyz = path.join(__dirname, 'boyz')


//this chunk of code do not uncomment if users exists
// // cycle for creating boys
// for (let num = 0; num < 10; num++) {
//     const filePath = path.join(boyz, `max${num}.json`);
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
//     const filePath = path.join(girlz, `karina${num}.json`);
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
