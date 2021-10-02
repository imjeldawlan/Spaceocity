import * as React from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default class FinalScore extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
          colors={["#E9F8FF", "#90B2D8", "#C1E3FF", "transparent"]}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: 80,
              paddingTop: 36,
              paddingHorizontal: 20,
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
              Result
            </Text>
          </View>

          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Entypo name="star" size={24} color="yellow" />

            <View
              style={{
                backgroundColor: "#0C2D48",
                width: "70%",
                borderRadius: 10,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                  marginVertical: 15,
                }}
              >
                Congrats!
              </Text>
              <Ionicons name="ios-trophy-outline" size={34} color="yellow" />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  marginVertical: 15,
                }}
              >
                Your Final Score is {this.props.navigation.getParam("score")}
              </Text>
            </View>
            <Entypo name="star" size={24} color="red" />

            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#B1D4E0",
                width: 100,
                height: 34,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",

                borderColor: "blue",
                borderWidth: 1,
                padding: 6,
              }}
              onPress={() => {
                this.props.navigation.popToTop();
              }}
            >
              <Text> Back</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
