
const fs = require('fs');


// fs.readFile("./test.txt", {encoding: "utf-8"}, (err, data)=>
// {
//     if(err)
//     {
//       console.log('Error in reading file')
//       console.log(err)
//     }
//     console.log(data)

// } )

// const res = fs.readFileSync("./test.txt", "utf-8")
// console.log(res)


// fs.writeFile('./write.txt', "Hello this is wrting file in write.txt", (err, data)=>{
//     if(err)
//     {
//         console.log()
//     }
//     console.log("Check file write.txt")
// })

fs.appendFile('./write.txt', " \n  This is from appendFile  \n" , {encoding:'utf-8'}, (err)=>
{
    if(err)
    {
        console.log('Error in appendFile')
    }
    
    console.log('Check the file write.txt')
})


// fs.writeFileSync('./write.txt', "Hello this is from write file sync")