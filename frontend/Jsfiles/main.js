// window.onload = function () {
//   navigate();
// };

function navigate(event, path) {
  event.preventDefault();
  history.pushState({}, "", path);
  router();
}

function router() {
  // let path = "/home";

  path = window.location.pathname;

  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  if (path === "/about") {
    document.querySelector(".about").classList.add("active");
    document.querySelector(".admin1").style.display = "none";
  } else if (path === "/help") {
    document.querySelector(".help").classList.add("active");
    document.querySelector(".admin1").style.display = "none";
  } else if (path === "/contact") {
    document.querySelector(".contact").classList.add("active");
    document.querySelector(".admin1").style.display = "none";
  } else if (path === "/admin") {
    document.querySelector(".admin").classList.add("active");
    document.querySelector(".admin1").style.display = "flex";
    document.querySelector(".adminRegisterDiv").style.display = "none";
  } else {
    document.querySelector(".home").classList.add("active");
    document.querySelector(".admin1").style.display = "none";
  }
}

window.onpopstate = router;

let registerformtoggle = true;
function adminregisterform() {
  if (registerformtoggle) {
    document.querySelector(".adminRegisterDiv").style.display = "flex";
    document.querySelector(".adminLoginDiv").style.display = "none";
    // document.querySelector(".adminLoginDiv").style.display = "flex";
    registerformtoggle = false;
  } else {
    document.querySelector(".adminRegisterDiv").style.display = "none";
    // document.querySelector(".adminLoginDiv").style.display = "none";
    registerformtoggle = true;
  }
}

function loginfromofadmine() {
  document.querySelector(".adminLoginDiv").style.display = "flex";
  document.querySelector(".adminRegisterDiv").style.display = "none";
}

function dashbortevents(event, path) {
  const pages = document.querySelectorAll(".db_page");
  pages.forEach((p) => {
    p.style.display = "none";
  });

  // const urlpath = window.location.pathname;

  // if (urlpath == "/home") {
  //   document.querySelector(".admin1").style.display = "none";
  // }

  if (path === "student") {
    document.querySelector(".student-dashbord").style.display = "flex";
    document.querySelector(".teacher_dashboard").style.display = "none";
    document.querySelector(".result_dashboard").style.display = "none";
  } else if (path === "dashbord") {
    document.querySelector(".dashbord-div").style.display = "flex";
    document.querySelector(".teacher_dashboard").style.display = "none";
    document.querySelector(".result_dashboard").style.display = "none";
  } else if (path === "add_student") {
    document.querySelector(".add_student").style.display = "flex";
    document.querySelector(".teacher_dashboard").style.display = "none";
    document.querySelector(".result_dashboard").style.display = "none";
  } else if (path === "notice") {
    document.querySelector(".notice_bord").style.display = "block";
    document.querySelector(".teacher_dashboard").style.display = "none";
    document.querySelector(".result_dashboard").style.display = "none";
  } else if (path === "teacher") {
    document.querySelector(".teacher_dashboard").style.display = "flex";
    document.querySelector(".result_dashboard").style.display = "none";
  } else if (path === "result") {
    document.querySelector(".result_dashboard").style.display = "flex";
    document.querySelector(".teacher_dashboard").style.display = "none";
  }
}

// function dashbordevent(event, path) {
//   event.preventDefault();

//   history.pushState({}, "", path);
//   dashbord_router();
// }

// function dashbord_router() {
//   let path = window.location.pathname;

//   document.querySelector(".centeral_div").forEach((d) => {
//     d.style.display = "none";
//   });

//   if (path === "/student") {
//     document.querySelector(".student-dashbord").style.display = "block";
//   }
// }

// NOTICE

let toggle = true;
function notice(event) {
  if (toggle) {
    document.querySelector(".notive_div").style.zIndex = "10";
    toggle = false;
  } else {
    document.querySelector(".notive_div").style.zIndex = "-1";
    toggle = true;
  }
}

function postnotice() {
  let ntc = document.querySelector("textarea").value;
  localStorage.setItem("notice", JSON.stringify(ntc));

  const noticeformlocalstorage = localStorage.getItem("notice");
  document.querySelector(".anotice").innerHTML = noticeformlocalstorage;

  alert("the notice is successfully posted......");
  document.querySelector("textarea").value = " ";
}

