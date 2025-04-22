import { Router } from "express";
import Students from "../controlles/users.js"

const router = Router()

router.get("/api/students", Students.GET)



router.get("/api/students/:id", Students.GET_ID)



router.post("/api/students", Students.GET_ID)



router.put("/api/students", Students.PUT)



router.delete("/api/students/:id", Students.GET_ID)



export default router