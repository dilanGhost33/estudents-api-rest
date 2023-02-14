const { Router } = require("express");
const {  getstudents,
    getstudentsByID,
    postCreatestudent,
    putUpdatestudent,
    deletestudent} = require("../controller/estudiantes.controller");

const router= Router()
router.get("/students",getstudents)
router.get("/students/:ID", getstudentsByID)
router.post("/students/create/",postCreatestudent)
router.put("/students/update/", putUpdatestudent)
router.delete("/students/delete/:ID", deletestudent)

module.exports=router