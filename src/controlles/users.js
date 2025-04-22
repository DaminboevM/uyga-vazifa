import fs from "fs"
import path from "path"


// bu yerda students da databasadega hamma malumotlar bor !?

const students = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "database/users.json"), "utf-8")
);



// Abrorbe 
const GET = (req, res) => {
    res.status(200).json(students)
}



// Aborbek
const GET_ID = (req, res) => {
    const { id } = req.params;
    const student = students.find(s => s.id === parseInt(id)); 
    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ msg: "Talaba topilmadi" }); 
    }
}




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