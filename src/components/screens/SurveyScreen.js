import React, {useState} from 'react'
import { View, Button, StyleSheet } from 'react-native'
import SURVEYS from '../../config/config.json'
import QuestionContainer from '../containers/QuestionContainer';


const SurveyScreen = ({navigation, route}) => {

    //Get selected survey
    const {survey} = route.params
    const surveyDetails = SURVEYS[survey].questions

    //To save answers 
    const [allAnswers, setAllAnswers] = useState({[survey]:{}})
    //For last saving
    const [finalAnswer, setFianlAnswer] = useState({})
    //For page tracking
    const [current, setCurrent] = useState(0)

    //Making array to access each question
    const questionList = Object.keys(surveyDetails)
    
    //Handle page move buttons
    const handlePrevious = () => {
        setCurrent(current - 1)
    }

    const handleNext = () => {
        setCurrent(current + 1)
    }

    const handleSubmit = () => {  
        setFianlAnswer(allAnswers)//As last saving of final data 
        //Go back to Home?
        // navigation.navigate('Home')  
    }

    //To check the final Answers
    console.log(finalAnswer)   
    
    return (
        <View style={styles.container}>
            <QuestionContainer
                surveyName={survey}
                questionKey={questionList[current]}
                question={surveyDetails[questionList[current]]}
                allAnswers={allAnswers}
                setAllAnswers={setAllAnswers}
            />

            <View style={styles.pageMove}>
                    <View style={[styles.button, current > 0 ? null : styles.hidden]}>
                        {current > 0 ?
                            <Button
                                title='<'
                                color='#fff'
                                onPress={handlePrevious}
                            />
                        : null}
                    </View>

                {current < questionList.length - 1 ?
                    <View style={[styles.button, questionList.length - 1 ? null : styles.hidden]}>
                        <Button
                            title='>'
                            color='#fff'
                            onPress={handleNext}
                        />
                    </View>
                : 
                    <View style={[styles.button, styles.submit]}>
                        <Button
                            title='Submit'
                            color='#fff'
                            onPress={handleSubmit}
                        />
                    </View>
                }
            </View>
        </View>
    )
}

export default SurveyScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        paddingTop: 50,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    pageMove: {
        padding: '5% 10%',
        display: 'flex',
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 2,

    },
    button: {
        backgroundColor: '#2c3e50',
        borderRadius: 100,
        width: 35,
        height: 35,
    },
    hidden: {
        backgroundColor: 'transparent',
    },
    submit: {
        width: 100,
    }
})