import React from 'react';
import { useSelector } from 'react-redux';

const QuizResult = (props) => {
    const quizScore = useSelector(state => state.score.score);
    const totalquizScore = useSelector(state => state.score.totalScore);
    //console.log(quizScore);
  return (
    <>
    <div className='show-score'>
        Your Score: {quizScore}<br />
        Total Score: {totalquizScore}
    </div>
    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult;