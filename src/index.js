const express = require("express")
const postRoutes= require('./routes/post.routes.js')
const app =express()
app.use(express.json())
const PORT =3000
app.get('/',(req,res)=>{
    res.status(200).send("Welconme to the blogify api")
})
app.use('/api/v1/posts',postRoutes)
