import React from 'react'
import {Link} from 'react-router-dom'

function QuizStart() {
    return (
        <div className="pages">
        <h2>Daily Quizes</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea iu</p>
        <br/>
        <h4>Today</h4>
        <div className="quizgrid">
        <div className="quizcard">
        <div className="quizpic"></div>
        <ul>
        <li>Qustions:<span> 5</span></li>
        <li>Time <span>5 min</span></li>
        <li>Difficulty <span>Easy</span></li>
        </ul>
        <Link to="/quiz1">
        <button className="start">Start</button>
        </Link>
        
        </div>
        </div>
        </div>
    )
}

export default QuizStart
