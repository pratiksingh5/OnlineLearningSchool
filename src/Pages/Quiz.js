import {React,useState} from 'react'
import questions from '../utilities/Questions'
import {Link} from 'react-router-dom'

function Quiz() {
    
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

    return (
        <div className="pages">
           <div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <br/>
                    <br/>
                    <Link to="/"> <button className="button">Back to HomePage</button></Link>
                   
                    
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
        </div>
    )
}

export default Quiz
