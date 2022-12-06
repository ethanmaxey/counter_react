//  MERN = mongo + express + react + node

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/travelcounter')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password,
        })
        res.json({ status: 'ok'})
    } catch(err) {
        console.log(err)
        res.json({ status: 'error', error: "Duplicate Username"})
    }
})

app.post('/api/login', async (req, res) => {

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (user) {
        return res.json({ status: 'ok', user: true})
    } else {
        return res.json({ status: 'error', user: false})
    }

    res.json({ status: 'ok' })

})

app.listen(1337, () => {
    console.log('Server started on 1337')
})