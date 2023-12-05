const db = require("../model");

// create main model

const Student = db.students;
const Mark = db.marks;

//main Work

// 1. Create Student

const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(200).send(student);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    return res.status(200).send({ students });
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getstudent = async (req, res) => {
  try {
    let id = req.params.id;
    let student = await Student.findOne({ where: { id: id } });
    res.status(200).send(student);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const updatestudent = async (req, res) => {
  try {
    let id = req.params.id;
    let student = await Student.update(req.body, { where: { id: id } });

    return res.status(200).json("updated successfully!---");
  } catch (error) {
    return res.status(400).send(error);
  }
};

const deletestudent = async (req, res) => {
  let id = req.params.id;
  await Student.destroy({ where: { id: id } });
  res.status(200).send("Student is deleted !");
};

const getstudentmarks = async (req, res) => {
  let id = req.params.id;
  let student = await Student.findOne({
    where: { id: id },
    attributes:{ exclude:["createdAt","updatedAt"]},
    include:{
      model:Mark,
      as:'Marks',
      attributes:["subject_name", "marks","student_id"]
    }
  });
  res.status(200).json({
    student
  });

};
module.exports = {
  addStudent,
  getStudents,
  getstudent,
  updatestudent,
  deletestudent,
  getstudentmarks,
};
