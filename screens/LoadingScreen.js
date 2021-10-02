import * as React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

export default class LoadingScreen extends React.Component {
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('Dashboard');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };

  componentDidMount = () => {
    this.checkIfLoggedIn();
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
    justifyContent: 'center',
  },
});
