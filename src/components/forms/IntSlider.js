import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Slider } from 'native-base'


const IntSlider = (props) => {

    const {min, max, surveyName, questionKey, allAnswers, setAllAnswers} = props
    const [answer, setAnswer] = useState();


    useEffect(() => {
        const allAnswersCopy = {...allAnswers}
        allAnswersCopy[surveyName][questionKey] = answer
        setAllAnswers(allAnswersCopy)
    }, [answer])

    
    return (
        <View style={styles.container}>
            <View>
                
            </View>

            <Slider 
                defaultValue={min} 
                minValue={min}
                maxValue={max} 
                step={1}
                onChange={value => setAnswer(value)}
            >
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
            </Slider>

            <View style={styles.minMax}>
                <Text>{min}</Text>
                <Text>{max}</Text>
            </View>
        </View>
    )
}

export default IntSlider

const styles = StyleSheet.create({
    container: {
        width: '70%',
        marginHorizontal: '15%'
    },
    minMax: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})