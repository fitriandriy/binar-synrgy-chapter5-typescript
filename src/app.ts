import express from 'express'

const app = express()

const Router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(Router)

app.listen(9000, () => {console.log('server running')})