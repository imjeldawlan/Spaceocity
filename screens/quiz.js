import * as React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import quiz from '../quizdb';
import { AntDesign } from '@expo/vector-icons';



export default class QuizScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      score: 0,
      selected: '',
    };
  }
  componentDidMount = () => {
    var questionNumber = this.props.navigation.getParam('questionNumber');
    var score = this.props.navigation.getParam('score');
    if (questionNumber !== undefined) {
      this.setState({ questionNumber: questionNumber, score: score });
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
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
            <AntDesign name="home" size={24} color="white" />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 18,
              marginLeft: '40%',
            }}>
            Quiz
          </Text>
        </View>

        <ImageBackground
          source={require('../assets/quizbg.png')}
          style={{ width: '100%', height: '100%' }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'white',
              marginTop: '20%',
              width: '90%',
              height: '70%',
              borderRadius: 20,
              marginHorizontal: '5%',
              padding: 10,
            }}>
            <Text style={{ alignSelf: 'center' }}>
              {quiz[this.state.questionNumber].question}
            </Text>

            <TouchableOpacity
              style={{
                marginTop: 10,
                borderWidth: 1,
                width: '70%',
                height: 30,
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor:
                  this.state.selected ===
                  quiz[this.state.questionNumber].option1
                    ? 'lightblue'
                    : 'white',
              }}
              onPress={() => {
                this.setState({
                  selected: quiz[this.state.questionNumber].option1,
                });
              }}>
              <Text>{quiz[this.state.questionNumber].option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: '70%',
                height: 30,
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 15,
                backgroundColor:
                  this.state.selected ===
                  quiz[this.state.questionNumber].option2
                    ? 'lightblue'
                    : 'white',
              }}
              onPress={() => {
                this.setState({
                  selected: quiz[this.state.questionNumber].option2,
                });
              }}>
              <Text>{quiz[this.state.questionNumber].option2}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 10,
                borderWidth: 1,
                width: '70%',
                height: 30,
                paddingBottom: 10,
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor:
                  this.state.selected ===
                  quiz[this.state.questionNumber].option3
                    ? 'lightblue'
                    : 'white',
              }}
              onPress={() => {
                this.setState({
                  selected: quiz[this.state.questionNumber].option3,
                });
              }}>
              <Text>{quiz[this.state.questionNumber].option3}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginTop: 10,
                borderWidth: 1,
                width: '70%',
                height: 30,
                alignItems: 'center',
                borderRadius: 15,
                backgroundColor:
                  this.state.selected ===
                  quiz[this.state.questionNumber].option4
                    ? 'lightblue' //"#BF953F,#FCF6BA"
                    : 'white',
              }}
              onPress={() => {
                this.setState({
                  selected: quiz[this.state.questionNumber].option4,
                });
              }}>
              <Text>{quiz[this.state.questionNumber].option4}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#B1D4E0',
                width: 100,
                height: 34,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',

                borderColor: 'blue',
                borderWidth: 1,
                padding: 6,
              }}
              onPress={() => {
                //calculate score
                if (this.state.selected !== '') {
                  var score =
                    this.state.selected ===
                    quiz[this.state.questionNumber].answer
                      ? this.state.score + 1
                      : this.state.score;
                } else {
                  alert('Please select an option!');
                  return;
                }

                //navigate
                if (this.state.questionNumber < 9) {
                  this.props.navigation.push('QuizScreen', {
                    questionNumber: this.state.questionNumber + 1,
                    score: score,
                  });
                } else {
                  this.props.navigation.push('FinalScore', { score: score });
                }
              }}>
              <Text> Next</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
