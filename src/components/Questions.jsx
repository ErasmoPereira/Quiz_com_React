
import { QuizContex } from '../context/quiz';
import { useContext } from 'react';
import { Option } from './Option';
import './Questions.css';

export const Questions = (option) => {
  
    const [quizState, dispach] = useContext(QuizContex)
    const currentQuestions = quizState.questions[quizState.currentQuestions] //Para chamar as perguntas
    const onSelectOption = () =>{
        dispach({
            type: "CHECK_ANSWER",
            payload: {answer: currentQuestions.answer, option}
        });
    }
    
    return(
    <div id="questions">
        <p>Pergunda {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
        <h2>{currentQuestions.question}</h2>
        <div id="options-container">
            {currentQuestions.options.map((option)=>(
                <Option 
                option={option} 
                key={option} 
                answer={currentQuestions.answer} 
                selectOption = { () => onSelectOption(option)}/>
            ))}
        </div>
        {quizState.answerSelected && (
            <button onClick={()=>dispach({type: "CHANGE_QUESTION"})}>Continuar</button>
        )}
    </div>)
  
}
export default Questions
