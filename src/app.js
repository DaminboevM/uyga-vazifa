import express from "express"
import students from "./router/users.js"
const PORT = 5500




const app = express()
app.use(express.json())
app.use(students)
app.listen(PORT, () => console.log("Server is runing ... "))