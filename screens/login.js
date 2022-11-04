import React, { Component } from "react";
import { Alert } from "react-native";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { Avatar, ListItem, Icon } from "react-native-elements";
import db from "../config";
import firebase from "firebase";

export default class LoginScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            email : "",
            password : ""
        }
    }
    handleLogin=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
    // Signed in 
    this.props.navigation.navigate("BottomTab")
    // ...
  })
  .catch((error) => {
    Alert.alert(error.message)
    // ..
  });
    }
    render(){
        const{email,password} = this.state
        return(
            <KeyboardAvoidingView style={styles.contaniner}>
                <View style={styles.lowerContainer}>
                <TextInput
                style={styles.textInput}
                onChangeText={(text)=>{
                    this.setState({email:text})
                }}
                placeHolder={"Enter Email Address"}
                placeHolderTextColor={"white"}
                autoFocus
                />
                <TextInput
                 style={[styles.textInput,{marginTop:20}]}
                 onChangeText={(text)=>{
                    this.setState({password:text})
                }}
                placeHolder={"Enter Password"}
                placeHolderTextColor={"white"}
                secureTextEntry
                />
                <TouchableOpacity 
                 style={[styles.button,{marginTop:20}]}
                onPress={()=>{this.handleLogin(email,password)}}>
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#FFFFFF" },
    lowerContainer: { flex: 0.5, alignItems: "center" },
    textinput: { width: "75%", height: 55, padding: 10, borderColor: "#FFFFFF", borderWidth: 4, borderRadius: 10, fontSize: 18, color: "#FFFFFF", fontFamily: "Rajdhani_600SemiBold", backgroundColor: "#5653D4" },
    button: { width: "43%", height: 55, justifyContent: "center", alignItems: "center", backgroundColor: "#F48D20", borderRadius: 15 },
    buttonText: { fontSize: 24, color: "#FFFFFF", fontFamily: "Rajdhani_600SemiBold"}
})