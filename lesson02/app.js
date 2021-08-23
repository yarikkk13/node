const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');


const {PORT} = require('./configs/config');
const {BAD_REQUEST, UNAUTH} = require('./configs/statusCodes.enum');
const {readDir, readFile, writeFile} = require('./helper/async')


const app = express();
const staticPath = path.join(__dirname, 'static');
const usersPath = path.join(__dirname, 'database', 'users.json');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(staticPath));

app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({defaultLayout: false}));
app.set('views', staticPath);


app.post('/auth', (req, res) => {
    const {name, password} = req.body
    const user = users.find(user => user.name === name)

    if (!user) {
        res.status(404).end('User not found');
        return;
    }
    res.json(user)

})

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params
    res.json(users[user_id])
})

// render endpoints
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', async (req, res) => {
    const getUsers = async () => {
        const getUser = await readFile(usersPath);
        return JSON.parse(getUser);
    }
    users = await getUsers()
    return res.render('users', {users});
})

// application
app.listen(PORT, () => {
    console.log('app listen port', PORT)
})