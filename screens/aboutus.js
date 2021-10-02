import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }
  render() {
    return (
      <View styles={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/quizbg.png")}
          style={{ width: "100%", height: "100%" }}
        >
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
              About Us
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#0C2D48",
              borderRadius: 10,
              alignSelf: "center",
              paddingVertical:30,
              width:"90%",
              paddingHorizontal:20,
              marginTop:20
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              What we do?
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                marginTop:10
              }}
            >
              Dream deep, for every dream precedes the goal, goals are dreams
              with deadlines
            </Text>
          </View>

       
            <View
              style={{
                backgroundColor: "#0C2D48",
                width: "90%",
                borderRadius: 10,
                alignSelf: "center",
                paddingHorizontal:20,
                paddingVertical:30,
                marginTop:20
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Welcome to spaceocity
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 10,
                }}
              >
                This learning app is built by Skandini Nandan, a student of
                WhiteHat Jr. Having an aim to build an application to visit the
                astronomical concepts and learn about them, at the comfort of
                your home.
              </Text>

              <Text style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 10,
                }}>Happy Learning!</Text>
            </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
