const db = require("../model/index");
// const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");

//Create main model

const School = db.school;
const Student = db.students;

// main  work

// 1 .create school

const SignUpSchool = async (req, res) => {
  //Sign UP

  let info = {
    schoolname: req.body.schoolname,
    password: req.body.password,
    email: req.body.email,
  };

  const school = await School.create(info);
  const hash = bcrypt.hashSync(req.body.password, 10);
  school.password = hash;
  const doc = await school.save();

  res.status(200).send(school);
};

const loginUser = async (req, res) => {
  //Login

  try {
    const doc = await School.findOne({ where: { email: req.body.email } });

    const isAuth = bcrypt.compareSync(req.body.password, doc.password);

    if (isAuth) {
      const token = jwt.sign({ email: req.body.email,id:doc.id }, process.env.SECRET, {
        expiresIn: "24h",
      });
      res.status(200).json({
        Data: doc,
        token,
      });
     
    } else {
      res.sendStatus(401).send(err);
    }
  } catch (err) {
    console.log("--", err);
    res.status(401).send(err);
  }
};

// 2. get all school

const getAllSchool = async (req, res) => {
  let schools = await School.findAll({
    attributes: ["schoolname", "email"],
  });
  res.status(200).send(schools);
};

// 3. get all school

const getSchool = async (req, res) => {
  let id = req.params.id;
  let school = await School.findOne({ where: { id: id } });
  res.status(200).send(school);
};

// 4. Update a school

const updateSchool = async (req, res) => {
  let id = req.params.id;
  let school = await School.update(req.body, { where: { id: id } });
  res.status(200).send(school);
};

// 5. Delete school

const deleteSchool = async (req, res) => {
  let id = req.params.id;
  await School.destroy({ where: { id: id } });
  res.status(200).send("school is deleted !");
};
const getstudents = async (req, res) => {
  let id = req.params.id;
  let student = await School.findOne({
    where: { id: id },
    attributes:{ exclude:["createdAt","updatedAt","password"]},
    include:{
      model:Student,
      as:'Students',
      attributes:{exclude:["createdAt","updatedAt"]}
    }
  });
  res.status(200).json({
    student
  });

};


module.exports = {
  SignUpSchool,
  loginUser,
  getAllSchool,
  getSchool,
  updateSchool,
  deleteSchool,
  getstudents
};
