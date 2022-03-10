import { StatusBar } from 'expo-status-bar';
import AppStack from './src/components/stacks/AppStack'
import { NativeBaseProvider } from 'native-base'

const App = () => {
  return (
    <>
      <NativeBaseProvider>
        <AppStack />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </>
  )
}

export default App

