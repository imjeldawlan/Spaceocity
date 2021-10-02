import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

import db from "../config";
import firebase from "firebase";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      pwd: "",
      confirmPassword: "",
    };
  }

  signup = (emailId, password) => {
    if (
      this.state.name &&
      this.state.email &&
      this.state.pwd &&
      this.state.confirmPassword
    ) {
      if (this.state.pwd === this.state.confirmPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(emailId, password)
          .then((response) => {
            Alert.alert("User Added Successfully");
            var user = response.user;
            db.collection("users").add({
              email: emailId,
              name: this.state.name,
              address:"",
              account:""
            });

            this.props.navigation.navigate("Login");
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return alert(errorMessage);
          });
      } else {
        alert("Passwords don't match!");
      }
    } else {
      alert("Please enter all the fields");
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/bg.png")}
          style={{ width: "99.9%", height: "90%" }}
        >
          <Text
            style={{
              marginTop: "65%",
              fontSize: 22,
              fontWeight: "bold",
              marginLeft: "5%",
            }}
          >
            Sign Up
          </Text>
          <Text style={{ fontSize: 16, marginLeft: "5%" }}>
            Enter your details to continue
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              width: "80%",
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: "row",
              marginHorizontal: 30,
              alignItems: "center",
              borderBottomColor: "blue",
            }}
          >
            <Feather name="user" size={24} color="blue" />
            <TextInput
              style={{ width: "90%", paddingLeft: 10 }}
              placeholder="Name"
              placeholderTextColor="blue"
              onChangeText={(val) => {
                this.setState({ name: val });
              }}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              width: "80%",
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: "row",
              marginHorizontal: 30,
              alignItems: "center",
              borderBottomColor: "blue",
            }}
          >
            <Feather name="mail" size={24} color="blue" />
            <TextInput
              style={{ width: "90%", paddingLeft: 10 }}
              placeholder="Email"
              placeholderTextColor="blue"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              width: "80%",
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: "row",
              marginHorizontal: 30,
              alignItems: "center",
              borderBottomColor: "blue",
            }}
          >
            <Feather name="lock" size={24} color="blue" />
            <TextInput
              secureTextEntry={true}
              style={{ width: "90%", paddingLeft: 10 }}
              placeholder="Password"
              placeholderTextColor="blue"
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              width: "80%",
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: "row",
              marginHorizontal: 30,
              alignItems: "center",
              borderBottomColor: "blue",
            }}
          >
            <Feather name="lock" size={24} color="blue" />
            <TextInput
              secureTextEntry={true}
              style={{ width: "90%", paddingLeft: 10 }}
              placeholder="Confirm Password"
              placeholderTextColor="blue"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.signup(this.state.email, this.state.pwd);
            }}
            style={{
              marginTop: 30,
              alignSelf: "center",
              borderWidth: 1,
              width: "60%",
              height: 30,
              borderRadius: 5,
              justifyContent: "center",
            }}
          >
            <LinearGradient
              colors={["#F02FC2", "#6094EA"]}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              width: "40%",

              padding: 6,
            }}
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text
              style={{ textAlign: "center", color: "black", marginTop: 10 }}
            >
              Go back
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    justifyContent: "center",
  },
});
