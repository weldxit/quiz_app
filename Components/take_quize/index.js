import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet , ScrollView, SafeAreaView,Alert, Image } from 'react-native';

import { RadioButton } from 'react-native-paper';

const TakeExam = ({route, navigation}) => {
    const quizeData = route.params?.quizeData 
    console.log(quizeData)
    const duration = quizeData.duration
  const [questions, setQuestions] = useState([
    {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
        selectedAnswer: null,
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        correctAnswer: 'Mars',
        selectedAnswer: null,
      },
      {
        id: 3,
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
        correctAnswer: 'Blue Whale',
        selectedAnswer: null,
      },
      {
        id: 4,
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
        selectedAnswer: null,
      },
      {
        id: 5,
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Leo Tolstoy'],
        correctAnswer: 'William Shakespeare',
        selectedAnswer: null,
      },
      {
        id: 6,
        question: 'What is the chemical symbol for gold?',
        options: ['Ag', 'Au', 'Fe', 'Hg'],
        correctAnswer: 'Au',
        selectedAnswer: null,
      },
      {
        id: 7,
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'South Korea', 'Japan', 'Vietnam'],
        correctAnswer: 'Japan',
        selectedAnswer: null,
      },
      {
        id: 8,
        question: 'What is the largest organ in the human body?',
        options: ['Heart', 'Brain', 'Skin', 'Liver'],
        correctAnswer: 'Skin',
        selectedAnswer: null,
      },
      {
        id: 9,
        question: 'Which gas is essential for respiration?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Oxygen',
        selectedAnswer: null,
      },
      {
        id: 10,
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Fuji', 'Mount Everest', 'Mount McKinley'],
        correctAnswer: 'Mount Everest',
        selectedAnswer: null,
      },
    // Add more questions here...
  ]);
  const [timeRemaining, setTimeRemaining] = useState(duration * 60); // 30 minutes in seconds
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      } else {
        clearInterval(countdownInterval);
        // Handle quiz submission when time runs out
        Alert.alert('Time is up!', 'Answers have been submitted.' );
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeRemaining, quizeData]); 

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  const handleOptionSelect = (questionId, option) => {
    // Update the selected answer for the given question
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, selectedAnswer: option } : q
      )
    );
  };

  const handleSubmit = () => {
    // Send selected answers to an endpoint (e.g., a server API)
    // You would typically make a network request here
    navigation.navigate('quizelist', {autoButtonClick:true , filter:'completed', qna: questions})
    
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.timeremaining}>
        <Text style={styles.time}>Time Remaining - {formatTime(timeRemaining)}</Text>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      {questions.map((question, index) => (
        <View key={question.id} style={styles.questionContainer}>
          <Text>{index+1} - {question.question}</Text>
          {question.options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionSelect(question.id, option)}
              style={styles.optionRow}
            >
              <RadioButton.Android
                value={option}
                status={
                  question.selectedAnswer === option ? 'checked' : 'unchecked'
                }
                color="deepskyblue"
              />
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Button title="Submit Answers" onPress={handleSubmit} />
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeremaining:{
    display:'flex',

  },
  time: {
    paddingLeft:'55%'
  }
});
export default TakeExam;
