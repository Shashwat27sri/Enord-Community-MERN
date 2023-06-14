const express = require('express')
const cors = require('express')
const path= require('path')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 80
const db = require('./db');
const router = require('./routers')

//db connection

db.connect(); 


//middleware
app.use(bodyParser.json({ limit : "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))

app.use(express.json())

//header
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*")
  res.header('Access-Control-Allow-Headers', "*")
  next()  
})

//api
app.use('/api',router)



//static resources

app.use('/upload', express.static(path.join(__dirname, '/../uploads')))
app.use(express.static(path.join(__dirname, '/../frontend/build')))

app.get('*', (req, res) => {
  try{
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`))
  
  }catch{
    res.send("Oops! error occured")

  }
  
})

//cors
app.use(cors())

//server listen
app.listen(PORT, () => {
  console.log(`Enord Commmunity is running on PORT No- ${PORT}`)
})