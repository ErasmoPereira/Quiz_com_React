import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: STAGES[0], //estado atual do game
    questions, //perguntas
    currentQuestions: 0,
    score: 0,
    answerSelected: false,
}

const quizReducer = (state, action)=>{
    console.log(state, action)
    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage: STAGES[1],
            }
        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5 ;
            })
            return {
                ...state,
                questions: reorderedQuestions,
            };
       
        case "CHANGE_QUESTION":
            const nexQuestion = state.currentQuestions + 1;
            let endGame = false
            if (!questions[nexQuestion]){
                endGame = true
            }
            return{
                ...state,
                currentQuestions: nexQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            }
        
        case "NEW_GAME": 
            return initialState; //retorna para o inicio do game

        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0;

            if (answer === option) correctAnswer = 1;
            return{
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            };

        default:
            return state;
    }
}

export const QuizContex = createContext()

export const QuizProvider = ({children})=>{
    const value = useReducer(quizReducer, initialState);
    return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>
};