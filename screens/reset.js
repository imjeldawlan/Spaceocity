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

import firebase from "firebase";

export default class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/resetpfp.png")}
          style={{ width: "100%", height: "50%" }}
        />

        <View
          styles={{
            flex: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>To reset your password: </Text>
          <TextInput
            style={{
              width: "80%",
              height: 30,
              borderWidth: 1,
              alignSelf: "center",
              borderRadius: 6,
              paddingLeft: 10,
              marginTop: 10,
            }}
            placeholder="Enter your email"
            onChangeText={(text) => this.setState({ email: text })}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              width: "50%",
              height: 30,
              padding: 5,
              borderRadius: 5,
              alignSelf: "center",
              marginTop: 30,
            }}
            onPress={() => {
              if (this.state.email === "" || this.state.email.length <= 10) {
                alert("Please enter a valid Email");
              } else {
                firebase
                  .auth()
                  .sendPasswordResetEmail(this.state.email)
                  .then(() => {
                    alert("Password Reset Email Sent!");
                  })
                  .catch((err) => {
                    alert(err.message);
                  });
              }
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Send Reset Email
            </Text>
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
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: 1,
});
