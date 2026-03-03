const express = require("express"); //import the express library
const app = express(); // create a server using express

const mongoose = require("mongoose");

require("./connectdb");
const studentinfos = require("./models/studentshema"); // student module
const teacherinfos = require("./models/teachershema"); // teacher module
const result = require("./models/resultschema"); // result module

app.use(express.json());
const cors = require("cors");
const resultofstudent = require("./models/resultschema");
app.use(cors());

app.get("/studentinformation/studentinfo", async (req, res) => {
  try {
    const studentdata = await studentinfos.find(); // fetch all the data from the /studentinformation/studentinfo
    res.json(studentdata);
  } catch {
    res.status(500).send("error is fetching data... ");
  }
});

// get student personal information in details
app.get("/studentinformation/studentinfo/:id", async (req, res) => {
  try {
    const perstudentinfos = await studentinfos.findById(req.params.id);
    res.json(perstudentinfos);
  } catch {
    res.status(404).send("can not find the ids");
  }
});

app.post("/studentinformation/studentinfo", async (req, res) => {
  try {
    const newstudent = new studentinfos({
      addmission_date: req.body.addmission_date,
      class_addmission: req.body.class_addmission,
      p_address: req.body.p_address,
      p_email: req.body.p_email,
      p_fname: req.body.p_fname,
      p_lname: req.body.p_lname,
      p_phonenumber: req.body.p_phonenumber,
      relationship: req.body.relationship,
      st_address: req.body.st_address,
      st_dob: req.body.st_dob,
      st_email: req.body.st_email,
      st_fname: req.body.st_fname,
      st_gender: req.body.st_gender,
      st_lname: req.body.st_lname,
      st_phone: req.body.st_phone,
    });
    await newstudent.save();
    res
      .status(201)
      .json({ message: "Data saved successfully", student: newstudent });
  } catch (err) {
    console.error(err); // used to see the error when client tried to post from the frontend
    console.log("BODY:", req.body);
    res.status(500).send("error in sending data");
  }
});

app.delete("/studentinformation/studentinfo/:id", async (req, res) => {
  try {
    const deletedUser = await studentinfos.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/studentinformation/studentinfo/search", async (req, res) => {
  try {
    const { name } = req.query;

    const students = await studentinfos.find({
      st_fname: { $regex: name, $options: "i" }, // case-insensitive
    });

    if (students.length === 0) {
      return res.json({ message: "No student found" });
    }

    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.patch("/studentinformation/studentinfo/update/:id", async (req, res) => {
  console.log("it works");
  const studentId = req.params.id;
  const updateData = req.body; // only fields sent from frontend

  try {
    // Update only the fields that are provided
    const updatedStudent = await studentinfos.findByIdAndUpdate(
      studentId,
      { $set: updateData },
      { new: true }, // return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/studentinformation/teacherinfo", async (req, res) => {
  try {
    const newteacher = new teacherinfos({
      t_name: req.body.t_name,
      t_dob: req.body.t_dob,
      gender: req.body.gender,
      p_number: req.body.p_number,
      email: req.body.email,
      qualification: req.body.qualification,
      yearofExp: req.body.yearofExp,
      department: req.body.department,
      salary: req.body.salary,
      joining_date: req.body.joining_date,
      subject_teaches: req.body.subject_teaches,
    });
    await newteacher.save();
    res.status(201).send("teacher added successfully");
  } catch (error) {
    res
      .status(500)
      .send({ message: "error adding the teacher", error: error.message });
  }
});

// teacher's get information request
app.get("/studentinformation/teacherinfo", async (req, res) => {
  try {
    const teacherdata = await teacherinfos.find(); //fetches all the data form the teacher table
    res.json(teacherdata);
  } catch (error) {
    res.status(500).send({
      message: "error responding the student data",
      error: error.message,
    });
  }
});

// to return each teacher's information
app.get("/studentinformation/teacherinfo/:id", async (req, res) => {
  try {
    const teacherid = req.params.id;
    const oneteacherinfo = await teacherinfos.findById(teacherid);
    res.json(oneteacherinfo);
  } catch {
    res.send("could not find the id");
  }
});

// for the result
app.post("/studentinformation/result", async (req, res) => {
  try {
    const isstudentexist = await result.findOne({
      studentid: req.body.studentid,
    });

    if (isstudentexist) {
      return res.status(400).json({ message: "result already exist" });
    }
    const studentresult = new result({
      health: req.body.health,
      math: req.body.math,
      english: req.body.english,
      nepali: req.body.nepali,
      optmath: req.body.optmath,
      science: req.body.science,
      social: req.body.social,
      studentid: req.body.studentid,
    });
    await studentresult.save();
    return res.status(201).send("result posted successfully");
  } catch (error) {
    res.status(500).send({ message: "error in posting", error: error.message });
  }
});

app.get("/studentinformation/result/:id", async (req, res) => {
  try {
    const studentidfromclient = req.params.id;
    const resultid = await result.findOne({
      studentid: studentidfromclient,
    });
    if (!resultid) {
      return res.status(404).json({ message: "did not find the student" });
    }
    return res.json(resultid);
  } catch {
    res.send("can not find the student");
  }
});

app.get("/studentinformation/result", async (req, res) => {
  try {
    const student = await result.find();
    res.json(student);
  } catch {
    res.status(500).json({ message: "error in sending the information" });
  }
});

app.get("/studentinformation/student_with_result", async (req, res) => {
  try {
    const student_with_result = await studentinfos.aggregate([
      {
        $lookup: {
          from: "results",
          localField: "_id",
          foreignField: "studentid",
          as: "results",
        },
      },
      {
        $unwind: {
          path: "$results",
          preserveNullAndEmptyArrays: true,
        },
      },
    ]);
    res.json(student_with_result);
  } catch {
    res.status(404).json({ message: "can not return the result with student" });
  }
});

const PORT = 3000; // or any port you like

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
