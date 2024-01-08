const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const salutation = require('./salutationMid')
const userApi = require('./api/user')
const productApi = require('./api/product')
productApi(app, 'with param!')

app.post('/user', userApi.save)
app.get('/user', userApi.getUser)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(salutation('Adriano'))

app.use('/opa', (req, res, next) => {
    console.log('Before')
    next()
})

app.get('/clients/report', (req, res) => {
    res.send(`Client report: complete = ${req.query.complete} year = ${req.query.year}`)
})

app.post('/body', (req, res) => {
    // let body = ''
    // req.on('data', function(part) {
    //     body += part
    // })

    // req.on('end', function() {
    //     res.send(body)
    // })

    res.send(JSON.stringify(req.body))
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Client ${req.params.id} selected!`)
})

app.get('/opa', (req, res, next) => {
    console.log('During')
    res.json({
        data: [
            { id: 7, name: 'Lara', position: 1 },
            { id: 34, name: 'Monica', position: 2 },
            { id: 73, name: 'Bil', position: 3 }
        ],
        count: 30,
        skip: 0,
        limit: 3,
        status: 200,
    })

    next()

    // res.json ({
    //     name: 'iPad 32gb',
    //     price: 1999.99,
    //     discount: 0.20
    // })

    // res.send("Im <b>god</b>!")
})

app.use('/opa', (req, res) => {
    console.log('After')
})

app.listen(3000, () => {
    console.log('Executing backend')
})