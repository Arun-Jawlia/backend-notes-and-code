const express = require('express')
const Connection = require('./config/db')
const UserRouter = require('./routes/User.route')

const app = express()
app.use(express.json())


app.get('/', (req,res)=>
{
    res.send("Welcome to Authentication and Authorization")
})

app.use('/auth', UserRouter )


const PORT = 8080
app.listen(PORT, async()=>
{
    try {
        await Connection
        console.log("Connected...", PORT)
        
    } catch (error) {
        console.log(error.message)
    }
})