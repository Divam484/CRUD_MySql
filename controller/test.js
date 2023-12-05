const db = require("../model");
const { Op } = require("sequelize");
const { Sequelize } = require("sequelize");
// create main model

const Mark = db.marks;
const Student = db.students;
const School = db.school;

//main Work

//===================   1.Write a query to display all Student with a marks above 35.   ==============

// const getmarks = async (req, res) => {
//   let marks = await Mark.findAll({
//     where: { marks: { [Op.gte]: 35 } },
//     order: ['marks']
//   });
//   res.status(200).json({
//     result:marks.length,
//     marks,
//   });
// };

//===================   2. Write a SQL statement to display all subject name,id,studentname,standard,roll_no.and marks whose marks is above 35.   ==============

// const getmarks = async (req, res) => {
//     let marks = await Mark.findAll({
//       where: { marks: { [Op.gte]: 35 } },
//       attributes:["subject_name","marks","id"],
//       include:[{
//         model:Student,
//         as:'Student',
//         attributes:["name","standard","roll_no","id"]
//       }]
//     });
//     res.status(200).json({
//       result:marks.length,
//       marks,
//     });
//   };

//===================   3.Write a query to display all information of Student whose Student id is 7.   ==============

// const gettest = async (req, res) => {
//   let id = req.params.id;
//   let student = await Student.findOne({
//     where: { id: id },
//     include:[{
//         model:School,
//         as:'School',
//         attributes:{exclude:["createdAt","updatedAt"]}
//       },{
//         model:Mark,
//         as:'Marks',
//         attributes:["subject_name", "marks","student_id"]
//       }
//     ]
//   });
//   res.status(200).json({
//     result: student.length,
//     student,
//   });
// };

//===================   4.Write a query to sort out those Students with all information whose ID value is within any of 2, 5 and 8.   ==============

// const gettest = async (req, res) => {

//     let student = await Student.findAll({
//       where: { id:[2,5,8] },
//       include:[{
//           model:School,
//           as:'School',
//           attributes:{exclude:["createdAt","updatedAt"]}
//         },{
//           model:Mark,
//           as:'Marks',
//           attributes:["subject_name", "marks","student_id"]
//         }
//       ]
//     });
//     res.status(200).json({
//       result: student.length,
//       student,
//     });
//   };

//===================   5.write a query to sort out those Student with all information whose id value is not in range 2,5 and 8 and whose Standar is equal to 11.   ==============

// const gettest = async (req, res) => {
//   let student = await Student.findAll({
//     where: { id: { [Op.ne]: [2, 5, 8] },
//             standard:{ [Op.eq]:11}
//  },
//     include: [
//       {
//         model: School,
//         as: "School",
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//       },
//       {
//         model: Mark,
//         as: "Marks",
//         attributes: ["subject_name", "marks", "student_id"],
//       },
//     ],
//   });
//   res.status(200).json({
//     result: student.length,
//     student,
//   });
// };

//===================   6.Write a SQL statement to find those Student with all information who gets the id within a range of 2 and 8.   ==============

// const gettest = async (req, res) => {
//     let student = await Student.findAll({
//       where: { id: { [Op.between]: [2,8] },
//    },
//       include: [
//         {
//           model: School,
//           as: "School",
//           attributes: { exclude: ["createdAt", "updatedAt"] },
//         },
//         {
//           model: Mark,
//           as: "Marks",
//           attributes: ["subject_name", "marks", "student_id"],
//         },
//       ],
//     });
//     res.status(200).json({
//       result: student.length,
//       student,
//     });
//   };

//==================== 7.Write query to generate report of Marks for student marks wise. ================

// Select Student.`name`,SUM(Mark.marks as total.marks) From Mark Join Student ON
// Mark.`Student_id`=Student.`id` Group by Mark.`Student_id`;

// const gettest = async (req, res) => {
//   let id = req.params.id;
//   let student = await Student.findOne({
//     where: { id: id },
//     raw:true,
//     attributes:["name","id",],
//     include: [
//       {
//         model: Mark,
//         attributes:[
//             [Sequelize.fn("sum", Sequelize.col("marks")), "total_marks"],
//             [Sequelize.fn("COUNT", Sequelize.col("subject_name")), "subjects"],
//             // [Sequelize.fn("ROWS", Sequelize.col("subject_name")), "subject_name"],
//             "id",
//           ],
//         as:'marks'
//       },
//     ],
//   });

//   res.status(200).json({
//     result: student.length,
//     student,
//   });
// };
// module.exports = {
//   gettest,
// };

//==================== 8.Write query to DISPLAY gender,Marks of Student gender wise. ================

