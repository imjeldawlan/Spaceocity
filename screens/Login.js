import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import firebase from 'firebase';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pwd: '',
    };
  }
  login = (email, password) => {
    if(email && password){
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
          this.props.navigation.navigate('Dashboard');
        Alert.alert('Successfully Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
    }
    else{
      alert("Please fill all the fields")
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../assets/bg.png')} style={{width:"99.9%", height:"90%"}}>
          <View>
            <Text
              style={{
                marginTop: '65%',
                fontSize: 22,
                fontWeight: 'bold',
                marginLeft: '5%',
              }}>
              Login
            </Text>
            <Text style={{ fontSize: 16, marginLeft: '5%' }}>
              Enter your details to continue
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              width: '80%',
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: 'row',
              marginHorizontal: 30,
              alignItems: 'center',
              borderBottomColor: 'blue',
            }}>
            <Feather name="mail" size={24} color="blue" />
            <TextInput
              style={{ width: '90%', paddingLeft: 10 }}
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
              width: '80%',
              height: 30,
              paddingLeft: 4,
              marginTop: 30,
              flexDirection: 'row',
              marginHorizontal: 30,
              alignItems: 'center',
              borderBottomColor: 'blue',
            }}>
            <Feather name="lock" size={24} color="blue" />
            <TextInput
              style={{ width: '90%', paddingLeft: 10 }}
              placeholder="Password"
              placeholderTextColor="blue"
              secureTextEntry={true}
              onChangeText={(val) => {
                this.setState({ pwd: val });
              }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              marginTop: 50,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
              
                this.login(this.state.email, this.state.pwd);
              }}
              style={{
                marginTop: 15,
                alignSelf: 'center',
                borderWidth: 1,
                width: '60%',
                height: 30,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <LinearGradient
                colors={['#F02FC2', '#6094EA']}
                style={{ width: '100%', height: '100%',justifyContent:'center' }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text
              style={{
                alignSelf: 'center',
                marginTop: '10%',
                textAlign:'center'
              }}>
              New User? Create an account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Reset')}>
            <Text
              style={{
                alignSelf: 'center',
                textAlign:'center',
                marginTop:10
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

