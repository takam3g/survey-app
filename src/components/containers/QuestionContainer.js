import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AnswerContainer from '../containers/AnswerContainer';


const QuestionContainer = (props) => {

    const { surveyName, questionKey, question, allAnswers, setAllAnswers } = props
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{question.question_text}</Text>
            <AnswerContainer
                surveyName={surveyName}
                questionKey={questionKey}
                question={question}
                allAnswers={allAnswers}
                setAllAnswers={setAllAnswers}
            />
        </View>
    )
}

export default QuestionContainer

const styles = StyleSheet.create({
    container: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    text: {
        marginHorizontal: '10%',
        fontSize: 20
    }

})