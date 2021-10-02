import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomSideBarMenu from './customdrawer';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import LoadingScreen from '../screens/LoadingScreen';
import Profile from '../screens/Profile';
import QuizScreen from '../screens/quiz';
import Reset from '../screens/reset';
import Categories from '../screens/categories';
import Details from '../screens/details';
import FinalScore from '../screens/finalScore';
import Explore from '../screens/explore';
import About from '../screens/aboutus';
import Mid from '../screens/mid';
 
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';

const CategoryStack = createStackNavigator({
  Dashboard: { screen: Dashboard, navigationOptions: { headerShown: false } },
  Categories: { screen: Categories, navigationOptions: { headerShown: false } },
  Details: { screen: Details, navigationOptions: { headerShown: false } },
});

const QuizStack = createStackNavigator({
  QuizScreen: { screen: QuizScreen, navigationOptions: { headerShown: false } },
  FinalScore: { screen: FinalScore, navigationOptions: { headerShown: false } },
});
const ExploreStack = createStackNavigator({
  Mid:{ screen:Mid, navigationOptions: {headerShown:false}},
 Explore:{ screen:Explore, navigationOptions: {headerShown:false} },

});
const Tab = createBottomTabNavigator(
  {
    Dashboard: {
      screen: CategoryStack,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: <AntDesign name="home" size={24} color="black" />,
      },
    },
    QuizScreen: {
      screen: QuizStack,
      navigationOptions: {
        title: 'Quiz',
        tabBarIcon: <AntDesign name="Trophy" size={24} color="black" />,
      },
    },
  
    Explore: {
      screen: ExploreStack,
      navigationOptions: {
        title: 'Explore',
        tabBarIcon: <AntDesign name="rocket1" size={24} color="black" />,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: <AntDesign name="user" size={24} color="black" />,
      },
    },
  }
);

const Drawer = createDrawerNavigator({
  Dashboard: { screen: Tab },
  About: { screen: About },
},
{
  contentComponent: CustomSideBarMenu
},);

const screens = {
  LoadingScreen: { screen: LoadingScreen },
  Reset: { screen: Reset },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Drawer: { screen: Drawer },
  
};

const TabNavigator = createSwitchNavigator(screens);

export default createAppContainer(TabNavigator);
