import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'native-base'


const IntInput = (props) => {

    const {min, max, unit, surveyName, questionKey, allAnswers, setAllAnswers} = props
    const [answer, setAnswer] = useState();

    useEffect(() => {
        const allAnswersCopy = {...allAnswers}
        allAnswersCopy[surveyName][questionKey] = parseInt(answer)
        setAllAnswers(allAnswersCopy)
    }, [answer])


    return (
        <View style={styles.container}>
            <Input 
                variant='underlined' 
                placeholder='Input Answer' 
                onChangeText={value => setAnswer(value)}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}

export default IntInput

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    unit: {
        marginLeft: 10
    }
})