//10 rcf- short cut for react function code 
import { NavigationHelpersContext } from '@react-navigation/native'
import React from 'react'
//11 import some text, View 
//View is same as DIV
// the extenstion ES7 is from react so it creates div vs view
import {Text, View, Button } from 'react-native'

// 17 now we will go to the App.js to import our button function 

//15 inside the function landing() it will recive a prop 
//the prop inside the Landing is gonna be called 'navigation'
// the navigation will give us access to the router or aka the navigation container
export default function Landing({navigation}){
  return (
      //12 change the div to view and add some styling 
      // 13 style it with flex and justifyContent
    <View style = {{ flex: 1, justifyContent: 'center'}}>
        <Button //14 button has title and onPress + arrow fuction
            //the arrow function is connected to the Navigation container inside the App.js file
            //'=>' will recive a 'prop' = is argument 
            title="Register"
            //16 the arrow fun => will call the navigation.navigate()
            //('the name of the route we want to go to') aka "Register"
            onPress={() => navigation.navigate("Register")}/>

        <Button //made the same button code for the login as well 
                title="Login"
                onPress={() => navigation.navigate("Login")} />
                
    </View>
    
  )
}
