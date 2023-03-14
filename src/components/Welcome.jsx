import { useContext } from 'react';
import { QuizContex } from '../context/quiz';

import Quiz from '../img/quiz.svg';
import './Welcome.css'

const Welcome = () => {

    const [quizState, dispach] = useContext(QuizContex)

    return (
     <div id="welcome">
        <h2>Seja bem-vindo</h2>
        <p>Clik no botão abaixo para iniciar:</p>
        <button onClick={() => dispach({type: "CHANGE_STATE"})}>Começar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    )
}

export default Welcome