// const gettest = async (req, res) => {

//   let marks = await Mark.findAll({
//     attributes: ['gender', [Sequelize.fn('SUM', Sequelize.col('marks')), 'total_marks']],
//     group: ["gender"],
//   });

//   res.status(200).json({
//     result: marks.length,
//     marks,
//   });
// };
// module.exports = {
//   gettest,
// };

//==================== 9.Write query to display marks of male student. ==================

// const gettest = async (req, res) => {

//     let marks = await Mark.findAll({
//         attributes: [
//             [Sequelize.fn('SUM', Sequelize.col('marks')), 'totalMarks'],
//             'gender',
//           ],
//           where: {
//             gender: 'male',
//           },
//           group: ['gender'],
//     });

//     res.status(200).json({
//       marks,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//==================== 10.Write query to display marks of female student standard wise. ==================

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     raw:true,
//     attributes: ["standard"],
//     include: [
//         {
//             model: Mark,
//             attributes:[[Sequelize.fn('SUM', Sequelize.col('marks')), 'totalMarks']],
//             required: true, // INNER JOIN
//           },
//         ],
//         where: {
//           standard:11
//         },
//         order: [['standard', 'ASC']],
//   });

//   res.status(200).json({
//     students,
//   });
// };
// module.exports = {
//   gettest,
// };

//====================  11. Write query to display marks of Student standard wise and gender wise.

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     raw:true,
//     attributes: ["standard"],
//     include: [
//         {
//             model: Mark,
//             attributes:[[Sequelize.fn('SUM', Sequelize.col('marks')), 'totalMarks']],
//             required: true, // INNER JOIN
//           },
//         ],
//         where: {
//           gender: 'male',
//           standard:12
//         },
//         order: [['standard', 'ASC']],
//   });

//   res.status(200).json({
//     students,
//   });
// };
// module.exports = {
//   gettest,
// };

//===================== 12.Write query to display lowest 5 marks.   ====================

// const gettest = async (req, res) => {
//     let marks = await Mark.findAll({
//         attributes: ['marks',,'subject_name'],
//         distinct: true,
//         raw:true,
//         include:[{
//                     model:Student,
//                     as:'Student',
//                     attributes:["name","standard","roll_no"]
//                   }],
//         order: [['marks', 'ASC']],
//         limit: 5,
//     });

//     res.status(200).json({
//       marks,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//===================== 13.Write query to display Hightest 5 marks.   ====================

//   const gettest = async (req, res) => {
//     let marks = await Mark.findAll({

//         attributes: ['marks','subject_name'],
//         distinct: true,
//         raw:true,
//         include:[{
//                     model:Student,
//                     as:'Student',
//                     attributes:["name","standard","roll_no"]
//                   }],
//         order: [['marks', 'DESC']],
//         limit: 5,
//     });

//     res.status(200).json({
//       marks,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//===================== 14.Write query to display marks between 35 and 50.   ====================

// const gettest = async (req, res) => {
//   let marks = await Mark.findAll({
//     attributes: ["marks", "subject_name"],
//     raw:true,
//     where: {
//       marks: {
//         [Op.between]: [35, 50],
//       },
//     },
//     include: [
//       {
//         model: Student,
//         as: "Student",
//         attributes: ["name", "standard", "roll_no"],
//       },
//     ],
//     order: [["marks"]],
//   });

//   res.status(200).json({
//     marks,
//   });
// };
// module.exports = {
//   gettest,
// };

