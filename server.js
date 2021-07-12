import express from 'express'
import * as studentsDb from './data/students-db.js'

//create express app

const app = express()

//configure the app (app.set)
app.set('view engine', 'ejs')

// mount middleware (app.use)
app.use(express.static('views'))

//mount routes
app.get('/', (req, res)=> res.send('<h1>Hello, Friends</h1>')) // req before res

app.get('/home', (req, res) => res.render('home'))

app.get('/students', (req,res)=>{
    studentsDb.find({}, (error, students)=>{
        res.render('students/index', {
            students: students,
            error: error
        })
    })
})


//tell the app to listen on port 3000
app.listen(3001, ()=> console.log('Listening on Port 3001'))