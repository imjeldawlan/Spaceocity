import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import cards from '../cards';
import { AntDesign } from '@expo/vector-icons';

export default class Dashboard extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>

          <View style={styles.header}>
          <TouchableOpacity  onPress={()=>{
  this.props.navigation.openDrawer()
             }}
          >
            <AntDesign name="bars" size={30} color="white" />
             </TouchableOpacity>
             <TouchableOpacity 
             onPress={()=>{
  this.props.navigation.navigate('Profile')
             }}>
            <Image
              source={require('../assets/pfp.jpeg')}
              style={{ width: 45, height: 45, borderRadius: 50, marginBottom:20 }}
            />
           </TouchableOpacity>
          </View>

          <View style={styles.input}>
            <TextInput style={{ width: '90%' }} placeholder="Search" />
            <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: '#0C2D48',
              width: '90%',
              height: 170,
              marginHorizontal: 20,
              borderRadius: 10,
              flexDirection: 'row',
              marginVertical: 10,
              
            }}>
            <Image
              source={require('../assets/header.png')}
              style={{ width: '60%', height: 150, borderRadius: 10 }}
            />
            <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20, width:"40%", color: 'white', }}>
              Hello, what do you wanna learn today?
            </Text>
          </View>

          <Text
            style={{
              fontWeight: 'bold',
              alignItems: 'center',
              fontSize: 20,
              marginBottom: 10,
              marginLeft: '10%',
            }}>
            Topics for you:
          </Text>

          <FlatList
            horizontal={true}
            data={cards}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Categories', {
                      category: item.title,
                    })
                  }
                  style={{
                    backgroundColor:'#2E8BC0',
                    width: 200,
                    height: 300,
                    flex: 1,
                    margin: 10,
                    borderRadius: 20,
                  }}>

                  <Image
                    source={item.image}
                    style={{
                      width: '90%',
                      height: '70%',
                      borderRadius: 20,
                      alignSelf: 'center',
                      marginTop:10
                    }}
                  />

                  <Text
                    style={{
                      color: 'white',
                      fontSize: 26,
                      textAlign: 'center',
                      marginTop:5
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      textAlign: 'center',
                    }}>
                    Let's dive into it!
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flexDirection: 'row',
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  borderRadius:20
  },
  header: {
    width: '100%',
    height: 100,
    paddingTop: 36,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor:'#145DA0'
  },
});
