import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//1 googled react navigation and code this code + 
//2 npm install @react-navigation/native inside the project folder w/ git bash
import { NavigationContainer } from '@react-navigation/native';
// 23 imported and created a "createStackNavigator" and switched "native" to "stack"
// error ocurred for 23 because we didnt add npm install "@react-navigation/stack"

import { createStackNavigator } from '@react-navigation/stack';



//18 import the buttons and named it LandingScreens
import LandingScreen from './components/auth/Landing'


//navigation container, parents tag for every single route 
//4 creating a stack navigator for screens and routes 
const Stack = createStackNavigator();

//inorder to add the route, we must have components 
// inorder to receieve those parameters and everything else 
//5 in the off system we will have pre-routes for the landing pages
//5.5 where users can change between register and login 
//6 create a folder called components 
//7 create a folder auth inside the components folder
//8 create a file inside the auth folder called "Landing.js"
// 9 downlaod a extenstion inside the VSCode, 
//9.5 called ES7 react/redux/graphQL/React-Native snippets by dsznajder



export default function App() {
  return (
    <NavigationContainer>{ 
      //3 rest of your app code
      //19 created a initial landing route w/ Stack.Navigator
      //20 created a landing route"stack.screen" inside the stack.navigator 
      // 21 component "LandingScreen" will be called upon when the "Landing" route is called 
      // 22 options are customization that you can do to each and every screen 
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false}} />

      </Stack.Navigator>

      }</NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

