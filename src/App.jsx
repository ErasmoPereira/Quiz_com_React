import './App.css'
import Welcome from './components/Welcome'
import { useContext, useEffect } from 'react';
import { Questions } from './components/Questions';
import { QuizContex } from './context/quiz';
import { GameOver } from './components/GameOver';

function App() {
  const [quizState, dispach] = useContext(QuizContex);

  useEffect(() =>{
    dispach({type: "REORDER_QUESTIONS"}) //embaralha as perguntas
  },[])
  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App
