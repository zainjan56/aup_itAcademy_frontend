import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const QuizResult = (props) => {
    const quizScore = useSelector(state => state.score.score);
    const totalquizScore = useSelector(state => state.score.totalScore);

  return (
    <>
    <div className='show-score'>
        Your Score: {quizScore}<br />
        Total Score: {totalquizScore}
    </div>
    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    <Link to="/quizquestions"><Button>Quizz Questions</Button></Link>
    </>
  )
}

export default QuizResult;