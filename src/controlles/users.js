import fs from "fs"
import path from "path"


// bu yerda students da databasadega hamma malumotlar bor !?
const students = JSON.parse(fs.readFileSync(path.join(process.cwd(), "database/users.json"), "utf-8"));


// Abrorbek akani github da muammo bolgani uchun kodni yozib menga telegramdan tashlab berdilar men qoship qoydim 

// Abrorbe 
const GET = (req, res) => {
    res.status(200).json(students);
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
const POST = (req, res) => {
    const { firstName, lastName, course, faculty } = req.body;

    let baza = students

    if (!firstName || !lastName || !course || !faculty) {
        return res.status(400).send("Barcha maydonlar to'ldirilishi kerak");
    }

    const userExists = students.find(user =>
        user.firstName === firstName && user.lastName === lastName
    );

    if (userExists) {
        return res.status(400).send("Bu foydalanuvchi allaqachon mavjud");
    }

    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        course,
        faculty
    };

    baza.push(newUser);

    baza.push(newUser);
    fs.writeFileSync(path.join(process.cwd(), "database/users.json"), JSON.stringify(baza, null, 4))
        
    res.status(201).send("Foydalanuvchi muvaffaqiyatli royxatdan otdi");
}




// Muhammadrizo
const PUT = (req, res) => {
    try {
        const {id, firstName, lastName, course, faculty} = req.body

        if(!id) throw Error("Invalid id")
        
        if(firstName && !isNaN(+firstName)) throw Error("Invalid firstName")
        
        if(lastName && !isNaN(+lastName)) throw Error("Invalid lastname")
        
        if(course && (course < 1 || course > 4)) throw Error("Invalid course")

        let n = 0
        
        const newS = students.map(student => {
            if(student.id == id){
                n = 1
                return {
                    ...student,
                    firstName : firstName || student.firstName,
                    lastName : lastName || student.lastName,
                    course : course || student.course,
                    faculty : faculty || student.faculty
                }
            }
            return student
        })

        if(!n) throw Error("Student not found")

        fs.writeFileSync(path.join(process.cwd(), "database/users.json"), JSON.stringify(newS, null, 4))

        res.status(200).send({
            status : 200,
            message : "student update"
        })
        
        
    } catch (error) {
        res.status(404).send({
            status: 404,
            message: error.message
        })
    }
}



// Ozodek
const DELETE = (req, res) => {}


export default {
    GET,
    GET_ID,
    POST,
    PUT,
    DELETE
}