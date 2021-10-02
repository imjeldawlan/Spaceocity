import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as Speech from "expo-speech";

export default class Explore extends React.Component {
  texttospeech = (s) => {
    Speech.speak(s);
  };

  constructor() {
    super();
    this.state = {
      card: [],
      playSound: false,
    };
  }
  texttospeech = (s) => {
    if (this.state.playSound === false) {
      Speech.speak(s);
      this.setState({ playSound: true });
    } else {
      Speech.stop();
      this.setState({ playSound: false });
    }
  };

  render() {
    return (
      <View
        styles={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
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
            Explore
          </Text>
        </View>

        <View>
          <ScrollView>
            <ImageBackground
              source={require("../assets/bg2.jpg")}
              style={{ width: 420, height: 900 }}
            >
              <View style={{backgroundColor:'white', marginTop:10}}>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "purple",
                  }}
                >Touch Animation to know more!
                </Text>
              </View>
              <ScrollView horizontal style={{ width: "100%", height: "100%" }}>
                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "The sun is the biggest star. It is closer to earth than all other stars.It is approximately 391 times as far away from earth as the moon.Its distance from the earth changes at different points during the year.It is 30,000 light years away from the center of The Milky Way. Light from the sun takes eight minutes and twenty seconds to reach the earth.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    styles={{
                      borderRadius: 10,
                      borderColor: "white",
                    }}
                    source={{
                      uri: "https://c.tenor.com/XDFc6gM_YuAAAAAC/sun-burning.gif",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />

                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Sun
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Mercury is the closest planet to the Sun and is also the smallest of the eight planets in our solar system. For every 2 orbits of the Sun, which takes around 88 Earth days, Mercury completes three rotations of its axis. It is gravitationally locked and this rotation is unique to the solar system.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://cronodon.com/images/mercury-3.gif",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Mercury
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Venus is the second planet from the Sun and the third brightest object in Earth's sky after the Sun and Moon. It is sometimes referred to as the sister planet to Earth, because their size and mass are so similar. Venus is also the closest planet to Earth. The surface of Venus is hidden by an opaque layer of clouds which are formed from sulphuric acid. The planet is named for Venus, the Roman goddess of love and beauty and is the second largest terrestrial planet.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media2.giphy.com/media/l0MYB89UFsVqLY5oc/giphy.gif?cid=ecf05e47s80z0a6gdzokc2vf5q5phhh61yxkg3pba08hvhix&rid=giphy.gif&ct=g",
                    }}
                    style={{ marginTop: 70, width: 390, height: 400 }}
                  />

                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Venus
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Earth is the third planet from the Sun and largest of the terrestrial planets. Surprisingly, while it is only the fifth largest planet in terms of size and mass, it is the densest (5,513 kg/m3) of all the planets. Earth is the only planet in the solar system not named after a mythological being. Instead, its name is derived from the Old English word ertha and the Anglo-Saxon word erda which means ground or soil.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://thumbs.gfycat.com/DetailedLoathsomeAmericangoldfinch-size_restricted.gif",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Earth
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Mars is the fourth planet from the Sun and last of the terrestrial planets. Like the rest of the planets in the solar system (except Earth), Mars is named after a mythological figure - the Roman god of war. In addition to its official name, Mars is sometimes called the Red Planet because of the brownish-red color of its surface. Mars is the second smallest planet in the solar system behind Mercury.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media4.giphy.com/media/13cxHLqRer5q6s/giphy.gif?cid=ecf05e47ge5l9kha1vqozt57j9qqcnp8ludx1u9isaoniakv&rid=giphy.gif&ct=g",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Mars
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Named after the Roman king of the gods, Jupiter is fitting of its name. With a mass of 1.90 x 1027 kg and a mean diameter of 139,822 km, Jupiter is easily the largest and most massive planet in the Solar System. To put this in perspective, it would take 11 Earths lined up next to each other to stretch from one side of Jupiter to the other and it would take 317 Earths to equal the mass of Jupiter.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media4.giphy.com/media/dox6SHZcqHgOs/giphy.gif?cid=ecf05e47sfdje2p2xzapk03v8du0930lupztemzainez4a3n&rid=giphy.gif&ct=g",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Jupiter
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Saturn is the sixth planet from the Sun and second largest planet of the Solar System in terms of diameter and mass. If compared, it is easy to see why Saturn and Jupiter have been designated as relatives. From atmospheric composition to rotation, these two planets are extremely similar. Because of these factors, Saturn was named after the father of the god Jupiter in Roman mythology.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://media4.giphy.com/media/3o7buctjKD8g5r4544/giphy.gif?cid=ecf05e47zrn145f07u1a1udnit9fr2qwi0q88cavkn6six1z&rid=giphy.gif&ct=g",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Saturn
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Uranus, named after the the father of the Roman god Saturn, is the seventh planet in the Solar System and third of the gas giants. It is the third largest planet by diameter, yet fourth most massive.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://i.gifer.com/PAx.gif",
                    }}
                    style={{ marginTop: 70, width: 340, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Uranus
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    var speak =
                      "Neptune is the eighth planet from the Sun and last of the known planets. While it is the third largest planet with respect to mass, it is only the fourth largest in terms of diameter. Due to its blue coloration, Neptune was named after the Roman god of the Sea.";
                    this.texttospeech(speak);
                  }}
                >
                  <Image
                    source={{
                      uri: "https://thumbs.gfycat.com/GoodGlisteningDutchshepherddog-size_restricted.gif",
                    }}
                    style={{ marginTop: 70, width: 420, height: 400 }}
                  />
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Text
                      style={{
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "white",
                        fontSize: 30,
                        fontWeight: "bold",
                        borderRadius: 5,
                        marginTop: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      Neptune
                    </Text>
                  </View>
                </TouchableOpacity>
                <Image
                  source={{
                    uri: "http://weneedfun.com/wp-content/uploads/2016/08/The-Color-black-8.png",
                  }}
                  style={{ marginTop: 70, width: 60, height: 4 }}
                />
              </ScrollView>
            </ImageBackground>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
