const fs = require('fs')
const path = require('path')
const {readDir, readFile, rename} = require('./helpers/async.helper')
const girlz = path.join(__dirname, 'girlz')
const boyz = path.join(__dirname, 'boyz')


// // uncomment this chunk of code if you want create users
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


async function movingUsers(thisPath, newPath, gender) {
    try {
        //get the array of files in this directory
        const data = await readDir(thisPath);
        //get the one file from array
        data.forEach(async file => {
            //reading info in this file
            const user = JSON.parse(await readFile(path.join(thisPath, file)));
            //comparing data's gender in file and gender
            if (user.gender === gender) {
                await rename((path.join(thisPath, file)), path.join(newPath, file));
            }
        })
    } catch (err) {
        console.warn('Something went wrong', err);
    }
}

movingUsers(girlz, boyz, "male")
movingUsers(boyz, girlz, "female")