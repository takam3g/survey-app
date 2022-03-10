import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Radio } from 'native-base'


const Boolean = (props) => {

    const { surveyName, questionKey, allAnswers, setAllAnswers } = props
    const [answer, setAnswer] = useState(true);

    useEffect(() => {
        const allAnswersCopy = {...allAnswers}
        allAnswersCopy[surveyName][questionKey] = answer
        setAllAnswers(allAnswersCopy)
    }, [answer])


    return (
        <View style={styles.container}>
            <Radio.Group 
                name="myRadioGroup" 
                value={answer} 
                onChange={value => setAnswer(value)}
            >
                <Radio value={true}>
                    Yes
                </Radio>
                <Radio value={false}>
                    No
                </Radio>
                
            </Radio.Group>
        </View>
    )
}

export default Boolean

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
})