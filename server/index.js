import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import EmployeeModel from './models/Merndata.js'

const app = express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/learnmern")
app.listen(3001, () => {
    console.log("working")
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})
app.post('/login', (req, res) => {
    const { email, password } = req.body
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("Password Incorrect")
                }
            }
            else {
                res.json("No record")
            }
        })
})