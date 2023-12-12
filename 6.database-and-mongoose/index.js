const express = require('express')
const Connection = require('./config/database')
const app = express()
// app.listen(7200, async()=>
// {
//     try{
//         await Connection
//         console.log('Connected')
//     }
//     catch(err)
//     {
//         console.log(err)
//         console.log('Not Connected')
//     }
// })