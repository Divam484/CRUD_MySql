const db = require("../model");

// create main model

const Mark = db.marks;
const Student = db.students;


//main Work

// 1. Create Student

const addmark = async (req, res) => {
    try {
      const mark = await Mark.create(req.body);
  
      return res.status(200).send(mark);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  const getmarks = async (req, res) => {
    try {
      const marks = await Mark.findAll();
      return res.status(200).send({ marks });
    } catch (error) {
      return res.status(400).send(error);
    }
  };  


  const getmark = async (req, res) => {
    try {
      let id = req.params.id;
      let mark = await Mark.findOne({ where: { id: id } });
      res.status(200).send(mark);
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  const updatemark = async (req, res) => {
    try {
      let id = req.params.id;
      let student = await Mark.update(req.body,{ where: { id: id } });
     
      return res.status(200).json('updated successfully!---');
    } catch (error) {
      return res.status(400).send(error);
    }
  };

  const deletemarks = async (req, res) => {
    let id = req.params.id;
    await Mark.destroy({ where: { id: id } });
    res.status(200).send('Student is deleted !');
  };

  const getstudent = async (req, res) => {
    let id = req.params.id;
    let mark = await Mark.findOne({
      where: { id: id },
      attributes:{ exclude:["createdAt","updatedAt"]},
      include:{
        model:Student,
        as:'Student',
        attributes:["name","standard","id"]
      }
    });
    res.status(200).json({
      mark
    });
  
  };
module.exports={
    addmark,
    getmarks,
    getmark,
    updatemark,
    deletemarks,
    getstudent
}  