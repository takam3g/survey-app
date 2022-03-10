import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SurveyScreen from '../screens/SurveyScreen';


const Stack = createNativeStackNavigator();

function AppStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} 
                    options={{
                        title: 'Surveys'
                    }}
                />
                <Stack.Screen 
                    name='Survey' 
                    component={SurveyScreen} 
                    options={({ route }) => ({
                        title: route.params.survey,
                        headerBackTitle: 'Survey List'
                    })} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppStack
