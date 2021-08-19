const fs = require('fs')
const path = require('path')
const {readDir, readFile, rename} = require('./helpers/async.helper')
const girlz = path.join(__dirname, 'girlz')
const boyz = path.join(__dirname, 'boyz')


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