// import React, { useState } from "react";
// import axios from "axios";
// import TeacherHeader from "../Teacher/TeacherHeader";
// import TeacherSidebar from "../Teacher/TeacherSidebar";
// import "react-notifications/lib/notifications.css";
// import { NotificationManager } from "react-notifications";
// import "./AddQuiz.css";

// const AddQuiz = () => {
//   const [formData, setFormData] = useState({
//     question: "",
//     options: "",
//     correctAnswer: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "options") {
//       // Split the comma-separated string into an array
//       const optionsArray = value.split(",");
//       setFormData({
//         ...formData,
//         [name]: optionsArray,
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:3001/quiz/createquiz", formData) // Use Axios to make a POST request
//       .then((response) => {
//         console.log(response.data);
//         // Clear the form or provide user feedback
//         NotificationManager.success(
//           `${response.data.message}`,
//           "",
//           3000
//         );
//         setFormData({
//           question: "",
//           options: "",
//           correctAnswer: "",
//         });
//       })
//       .catch((error) => {
//         //console.error(error);
//         NotificationManager.error(error.response.data, "", 3000);
//       });
//   };
//   return (
//     <div>
//       <TeacherHeader />
//       <div
//         style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
//       >
//         <TeacherSidebar />
//       <div className="container" style={{overflowY:"auto"}}>
//         <br></br>
//         <div className="col-sm-12">
//           <div className="row">
//             <div className="Auth-form-container">
//               <form onSubmit={handleSubmit}>
//                 <div className="form-group mt-3">
//                   <h3>Quiz Adding Form</h3>
//                 </div>
//                 <div className="form-group mt-3">
//                   <label>Questions</label>
//                   <input
//                     className="form-control mt-1"
//                     required
//                     type="text"
//                     name="question"
//                     value={formData.question}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <label>Options (comma-separated)</label>
//                   <input
//                     type="text"
//                     required
//                     className="form-control mt-1"
//                     name="options"
//                     value={formData.options}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="form-group mt-3">
//                   <label>Correct Answer</label>
//                   <input
//                     type="text"
//                     required
//                     className="form-control mt-1"
//                     name="correctAnswer"
//                     value={formData.correctAnswer}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="gap-2 mt-3">
//                 <button type="submit" className="quizz-add-btn">Add Quiz</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddQuiz;

//////////////////////////////////////////////////////////////////

import React, { useState } from "react";
import axios from "axios";
import TeacherHeader from "../Teacher/TeacherHeader";
import TeacherSidebar from "../Teacher/TeacherSidebar";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";
import "./AddQuiz.css";
import { Button } from "react-bootstrap";

const AddQuiz = () => {
  const [courseCode, setCourseCode] = useState("");
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === "question" || field === "correctAnswer") {
      newQuestions[index][field] = value;
    } else {
      newQuestions[index].options[field] = value;
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/quiz/createquiz",
        {
          courseCode,
          title: quizTitle,
          questions,
        }
      );
      NotificationManager.success(`${response.data.message}`, "", 3000);
      //Clear the form after submission
      setQuizTitle("");
      setQuestions([
        { question: "", options: ["", "", "", ""], correctAnswer: "" },
      ]);
    } catch (error) {
      console.error("Error adding quiz:", error);
      NotificationManager.error(error.response.data, "", 3000);
    }
  };
  return (
    <div>
      <TeacherHeader />
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <TeacherSidebar />
        <div className="container" style={{ overflowY: "auto" }}>
          <br></br>
          <div className="col-sm-12">
            <div className="row">
              <div className="Auth-form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <h3>Quiz Adding Form</h3>
                  </div>
                  <div className="form-group mt-3">
                    <label>Course Code</label>
                    <input
                      type="text"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                      required
                      className="form-control mt-1"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Quiz Title</label>
                    <input
                      type="text"
                      value={quizTitle}
                      onChange={(e) => setQuizTitle(e.target.value)}
                      required
                      className="form-control mt-1"
                    />
                  </div>
                  {questions.map((q, index) => (
                    <div key={index} className="form-group mt-3">
                      <label>Question {index + 1}</label>
                      <input
                        type="text"
                        value={q.question}
                        onChange={(e) =>
                          handleQuestionChange(
                            index,
                            "question",
                            e.target.value
                          )
                        }
                        required
                        className="form-control mt-1"
                      />
                      {q.options.map((option, i) => (
                        <input
                          key={i}
                          type="text"
                          value={option}
                          onChange={(e) =>
                            handleQuestionChange(index, i, e.target.value)
                          }
                          placeholder={`Option ${i + 1}`}
                          required
                          className="form-control mt-1"
                        />
                      ))}
                      <input
                        type="text"
                        value={q.correctAnswer}
                        onChange={(e) =>
                          handleQuestionChange(
                            index,
                            "correctAnswer",
                            e.target.value
                          )
                        }
                        placeholder="Correct Answer"
                        required
                        className="form-control mt-1"
                      />
                    </div>
                  ))}
                  <div className="form-group mt-3 quizzButtons">
                    <Button onClick={addQuestion}>Add Question</Button>
                    <Button type="submit">Submit Quiz</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
