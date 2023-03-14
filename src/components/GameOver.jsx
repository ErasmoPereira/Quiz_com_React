import { useContext } from "react"
import { QuizContex } from "../context/quiz"
import Welldone from "../img/welldone.svg"
import "./GameOver.css"

export const GameOver = () => {
    const [quizState, dispach] = useContext(QuizContex)

    return (
    <div id='gameover'>
        <h2>Fim de jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} {" "}perguntas.</p>
        <img src={Welldone} alt="Fim de Quiz" />
        <button onClick={() => dispach({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}
