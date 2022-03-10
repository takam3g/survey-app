import { View, Text, Button, StyleSheet } from 'react-native'
import SURVEYS from '../../config/config.json'


const HomeScreen = ({navigation}) => {

    //Get survey titles to display the survey list
    //And later on to get selected survey in Survey page
    const surveyList = Object.keys(SURVEYS)


    return (
        <View style={styles.container}>
            {surveyList.map((survey, index) => (
                <View style={styles.list} key={index} >
                    <Text style={styles.text}>{survey}</Text>
                    <View style={styles.button}>
                        <Button
                            title='>'
                            color='#fff'
                            onPress={() => {
                                navigation.navigate('Survey', {survey: survey})
                            }}
                        />
                    </View>
                </View>
            ))}
        </View>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    container: {
        padding: '15%',
    },
    list: {
        display: 'flex',
        flexDirection: 'row',    
        backgroundColor: '#e3dfde',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        borderRadius: 25,
        paddingVertical: 20,
    },
    text: {
        fontSize: 22,
    },
    button: {
        backgroundColor: '#2c3e50',
        borderRadius: 100,
        width: 35,
        height: 35,
    }
})