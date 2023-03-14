import {useContext} from 'react'
import { QuizContex } from '../context/quiz'

import "./Option.css"

export const Option = ({option, selectOption, answer}) => {
    const [quizState, dispach] = useContext(QuizContex)
  
    return (
    <div className={`option ${quizState.answerSelected && option === answer ? "correct" : ""}
    ${quizState.answerSelected && option !== answer ? "wrong" : ""}`} 
    onClick={()=> selectOption()}>
        <p>{option}</p>
    </div>
  )
}
