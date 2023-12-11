const express = require('express')
const app = express()
app.use(express.json())



//  It is a middleware 
// Middleware is always on the top the function which have to check

const timeLogger = (req,res,next)=>
{
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    console.log(startTime-endTime)
}


// const watchman= (req,res,next)=>
// {
//     if(req.url==='/note')
//     {
//         next()
//     }else{
//         res.send('Please come later')
//     }
// }
// app.use(watchman())



app.get('/',(req,res)=>
{
    console.log('home')
    res.send('Welcome to Express and its ecostytem and Middleware')
})


app.get('/note', (req,res)=>
{
    console.log('notepage')
    res.send("Welcome to note page")

})
app.get('/contact', (req,res)=>
{
    console.log('contact')
    res.send("Welcome to contact page")

})


const PORT = 8080
app.listen(PORT,()=>
{
    console.log("listening on port", PORT)
})