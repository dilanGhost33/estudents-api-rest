//Areglo con students

const { Console, debug } = require("console");

const students = [
    {
      id: 1,
      name: 'Dilan Ramirez',
      subject: 'Requerimientos'
    },
    {
      id: 2,
      name: 'Juan Cruz',
      subject: 'Calulo II'
    },
    {
      id: 3,
      name: 'Mario Ruiz',
      subject: 'Diseño de Software'
    },
    {
        id: 4,
        name: 'Ana Pozo',
        subject: 'Algebra Lineal'
      }
  ];
 
 
//Respuestas Web
  const getstudents = async (req,res)=>{
    const response = await getstudentsFromArray()
    res.json(response)
}

const getstudentsByID =async (req,res)=>{
    const ID=req.params.ID
    const response = await getstudentFromArray(ID)
    res.json(response)
}

const postCreatestudent = async (req,res)=>{
    const {est_name,est_subject} = req.body
    await createstudentInArray(est_name,est_subject)
    res.json({
        message:'student creada correctamente',
    })
}

const putUpdatestudent = async (req,res)=>{
    const {est_id,est_name,est_subject} = req.body
    await updatestudentFromArray(est_id,est_name,est_subject)
    res.json({
        message:'student actualizada correctamente',
    })
}

const deletestudent = async (req,res)=>{
    const est_data=req.params.ID
    await deletestudentFromArray(est_data)
    res.json({
        message:'student eliminada correctamente',
    })
}
//Funciones simples
  // CREATE
  function createstudentInArray(name, subject) {
    const id = students[students.length - 1].id + 1;
    const student = { id, name, subject };
    students.push(student);
    return student;
  }
  
  // READ
  function getstudentFromArray(id) {
    return students.find(student => student.id === parseInt(id));
  }
  
  function getstudentsFromArray() {
    return students;
  }
  
  // UPDATE
  function updatestudentFromArray(id, name, subject) {
    const student = students.find(student => student.id === parseInt(id));
    if (!student) return;
    student.name = name;
    student.subject = subject;
    return student;
  }
  
  // DELETE
  function deletestudentFromArray(id) {
    const index = students.findIndex(student => student.id === parseInt(id));
    if (index === -1) return;
    const student = students[index];
    students.splice(index, 1);
    return student;
  }



  
module.exports={
    getstudents,
    getstudentsByID,
    postCreatestudent,
    putUpdatestudent,
    deletestudent
}

