import React, { useState } from 'react'
import Question from './Question';
import Answers from './Answers';
import questions from './../questions/questions.json'
import randomItem from 'random-item';

function Container(){
    const [state,setState] = useState(askQuestion(1))

    function getRandomQuestion(level){
        return randomItem(questions[`level${level}`])
    }

    function askQuestion(level){
        const question = getRandomQuestion(level)
        return {
            text:question.text,
            wrong1:question.wrong1,
            wrong2:question.wrong2,
            wrong3:question.wrong3,
            right:question.right
        }
    }

    return (
        <div>
            <div id="logo"></div>
            <Question text={state.text}/>
            <Answers answers={[state.wrong1,state.wrong2,state.wrong3,state.right]}/>
        </div>
        
    )
}

export default Container;