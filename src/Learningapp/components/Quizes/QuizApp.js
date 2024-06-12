import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { scoreActions } from "../../../store/score-slice";
import QuizResult from "./QuizResult";
import "./QuizApp.css";
import { quuizzActions } from "../../../store/quizz-slice";

const QuizApp = () => {
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickOption] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const studentId = useSelector((state) => state.login);
  const studentName = useSelector((state) => state.login);
  const courseFind = useSelector((state) => state.cart);
  const studentid = studentId.items.id;
  const studentname = studentName.items.name;
  const courseCode = courseFind.items.courseCode;

  // This useEffect watches for changes in the score and sends it to the server when it changes
  useEffect(() => {
    if (score > 0) {
      sendScoresToServer(studentid, studentname, score, courseCode);
    }
  }, [score, studentid, studentname, courseCode]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/quiz/questions")
      .then((response) => {
        console.log("Quiz API", response?.data);
        const filteredQuestions = response?.data.find(
          (quiz) => quiz.courseCode === courseCode
        )?.questions;
        setQuestions(filteredQuestions || []);
        dispatch(quuizzActions.addQuizzQuestion(filteredQuestions));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [courseCode, dispatch]);

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const totalQuestion = questions.length;
  dispatch(scoreActions.quizTotalScore(totalQuestion + 90));

  const changeQuestion = () => {
    updateScore();

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (
      clickedOption !== null &&
      clickedOption === questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 10);
      dispatch(scoreActions.quizScore(score + 10));
      setClickOption(null);
    }
  };

  const sendScoresToServer = async (studentid, studentname, score, courseCode) => {
    try {
      await axios.post(
        "http://localhost:3001/studentscore/scores",
        {
          studentid,
          studentname,
          score,
          courseCode,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickOption(0);
    setScore(0);
  };

  return (
    <>
      <div className="container quizContainerArea">
        <h4 className="quiz-heading">Quiz App</h4>
        <div className="quiz-Area">
          <div className="quizContainer">
            {showResult ? (
              <QuizResult tryAgain={resetAll} />
            ) : (
              <>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="question">
                      <span id="question-number">{currentQuestion + 1}. </span>
                      <span id="question-txt">
                        {questions[currentQuestion].question}
                      </span>
                    </div>
                    <div className="option-container">
                      {questions[currentQuestion].options.map((option, i) => {
                        return (
                          <button
                            key={i}
                            className={`option-btn ${
                              clickedOption === option ? "checked" : ""
                            }`}
                            onClick={() => setClickOption(option)}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    <input
                      type="button"
                      value="Next"
                      id="next-button"
                      onClick={changeQuestion}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizApp;