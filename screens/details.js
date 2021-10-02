import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import spaceCards from '../localdb';
import { AntDesign } from '@expo/vector-icons';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as Speech from 'expo-speech';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class Details extends React.Component {
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
  componentDidMount = () => {
    var id = this.props.navigation.getParam('id');
    var temp = spaceCards.filter((item) => {
      return item.id === id;
    });

    this.setState({ card: temp });
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.card.map((item) => {
          return (
            <ScrollView key={item.id}>
              <View
                style={{
                  width: '100%',
                  height: 80,
                  paddingTop: 36,
                  paddingHorizontal: 20,
                  backgroundColor: '#145DA0',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => {
                   this.props.navigation.navigate('Dashboard');
                  }}>
                  <AntDesign name="home" size={24} color='white' />
                </TouchableOpacity>

                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    marginLeft: '40%',
                  }}>
                  Details
                </Text>
              </View>

              <View>
                <Image
                  source={{uri:item.other_image}}
                  style={{ width: '100%', height: 200 }}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontSize: 30,
                      position: 'absolute',
                      color: 'white',
                      bottom: 10,
                      paddingHorizontal:"5%",
                      width:"90%"
                    }}>
                    {item.title}
                  </Text>
                
                  <TouchableOpacity
                    onPress={() => {
                      this.texttospeech(item.content);
                    }}
                    style={{ position: 'absolute', bottom: 10, right: 10 }}>
                    <Feather name="volume-2" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text style={{ fontSize: 18, padding: 15, textAlign: 'center' }}>
                {item.content}
              </Text>

              <Text style={{ fontSize: 18, padding: 10, fontWeight: 'bold' }}>
                To help you understand more:
              </Text>
              <Video
                style={{ alignSelf: 'center', width: 320, height: 300 }}
                source={{uri:item.video}}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => {
                  this.setState({ status: status });
                }}  
              />
            </ScrollView>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
