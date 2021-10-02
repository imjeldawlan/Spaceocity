import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";

import firebase from "firebase";
import db from "../config";
export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      account: "",
      address: "",
      image: "",
      email: firebase.auth().currentUser.email,
      id: "",
    };
  }
  getProfile = async () => {
    var temp = await db
      .collection("users")
      .where("email", "==", this.state.email)
      .get();

    temp.docs.map((doc) => {
      var obj = doc.data();
      this.setState({
        image: obj.image,
        name: obj.name,
        address: obj.address,
        account: obj.account,
        id: doc.id,
      });
    });
  };

  componentDidMount = () => {
    this.getProfile();
  };
  onSubmit = async() => {
    await db.collection("users").doc(this.state.id).update({
      name: this.state.name,
      address: this.state.address,
      account: this.state.account
    });
    alert("Updated!")
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
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            margin: 10,
          }}
        >
          <Avatar
            rounded
            size="large"
            source={{
              uri: "https://images8.alphacoders.com/107/1076947.jpg",
            }}
          />
        </View>
        <Text style={{ paddingLeft: 40, fontWeight: "bold" }}>Username</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            alignSelf: "center",
            height: 30,
            backgroundColor: "#eee",
            borderColor: "#eee",
            paddingLeft: 10,
          }}
          placeholder="Enter a username"
          value={this.state.account}
          onChangeText={(val) => {
            this.setState({ account: val });
          }}
        />

        <Text style={{ paddingLeft: 40, fontWeight: "bold", marginTop: 20 }}>
          Name
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            alignSelf: "center",
            height: 30,
            backgroundColor: "#eee",
            borderColor: "#eee",
            paddingLeft: 10,
          }}
          value={this.state.name}
          placeholder="John Doe"
          onChangeText={(val) => {
            this.setState({ name: val });
          }}
        />

        <Text style={{ paddingLeft: 40, fontWeight: "bold", marginTop: 20 }}>
          Email
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            alignSelf: "center",
            height: 30,
            backgroundColor: "#eee",
            borderColor: "#eee",
            paddingLeft: 10,
          }}
          value={this.state.email}
          placeholder="johndoe@gmail.com"
        />
        <Text style={{ paddingLeft: 40, fontWeight: "bold", marginTop: 20 }}>
          Address
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: "80%",
            alignSelf: "center",
            height: 30,
            backgroundColor: "#eee",
            borderColor: "#eee",
            paddingLeft: 10,
          }}
          value={this.state.address}
          placeholder="35, Juhu, Mumbai"
          onChangeText={(val) => {
            this.setState({ address: val });
          }}
        />

        <TouchableOpacity
          style={{
            alignSelf: "center",
            marginTop: 40,
            borderColor: "hotpink",
            borderWidth: 1,
            borderRadius: 5,
            width: "40%",
            backgroundColor: "#145DA0",
            padding: 6,
          }}
          onPress={this.onSubmit}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignSelf: "center",
            marginTop: 10,
            borderColor: "hotpink",
            borderWidth: 1,
            borderRadius: 5,
            width: "40%",
            padding: 6,
          }}
          onPress={() => {
            this.props.navigation.navigate("Login");
            firebase.auth().signOut();
          }}
        >
          <Text style={{ textAlign: "center", color: "black"}}>Logout</Text>
        </TouchableOpacity>
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
    height: 80,
    paddingTop: 36,
    paddingHorizontal: 20,
    backgroundColor: "#145DA0",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    paddingHorizontal: 156,
    alignSelf: "center",
    alignItems: "center",
    marginRight: 1,
  },
});
