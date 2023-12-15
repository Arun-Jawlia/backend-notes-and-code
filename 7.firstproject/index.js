const express = require('express')
const Connection = require('./cofig/db')

const app = express()

app.get('/', (req,res)=>
{
    res.send('hello this is first project')
})

const PORT = 7200
app.listen(PORT, async()=>
{
    try {
        await Connection
        console.log('Connectd', PORT)
        
    } catch (error) {
      console.log(('Not Connected', error.message))  
    }
})