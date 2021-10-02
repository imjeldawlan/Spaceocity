import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";



export default class quizScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View
          style={{
            width: "100%",
            height: 80,
            paddingTop: 36,
            paddingHorizontal: 10,
            backgroundColor: "#145DA0",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Dashboard");
            }}
          >
            <AntDesign name="home" size={24} color="white" />
          </TouchableOpacity>

          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginLeft: "40%",
            }}
          >
            Explore
          </Text>
        </View>

        <ImageBackground
          source={require("../assets/xx.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Explore");
            }}
            style={{
              alignSelf: "center",
              borderWidth: 1,
              width: "60%",
              height: 30,
              borderRadius: 5,
              justifyContent: "center",
              position:'absolute',
              bottom:170
        
            }}
          >
            <LinearGradient
              colors={["#F02FC2", "#6094EA"]}
              style={{ width: "100%", height: "100%",justifyContent:'center' }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Let's Start
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
