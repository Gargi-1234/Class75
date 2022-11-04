import React, { Component } from "react";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

import BottomTabNavigator from "./components/BottomTabNavigator";
import {createSwitchNavigator, createAppContainer} from "react-navigation"
import { LogBox } from "react-native";
import LoginScreen from "./screens/login"

LogBox.ignoreAllLogs();


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  login:{screen: LoginScreen},
  BottomTab : {screen: BottomTabNavigator}
},{intialRouteName : login})

const AppContainer = createAppContainer(AppSwitchNavigator)
