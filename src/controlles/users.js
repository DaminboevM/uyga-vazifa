import fs from "fs"
import path from "path"

const students = JSON.parse(fs.readFileSync(path.join(process.cwd(), "database/users.json")))



// Abrorbe 
const GET = (req, res) => {
    console.log(students)
}



// Aborbek
const GET_ID = (req, res) => {}



// Abdulloh
const POST = (req, res) => {}



// Muhammadrizo
const PUT = (req, res) => {}



// Ozodek
const DELETE = (req, res) => {}


export default {
    GET,
    GET_ID,
    POST,
    PUT,
    DELETE
}