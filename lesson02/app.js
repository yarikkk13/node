const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const {PORT} = require('./configs/config');
const users = require('./database/users');

const app = express();
const staticPath = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(staticPath));
app.set('view engine', '.hbs');
app.engine('.hbs', handlebars({defaultLayout: false}));
app.set('views', staticPath);


app.get('/ping', (req, res) => {
    // console.log(req);
    // res.send()
    // res.end()
    // res.status(404).json({name:'dima'})
    // res.write()

    res.send('ping')
})

app.post('/auth', (req, res) => {
    const {name, password} = req.body
    const user = users.find(user => user.name === name)

    if (!user) {
        res.status(404).end('User not found');
        return;
    }
    res.json(user)

})

// app.get('/users', (req, res) => {
//     res.json(users)
// })

app.get('/users/:user_id', (req, res) => {
    const {user_id} = req.params
    res.json(users[user_id])
})

// render endpoints
app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/users', (req, res) => {
    res.render('users',)

})

app.listen(PORT, () => {
    console.log('app listen port', PORT)
})