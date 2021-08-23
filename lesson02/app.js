const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');


const {PORT} = require('./configs/config');
const {BAD_REQUEST, CREATE, NOT_FOUND, UNAUTH} = require('./configs/statusCodes.enum');
const {readFile, writeFile} = require('./helper/async')


const app = express();
const staticPath = path.join(__dirname, 'static');
const usersPath = path.join(__dirname, 'database', 'users.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(staticPath));

app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({defaultLayout: false}));
app.set('views', staticPath);


//registering
app.post('/registering', async (req, res) => {
    const {name, email, password} = req.body;
    const getAllUsers = async () => {
        const getUser = await readFile(usersPath);
        return JSON.parse(getUser);
    }
    const getUserData = async (email) => {
        const user = await getAllUsers();
        return await user.find(user => user.email === email);
    }
    if (!user) {
        await addUsers({name, email, pass, age, id: addId});
        return res.status(CREATE).redirect('/login');
    }
    const user = await getUserData(email);
    return res.redirect('/login');
});
// render endpoints
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/registering', (req, res) => {
    return res.render('register');
});

app.get('/users', async (req, res) => {
    const getAllUsers = async () => {
        const getUser = await readFile(usersPath);
        return JSON.parse(getUser);
    }
    users = await getAllUsers()
    return res.render('users', {users});
})

// application
app.listen(PORT, () => {
    console.log('app listen port', PORT)
})