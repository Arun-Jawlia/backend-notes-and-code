const express = require('express');
const fs = require('fs');

const app = express(); // Invoke express 
app.use(express.json())


app.get('/', (req,res)=>
{
    res.send('Welcome to my first express server')
})

app.get('/student',(req,res)=>
{
    const data = fs.readFileSync('./db.json', 'utf-8');
    const parsed_data = JSON.parse(data)
    const student = parsed_data.student
    console.log(data)
    res.send(student)
})


app.listen(8080, ()=> 
{
    console.log("Listing... ", + 8080)
})