// form validation

document.querySelector(".myform").addEventListener("submit", (e) => {
  e.preventDefault();

  let st_fname = document.querySelector(".fname").value.trim();
  let st_lname = document.querySelector(".lname").value.trim();
  let st_email = document.querySelector(".email").value.trim();
  let st_address = document.querySelector(".address").value.trim();
  let st_phone = document.querySelector(".pnumber").value.trim();
  let gender = document.querySelector(".gender:checked"); // checks if any radio with class gender is selected.
  let ad_date = document.querySelector(".addate").value;
  let app_class = document.querySelector(".applyingclass").value;
  let rel = document.querySelector(".relationship").value;
  let p_fname = document.querySelector(".pfname").value.trim();
  let p_lname = document.querySelector(".plname").value.trim();
  let p_phonenumber = document.querySelector(".pphone").value.trim();
  let p_email = document.querySelector(".pemail").value.trim();
  let p_address = document.querySelector(".paddress").value.trim();
  let st_dob = document.querySelector(".dob").value;

  let istrue = true;

  if (st_fname == "") {
    document.querySelector(".fnameErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.st_fname >= 3) {
    document.querySelector(".fnameErr").innerHTML =
      "name should have more than 3 letters";
    istrue = false;
  }

  if (st_lname == "") {
    document.querySelector(".lnameErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.st_fname >= 3) {
    document.querySelector(".lnameErr").innerHTML =
      "name should have more than 3 letters";
    istrue = false;
  }

  if (st_email == "") {
    document.querySelector(".emailErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (!st_email.includes("@") && !st_email.includes(".")) {
    document.querySelector(".emailErr").innerHTML = "enter valid email";
    istrue = false;
  }

  if (st_address == "") {
    document.querySelector(".addressErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.st_address >= 3) {
    document.querySelector(".addressErr").innerHTML =
      "address should have more than 3 letters";
    istrue = false;
  }

  if (st_phone == "") {
    document.querySelector(".fnameErr").innerHTML = "this field is requied";
    istrue = false;
    // } else if (length.st_fname >= 3) {
    //   document.querySelector(".lnameErr").innerHTML =
    //     "name should have more than 3 letters";
    //   istrue = false;
  }

  if (!gender) {
    document.querySelector(".radio").innerHTML = "select the gender";
    istrue = false;
  }

  // date validation
  const current_date = new Date();
  const selecteddate = new Date(ad_date);
  if (!ad_date) {
    document.querySelector(".addateErr").innerHTML = "select the date";
    istrue = false;
  } else if (selecteddate > current_date) {
    document.querySelector(".addateErr").innerHTML =
      "selece the appropriate date";
    istrue = false;
  }

  if (app_class == "") {
    document.querySelector(".applyingclassErr").innerHTML =
      "which class are you applying";
    istrue = false;
  }
  if (rel == "") {
    document.querySelector(".relationshipErr").innerHTML =
      "select relationship status";
    istrue = false;
  }

  if (p_fname == "") {
    document.querySelector(".pfnameErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.p_fname >= 3) {
    document.querySelector(".pfnameErr").innerHTML =
      "name should have more than 3 letters";
    istrue = false;
  }

  if (p_lname == "") {
    document.querySelector(".plnameErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.p_fname >= 3) {
    document.querySelector(".plnameErr").innerHTML =
      "name should have more than 3 letters";
    istrue = false;
  }

  if (p_phonenumber == "") {
    document.querySelector(".pphoneErr").innerHTML = "this field is requied";
    istrue = false;
    // } else if (length.st_fname >= 3) {
    //   document.querySelector(".lnameErr").innerHTML =
    //     "name should have more than 3 letters";
    //   istrue = false;
  }

  if (p_email == "") {
    document.querySelector(".pemailErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (!p_email.includes("@") && !p_email.includes(".")) {
    document.querySelector(".pemailErr").innerHTML = "enter valid email";
    istrue = false;
  }

  if (p_address == "") {
    document.querySelector(".paddressErr").innerHTML = "this field is requied";
    istrue = false;
  } else if (length.p_address >= 3) {
    document.querySelector(".paddressErr").innerHTML =
      "address should have more than 3 letters";
    istrue = false;
  }

  const dobselected = new Date(st_dob);

  if (!st_dob) {
    document.querySelector(".dobErr").innerHTML = "select the dob";
    istrue = false;
  } else if (dobselected > current_date) {
    document.querySelector(".dobErr").innerHTML = "selecet appropriate DOB";
    istrue = false;
  }

  if (istrue == true) {
    const student_information = {
      st_fname: document.querySelector(".fname").value.trim(),
      st_lname: document.querySelector(".lname").value.trim(),
      st_email: document.querySelector(".email").value.trim(),
      st_address: document.querySelector(".address").value.trim(),
      st_phone: document.querySelector(".pnumber").value.trim(),
      st_gender: gender.value ? gender.value : "",
      addmission_date: ad_date,
      class_addmission: app_class,
      relationship: rel,
      p_fname: document.querySelector(".pfname").value.trim(),
      p_lname: document.querySelector(".plname").value.trim(),
      p_phonenumber: document.querySelector(".pphone").value.trim(),
      p_email: document.querySelector(".pemail").value.trim(),
      p_address: document.querySelector(".paddress").value.trim(),
      st_dob: document.querySelector(".dob").value,
    };
    console.log(student_information);

    postStudentinfos(student_information);

    alert("form submitted successfully");
    document.querySelector(".myform").reset();
  }
});

// post in the database
async function postStudentinfos(student_information) {
  const res = await fetch(
    "http://localhost:3000/studentinformation/studentinfo",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student_information),
    },
  );
  if (!res.ok) {
    throw new error("fail to save new student");
  }
  getStudentinfos();
  return await res.json();
}

// fetch data from the api
async function getStudentinfos() {
  try {
    const response = await fetch(
      "http://localhost:3000/studentinformation/studentinfo",
    );

    const st_data = await response.json();
    let tablerows = "";
    st_data.forEach((infos) => {
      tablerows += `
      <tr id="${infos._id}">
                <td>${infos.st_fname} ${infos.st_lname}</td>
                <td>${infos.class_addmission}</td>
                <td>${infos.st_email}</td>
                <td>${infos.st_phone}</td>
                <td>${infos.st_address}</td>
                <td>${infos.p_fname} ${infos.p_lname}</td>
                <td>${infos.p_phonenumber}</td>
                <td><i id="actionIcons" class="fa-solid fa-eye" onclick="view('${infos._id}')"></i></td>
                <td><i id="actionIcons" class="fa-solid fa-trash" onclick="deleteinfo('${infos._id}')"></i></td>
                <td><i id="actionIcons" class="fa-solid fa-pen-to-square" onclick="updateStudent('${infos._id}')"></i></td>
                <td><i class="fa-solid fa-plus" onclick="addresult('${infos._id}')"></i></td>
      </tr>
      `;
      document.querySelector(".studentsinfosdata").innerHTML = tablerows;
      // console.log(infos);
    });
    document.querySelector(".std").innerHTML = st_data.length;
    document.querySelector(".prt").innerHTML = st_data.length;
    // console.log(st_data);
  } catch (error) {
    console.log("error in fetching the data" + error);
  }
}
getStudentinfos();

let std_id = "";
async function view(studentID) {
  std_id = studentID;
  console.log(studentID);
  document.querySelector(".centeral_div").style.display = "none";
  document.querySelector(".studentprofile").style.display = "block";
  const response = await fetch(
    `http://localhost:3000/studentinformation/studentinfo/${studentID}`,
  );
  const perstudentdata = await response.json();
  document.querySelector(".st_name").innerHTML =
    perstudentdata.st_fname + " " + perstudentdata.st_lname;
  document.querySelector(".st_email").innerHTML = perstudentdata.st_email;
  document.querySelector(".st_phone").innerHTML = perstudentdata.st_phone;
  document.querySelector(".st_address").innerHTML = perstudentdata.st_address;
  document.querySelector(".st_edate").innerHTML =
    perstudentdata.addmission_date;
  document.querySelector(".st_gender").innerHTML = perstudentdata.st_gender;
  document.querySelector(".st_dob").innerHTML = perstudentdata.st_dob;
  document.querySelector(".st_adate").innerHTML =
    perstudentdata.class_addmission;
  document.querySelector(".p_name").innerHTML =
    perstudentdata.p_fname + " " + perstudentdata.p_lname;
  document.querySelector(".p_relation").innerHTML = perstudentdata.relationship;
  document.querySelector(".p_phone").innerHTML = perstudentdata.p_phonenumber;
  document.querySelector(".p_email").innerHTML = perstudentdata.p_email;
  document.querySelector(".p_address").innerHTML = perstudentdata.p_address;
}

function closeprofile() {
  document.querySelector(".centeral_div").style.display = "flex";
  document.querySelector(".studentprofile").style.display = "none";
}
// student view result
async function viewresult() {
  document.querySelector(".centeral_div").style.display = "none";
  document.querySelector(".studentprofile").style.display = "none";
  document.querySelector(".viewresult").style.display = "block";
  console.log(std_id);
  const res = await fetch(
    `http://localhost:3000/studentinformation/result/${std_id}`,
  );
  const result = await res.json();
  if (res.status === 404) {
    alert("the marks of the student have not added yet");
  }
  // console.log(result);
  // console.log(result.nepali);
  const studentinfo = await fetch(
    `http://localhost:3000/studentinformation/studentinfo/${std_id}`,
  );
  const student = await studentinfo.json();
  // console.log(student);
  // console.log(student.st_fname);
  const total =
    parseInt(result.nepali) +
    parseInt(result.english) +
    parseInt(result.math) +
    parseInt(result.science) +
    parseInt(result.health) +
    parseInt(result.social) +
    parseInt(result.optmath);
  console.log("total:", total);

  // to calculate the result gread
  let grade = "";
  function calculategrade(number) {
    if (number >= 90) {
      return (grade = "A+");
    } else if (number >= 80 && number <= 89) {
      return (grade = "A");
    } else if (number >= 70 && number <= 79) {
      return (grade = "B+");
    } else if (number >= 60 && number <= 69) {
      return (grade = "B");
    } else if (number >= 50 && number <= 59) {
      return (grade = "C+");
    } else if (number >= 40 && number <= 49) {
      return (grade = "C");
    } else {
      return (grade = "NG");
    }
  }
  // for the distinction
  let dis = "";
  function distinction(Percentage) {
    if (Percentage >= 90) {
      return (dis = "Distinction");
    } else if (Percentage >= 80 && Percentage <= 89) {
      return (dis = "First Division");
    } else if (Percentage >= 70 && Percentage <= 79) {
      return (dis = "Second Division");
    } else if (Percentage >= 60 && Percentage <= 69) {
      return (dis = "Third Division");
    } else if (Percentage >= 50 && Percentage <= 59) {
      return (dis = "Fouth Division");
    } else {
      return (dis = "Fail");
    }
  }
  distinction((total / 700) * 100);
  document.querySelector(".viewresult").innerHTML = `
   <div style="display: flex; justify-content:left;">
  <i id="std_viewresult" onclick="closeviewresultpannel()" class="fa-solid fa-square-xmark"></i>
</div>

<div class="container mt-2">
  <div class="card shadow">
    <div class="card-body">

      <h2 class="text-center mb-3">Tharlam Manjushree School</h2>
      <h4 class="text-center mb-4">Student Marksheet</h4>

      <!-- Student Info -->
      <div class="row mb-3">
        <div class="col-md-4">
          <strong>Student Name:</strong> ${student.st_fname} ${student.st_lname}
        </div>
        <div class="col-md-4">
          <strong>Class:</strong> ${student.class_addmission}
        </div>
      </div>

      <!-- Marks Table -->
      <div class="table-responsive">
        <table class="table table-bordered table-striped text-center">
          <thead class="table-dark">
            <tr>
              <th>Subject</th>
              <th>Marks Obtained</th>
              <th>Full Marks</th>
              <th>Grade</th> <!-- New Grade column -->
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nepali</td>
              <td>${result.nepali}</td>
              <td>100</td>
              <td>${calculategrade(result.nepali)}</td>
            </tr>
            <tr>
              <td>English</td>
              <td>${result.english}</td>
              <td>100</td>
              <td>${calculategrade(result.english)}</td>
            </tr>
            <tr>
              <td>Math</td>
              <td>${result.math}</td>
              <td>100</td>
              <td>${calculategrade(result.math)}</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>${result.science}</td>
              <td>100</td>
              <td>${calculategrade(result.science)}</td>
            </tr>
            <tr>
              <td>Social</td>
              <td>${result.social}</td>
              <td>100</td>
              <td>${calculategrade(result.social)}</td>
            </tr>
            <tr>
              <td>Health</td>
              <td>${result.health}</td>
              <td>100</td>
              <td>${calculategrade(result.health)}</td>
            </tr>
            <tr>
              <td>Optional Math</td>
              <td>${result.optmath}</td>
              <td>100</td>
              <td>${calculategrade(result.optmath)}</td>
            </tr>
            <tr class="table-primary fw-bold">
              <td>Total</td>
              <td>${total}</td>
              <td>700</td>
              <td>-</td> <!-- Total row grade can be left blank or calculated -->
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Result Summary -->
      <div class="row mt-3">
        <div class="col-md-6">
          <strong>Percentage:</strong> ${(total / 700) * 100 + "%"}
        </div>
        <div class="col-md-6">
          <strong>Result:</strong>${dis}
        </div>
      </div>

    </div>
  </div>
</div>
  `;
}

function closeviewresultpannel() {
  document.querySelector(".centeral_div").style.display = "flex";
  document.querySelector(".viewresult").style.display = "none";
}

// add student's result54
let studentid = "";
function addresult(idofstd) {
  document.querySelector(".centeral_div").style.display = "none";
  document.querySelector(".addstudentresult").style.display = "block";
  studentid = idofstd;
}

document
  .querySelector("#btnresult")
  .addEventListener("click", async function (event) {
    event.preventDefault();
    const resultinfo = {
      nepali: document.querySelector(".nepali").value,
      english: document.querySelector(".english").value,
      math: document.querySelector(".math").value,
      science: document.querySelector(".science").value,
      social: document.querySelector(".social").value,
      health: document.querySelector(".health").value,
      optmath: document.querySelector(".optmath").value,
      studentid: studentid,
    };
    const res = await fetch("http://localhost:3000/studentinformation/result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultinfo),
    });
    if (!res.ok) {
      alert("the result already exist in database");
    } else {
      alert("marks saved successfully");
    }
    document.querySelector(".resultform").reset();
  });

function closeresultpannel() {
  document.querySelector(".centeral_div").style.display = "flex";
  document.querySelector(".addstudentresult").style.display = "none";
}

async function searchStudent() {
  const stdname = document.querySelector("#searchbox").value;

  try {
    const res = await fetch(
      `http://localhost:3000/studentinformation/studentinfo/search?name=${stdname}`,
    );

    const students = await res.json();

    displaystdinformation(students);
  } catch (err) {
    console.log(err);
  }
}

async function searchStudent() {
  const name = document.querySelector("#searchbox").value.trim();

  if (!name) {
    alert("Enter a name to search");
    return;
  }

  try {
    const res = await fetch(
      `http://localhost:3000/studentinformation/studentinfo/search?name=${name}`,
    );

    const data = await res.json();

    if (data.message) {
      alert(data.message);
      return;
    }
    console.log(data);

    displayStudents(data); // show result
  } catch (error) {
    console.error("Search error:", error);
  }
}

function registerthisform(event) {
  if (registerformtoggle) {
  }
  event.preventDefault();
  let registerformistrue = true;

  const username = document.querySelector("#username").value;
  if (username.length < 3) {
    document.querySelector(".usernameErr").innerHTML = "username need longer";
    registerformistrue = false;
  } else if (username == "") {
    document.querySelector(".usernameErr").innerHTML = "requied";
    registerformistrue = false;
  }
  const useremail = document.querySelector("#useremail").value;
  if (!useremail.includes("@") && !useremail.includes(".")) {
    document.querySelector(".useremailErr").innerHTML = "inter valid email";
    registerformistrue = false;
  } else if (useremail == "") {
    document.querySelector(".useremailErr").innerHTML = "required";
    registerformistrue = false;
  }
  const userpassword = document.querySelector("#userpassowrd").value;
  if (userpassword == "") {
    document.querySelector(".passwordErr").innerHTML = "required";
    registerformistrue = false;
  } else if (userpassword.length < 4) {
    document.querySelector(".passwordErr").innerHTML =
      "password need to be longer";
    registerformistrue = false;
  }
  const usercpassword = document.querySelector("#usercpassword").value;
  if (usercpassword == "") {
    document.querySelector(".usercpasswordErr").innerHTML = "required";
    registerformistrue = false;
  } else if (userpassword != usercpassword) {
    document.querySelector(".usercpasswordErr").innerHTML = "did not matched";
    registerformistrue = false;
  }

  if (registerformistrue) {
    alert("thank you for registering.....");
    document.querySelector(".adminform").reset();
    document.querySelector(".adminRegisterDiv").style.display = "none";
    document.querySelector(".usernameErr").innerHTML = "";
    document.querySelector(".useremailErr").innerHTML = "";
    document.querySelector(".passwordErr").innerHTML = "";
    document.querySelector(".usercpasswordErr").innerHTML = "";

    navigate(event, "/admin");

    const admineinfo = {
      ad_name: username,
      ad_emial: useremail,
      ad_password: userpassword,
    };

    localStorage.setItem("admininfos", JSON.stringify(admineinfo));
  }
}

function loginadmin(event) {
  event.preventDefault();
  let userloginformistrue = true;

  const userseteamilNpassString = localStorage.getItem("admininfos");
  const userseteamilNpass = JSON.parse(userseteamilNpassString);

  const loginuseremial = document.querySelector("#loginuseremail").value;

  if (loginuseremial == "") {
    document.querySelector(".loginuseremailErr").innerHTML = "requied";
    userloginformistrue = false;
  } else if (loginuseremial != userseteamilNpass.ad_emial) {
    document.querySelector(".loginuseremailErr").innerHTML =
      "user name not matched";
    userloginformistrue = false;
  }

  const loginuserpassword = document.querySelector("#loginuserpassowrd").value;

  if (loginuserpassword == "") {
    document.querySelector(".loginpasswordErr").innerHTML = "required";
    userloginformistrue = false;
  } else if (loginuserpassword != userseteamilNpass.ad_password) {
    document.querySelector(".loginpasswordErr").innerHTML =
      "password not matched";
    userloginformistrue = false;
  }

  if (userloginformistrue) {
    document.querySelector(".adminLoginDiv").style.display = "none";
    document.querySelector(".adminLoginform").reset();
    document.querySelector(".loginpasswordErr").innerHTML = "";
    document.querySelector(".loginuseremailErr").innerHTML = "";
    navigate(event, "/admin");
  }
}

function deleteinfo(id) {
  fetch(`http://localhost:3000/studentinformation/studentinfo/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(`${id}`).remove();
      alert(data.message);
    })
    .catch((err) => console.log(err));
}

let currentStudentId = null; // store the current student id

// When clicking update button for a student
function updateStudent(stdid) {
  currentStudentId = stdid; // store the current student id
  console.log("Updating student ID:", stdid);

  // Show the update form and hide main div
  document.querySelector(".centeral_div").style.display = "none";
  document.querySelector("#updatestudent").style.display = "block";
}

// When submitting the update form
function updatesubmit(event) {
  event.preventDefault(); // Prevent form submission

  if (!currentStudentId) {
    alert("No student selected to update!");
    return;
  }

  // Collect input values and match schema field names
  const inputs = {
    st_fname: document.querySelector(".input-firstname").value.trim(),
    st_lname: document.querySelector(".input-lastname").value.trim(),
    st_email: document.querySelector(".input-email").value.trim(),
    st_phone: document.querySelector(".input-student-phone").value.trim(),
    st_address: document.querySelector(".input-address").value.trim(),
    p_fname: document.querySelector(".input-parent-firstname").value.trim(),
    p_lname: document.querySelector(".input-parent-lastname").value.trim(),
    p_email: document.querySelector(".input-parent-email")?.value.trim(),
    p_phonenumber: document.querySelector(".input-parent-phone").value.trim(),
  };

  // Only include non-empty fields
  const studentData = {};
  for (const key in inputs) {
    if (inputs[key] !== "" && inputs[key] !== undefined) {
      studentData[key] = inputs[key];
    }
  }

  console.log("Data to send:", studentData);
  // Send update request to backend
  fetch(
    `http://localhost:3000/studentinformation/studentinfo/update/${currentStudentId}`,
    {
      method: "PATCH", // Update only the provided fields
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    },
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
      alert("Student updated successfully!");
      getStudentinfos();

      // Optionally reset the form or hide update section
      // document.querySelector("#updatestudent").style.display = "none";
      // document.querySelector(".centeral_div").style.display = "block";
    })
    .catch((error) => {
      console.error("Error updating student:", error);
      alert("Failed to update student!");
    });
}

function closeprofileofupdate() {
  document.querySelector(".centeral_div").style.display = "flex";
  document.querySelector("#updatestudent").style.display = "none";
}

async function getteacherinfos() {
  const teacherinformation = await fetch(
    "http://localhost:3000/studentinformation/teacherinfo",
  );
  const res = await teacherinformation.json();

  let taleofteacherinfos = "";
  res.forEach((info) => {
    taleofteacherinfos += `
    <tr>
    <td>${info.t_name}</td>
    <td>${info.subject_teaches}</td>
    <td>${info.p_number}</td>
    <td>${info.email}</td>
    <td>${info.salary}</td>
    <td>${info.department}</td>
    <td><button class="btn btn-info btn-sm" onclick="teacherprofile('${info._id}')">View</button></td>
    <td><button class="btn btn-danger btn-sm">Delete</button></td>
    <td><button class="btn btn-warning btn-sm">Update</button></td>
    </tr>
    `;
  });
  document.querySelector(".teachersrow").innerHTML = taleofteacherinfos;
  document.querySelector(".tnum").innerText = res.length;
}

getteacherinfos();

async function teacherprofile(teacherID) {
  document.querySelector(".centeral_div").style.display = "none";
  document.querySelector(".teacherprofile").style.display = "block";
  const res = await fetch(
    `http://localhost:3000/studentinformation/teacherinfo/${teacherID}`,
  );
  const perteacherinfo = await res.json();
  console.log(perteacherinfo);
  document.querySelector(".teacherdept").textContent =
    perteacherinfo.department;
  document.querySelector(".teacheremail").textContent = perteacherinfo.email;
  document.querySelector(".joining_date").textContent =
    perteacherinfo.joining_date;
  document.querySelector(".t_phonenumber").textContent =
    perteacherinfo.p_number;
  document.querySelector(".qualification").textContent =
    perteacherinfo.qualification;
  document.querySelector(".salary").textContent = perteacherinfo.salary;
  document.querySelector(".subject").textContent =
    perteacherinfo.subject_teaches;
  document.querySelector(".t_dob").textContent = perteacherinfo.t_dob;
  document.querySelector(".t_name").textContent = perteacherinfo.t_name;
  document.querySelector(".expyear").textContent = perteacherinfo.yearofExp;
}

function closeteacherprofile() {
  document.querySelector(".centeral_div").style.display = "flex";
  document.querySelector(".teacherprofile").style.display = "none";
}

async function getstudentresult() {
  const res = await fetch(
    "http://localhost:3000/studentinformation/studentinfo",
  );
  const infos = await res.json();

  const marks = await fetch("http://localhost:3000/studentinformation/result");
  const marksinjson = await marks.json();
  // console.log(Array.isArray(marksinjson)); to check weather it is array or not
  const marksAndstudentinfosCombined = [...infos, ...marksinjson];
  console.log(marksAndstudentinfosCombined);

  // console.log(infos);
  //   infos.forEach(function (info) {
  //     console.log(info);
  //     document.querySelector(".stdmarks").innerHTML += `
  //     <tr>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     <td><td>
  //     </tr>
  //     `;
  //   });
}

getstudentresult();
