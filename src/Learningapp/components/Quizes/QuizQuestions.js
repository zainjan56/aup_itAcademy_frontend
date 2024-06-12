import React from "react";
import StudentHeader from "../Student/StudentHeader";
import StudentSidebar from "../Student/StudentSidebar";
import { useSelector } from "react-redux";
import "./QuizQuestions.css"; // Import a CSS file for custom styles
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const QuizQuestions = () => {
  const quizzQuestions = useSelector((state) => state.quizzQuestions.items);
  console.log("Quiz Questions:::", quizzQuestions);

  return (
    <div>
      <StudentHeader />
      <div style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}>
        <StudentSidebar />
        <div className="container quizQuestions" style={{ overflowY: "auto", padding: "20px" }}>
          <h2>Quiz Questions</h2>
          {quizzQuestions && quizzQuestions.length > 0 ? (
            quizzQuestions.map((question, index) => (
              <div key={index} className="question-card">
                <h4 className="question-text">{index + 1}. {question.question}</h4>
                <ul className="options-list">
                  {question.options.map((option, i) => (
                    <li
                      key={i}
                      className={`option-item ${
                        option === question.correctAnswer ? "correct-option" : ""
                      }`}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No quiz questions available.</p>
          )}
          <div className="quizQuestionsBtn">
          <Link to="/quizhome"><Button variant="success">Try Again</Button></Link>
          <Link to="/studentapp"><Button variant="danger">Cancel</Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;