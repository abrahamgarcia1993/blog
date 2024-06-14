import express from "express"
import cors from "cors"
import { addPost, getPost } from "./queries"

const app= express()
const PORT= 3000
app.use(express.json())
app.use(cors())
app.get("/post", async (_req, res)=>{
    try {
        const resultado=await getPost()
        res.send(resultado)
        
    } catch (error) {
        res.status(500).json({message:" se ha producido el siguiente error:", error})
    }

})

app.post("/post", async (req, res)=>{
    try {
        const newClient=req.body
        const addNewPost= await addPost(newClient)
        res.status(200).json({message:"cliente añadido"}, addNewPost)
        
    } catch (error) {
        res.status(500).json({message:"se ha producido el siguiente error:", error})
    }

})


app.listen(PORT, async ()=>{
    console.log("el servidor esta corriendo en el puerto",PORT)
})
