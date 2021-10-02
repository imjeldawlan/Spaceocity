import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import spaceCards from "../localdb";
import { FontAwesome5 } from "@expo/vector-icons";

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  componentDidMount = () => {
    var category = this.props.navigation.getParam("category");

    var temp = spaceCards.filter((item) => {
      return item.category === category;
    });
    this.setState({ categories: temp });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Dashboard");
            }}
          >
            <FontAwesome5 name="space-shuttle" size={24} color="white" />

            <Text
              style={{
                fontWeight: "bold",
                alignItems: "center",
                fontSize: 15,
                color: "white",
              
              }}
            >
              Categories
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <LinearGradient
            // Background Linear Gradient
            colors={["#2F1C53", "#A46DFF", "#F6D1FD", "transparent"]}
          >
            {this.state.categories.map((item) => {
              return (
                <View
                key = {item.id}
                  style={{
                    backgroundColor: "#EAFBFF",
                    width: "90%",
                    height: 120,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.other_image }}
                    style={{ width: "50%", height: "100%", borderRadius: 10 }}
                  />

                  <View style={{ alignSelf: "center", width: "50%" }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Details", {
                          id: item.id,
                        });
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    paddingTop: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#145DA0",
  },
});
