import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import SpaceCraftScreen from './screens/SpaceCraft';
import StartMapScreen from './screens/StartMap';
import DailyPicScreen from './screens/DailyPic';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.screen name="Home" component={HomeScreen}/>
        <Stack.screen name="StarMap" component={StartMapScreen}/>
        <Stack.screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.screen name="SpaceCraft" component={SpaceCraftScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