//===================== 15.Write query to display Student whose age is above 18.   ====================

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     where: {
//         age: {[Op.gte] : 18},
//       },
//     attributes: {exclude:["createdAt","updatedAt"]},
//   });

//   res.status(200).json({
//     result:students.length,
//     students,
//   });
// };
// module.exports = {
//   gettest,
// };

//=================   16.Write a SQL statement to find those Student with all other information and name started with other than any latter within 'A' and 'L'.

// const gettest = async (req, res) => {
//     let students = await Student.findAll({
//         where: {
//             name: {
//               [Op.between]: ['A', 'L'],
//             },
//           },
//       attributes: {exclude:["createdAt","updatedAt"]},
//     });

//     res.status(200).json({
//       result:students.length,
//       students,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//================  17.Write query to use regex( Write a Query to find all the names starting with 'P'.)

// const gettest = async (req, res) => {
//     let students = await Student.findAll({
//         where: {
//             name: {
//               [Op.regexp]: '^P',
//             },
//           },
//       attributes: {exclude:["createdAt","updatedAt"]},
//     });

//     res.status(200).json({
//       result:students.length,
//       students,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//=================== 18.Write a Query to find all the names ending with 'e'. ========================

// const gettest = async (req, res) => {
//     let students = await Student.findAll({
//         where: {
//             name: {
//               [Op.regexp]: 'k$',
//             },
//           },
//       attributes: {exclude:["createdAt","updatedAt"]},
//     });

//     res.status(200).json({
//       result:students.length,
//       students,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//=================== 18.Write a Query to find all the names constain 'na'. ========================

// const gettest = async (req, res) => {
//     let students = await Student.findAll({
//         where: {
//             name: {
//               [Op.regexp]: 'na',
//             },
//           },
//       attributes: {exclude:["createdAt","updatedAt"]},
//     });

//     res.status(200).json({
//       result:students.length,
//       students,
//     });
//   };
//   module.exports = {
//     gettest,
//   };

//=================== 19.Wrire a Query to find all the names starting with a vowel and ending with 'k'. ========================

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     where: {
//       name: {
//         [Op.regexp]: "^[aeiou].*k$",
//       },
//     },
//     attributes: { exclude: ["createdAt", "updatedAt"] },
//   });

//   res.status(200).json({
//     result: students.length,
//     students,
//   });
// };
// module.exports = {
//   gettest,
// };

//=================== 20.Write a SQL statement to prepare a list with Student name, gender,marks  of the Student. ========================

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     attributes:['name','gender'],
//     include: [
//                 {
//                     model: Mark,
//                     attributes:['marks'],
//                     required: true, // INNER JOIN
//                   },
//                 ],
//   });
//   res.status(200).json({
//     result: students.length,
//     students,
//   });
// };

// module.exports = {
//   gettest,
// };

//=================== 21.Write a SQL statement display all information of Student with subjectname of those Student whose marks is in range of 35 to 50. ========================

// const gettest = async (req, res) => {
//       let students = await Student.findAll({
//         attributes: { exclude: ["createdAt", "updatedAt"] },
//         // raw:true,
//         include: [
//           {
//             model: Mark,
//             attributes: ["marks", "subject_name"],
//             marks: {
//                 [Op.between]: [35, 50],
//               },
//             required: true, // INNER JOIN
//           },
//         ],
//       });

//       res.status(200).json({
//         result:students.length,
//         students,
//       });
//     };
//     module.exports = {
//       gettest,
//     };

//=================== 22.write a sql query to display how many Student works in each standard whose roll_no is in range 2 to 8. ========================

// const gettest = async (req, res) => {
//   let students = await Student.findAll({
//     attributes: { exclude: ["createdAt", "updatedAt"] },
//     where: {
//       roll_no: {
//         [Op.between]: [2, 8],
//       },
//     },
//   });

//   res.status(200).json({
//     result: students.length,
//     students,
//   });
// };
// module.exports = {
//   gettest,
// };

//=================== 23.Write a SQL statement to find the average marks. ========================

// const gettest = async (req, res) => {
//   let marks = await Mark.findAll({
//     attributes:[[Sequelize.fn('AVG', Sequelize.col('marks')), 'Average marks']],
//   });

//   res.status(200).json({
//     // result: marks.length,
//     marks,
//   });
// };
// module.exports = {
//   gettest,
// };

//=================== 24.Write a SQL statement to find minimum and maximum marks. ========================

// const gettest = async (req, res) => {
//   let marks = await Mark.findAll({
//     attributes:[[Sequelize.fn('MIN', Sequelize.col('marks')), 'Minimum marks'],
//                 [Sequelize.fn('MAX', Sequelize.col('marks')), 'Maximun marks']],
//   });

//   res.status(200).json({
//     // result: marks.length,
//     marks,
//   });
// };
// module.exports = {
//   gettest,
// };

//==================== 25.Write a query to find student whose having minmum and maximum marks ==================

// const gettest = async (req, res) => {
//   let marks = await Mark.findAll({
//     attributes: [
//       [Sequelize.fn("MIN", Sequelize.col("marks")), "minmarks"],
//       [Sequelize.fn("MAX", Sequelize.col("marks")), "maxmarks"],
//         ],
//   });

//   res.status(200).json({
//     result: marks.length,
//     marks,
//   });
// };
// module.exports = {
//   gettest,
// };

//==================== 26.Write a SQL statement to count how many employee works in Stadard 11. ==================

const gettest = async (req, res) => {
  let students = await Student.findAll({
    attributes: [
      'standard',
      [Sequelize.fn("COUNT", Sequelize.col("name")), "Students"]
       ],
      where:{
        standard:{[Op.eq]:11}
      }
  });

  res.status(200).json({
    students,
  });
};
module.exports = {
  gettest,
};