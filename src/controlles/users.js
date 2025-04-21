import fs from "fs"
import path from "path"

const students = JSON.parse(fs.readFileSync(path.join(process.cwd(), "database/users.json")))


const GET = (req, res) => {
    console.log(students)
}



const GET_ID = (req, res) => {}



const POST = (req, res) => {}



const PUT = (req, res) => {}



const DELETE = (req, res) => {}


export default {
    GET,
    GET_ID,
    POST,
    PUT,
    DELETE
}