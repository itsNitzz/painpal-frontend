import { useState } from "react";

type Questions = {ques:string, choices:string[]}[];

const useQuestionsHook = ()=>{

    const [questions, setQuestions] = useState(null); 
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const isCompleted = questions&&activeQuestionIndex === questions.length-1;
    const activeQuestion = questions&&questions[activeQuestionIndex]?.ques;
    const choices = questions&&questions[activeQuestionIndex]?.choice;
    const totalQuestions = questions&&questions.length;

    return{
        setActiveQuestionIndex,
        activeQuestionIndex,
        activeQuestion,
        choices,
        isCompleted,
        totalQuestions,
        setQuestions
    }

}

export default useQuestionsHook;