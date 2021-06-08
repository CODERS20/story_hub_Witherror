import * as React from 'react';
import {Text, View, Stylesheet, TouchableOpacity, Button,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      <View></View>
    )
  }
    
}

 const BottomTab = createBottomTabNavigator({
   Write_your_own_story:{screens:WriteStoryScreen},
   <Image source={require('./PROJECT_IMAGES/read.png')}/> :{screens:ReadStoryScreen}
 })

 const  AppContainer = createAppContainer(BottomTab);

 const styles = Stylesheet.create({
   
 })