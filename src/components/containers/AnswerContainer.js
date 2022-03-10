import React from 'react'
import Boolean from '../forms/Boolean'
import IntSlider from '../forms/IntSlider'
import IntInput from '../forms/IntInput'


const AnswerContainer = (props) => {

    const { surveyName, questionKey, question, allAnswers, setAllAnswers } = props


    return (
        <>
            {question.answer_type == 'bool' ?
                <Boolean 
                    surveyName={surveyName}
                    questionKey={questionKey}
                    allAnswers={allAnswers}
                    setAllAnswers={setAllAnswers}
                />
            : 
            question.answer_max <= 10 ? 
                <IntSlider
                    surveyName={surveyName}
                    questionKey={questionKey}
                    allAnswers={allAnswers}
                    setAllAnswers={setAllAnswers} 
                    min={question.answer_min} 
                    max={question.answer_max}
                />
            : 
                <IntInput 
                    surveyName={surveyName}
                    questionKey={questionKey}
                    allAnswers={allAnswers}
                    setAllAnswers={setAllAnswers}
                    min={question.answer_min} 
                    max={question.answer_max}
                    unit={question.answer_unit}
                />
            }
        </>
    )
}

export default AnswerContainer