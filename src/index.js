const express = require("express")
const postRoutes= require('./routes/post.routes.js')
const app =express()


app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the blogify api")
})

app.use('/api/v1/posts',postRoutes)

const PORT =5000
app.listen(PORT,()=>{
    console.log(`serve is running at https://localhost:${PORT} `)
})