import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CongratulationCard from './congratulations';
import NotEligibleCard from './sorry';

const AnswerScreen = ({ route, navigation }) => {
 quizData= [  {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctAnswer: 'Paris',
        selectedAnswer: 'Paris',
      },
      {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        correctAnswer: 'Mars',
        selectedAnswer: 'Mars',
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
        selectedAnswer: 'Carbon Dioxide',
      },
      {
        id: 5,
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Leo Tolstoy'],
        correctAnswer: 'William Shakespeare',
        selectedAnswer: 'William Shakespeare',
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
        selectedAnswer: 'Japan',
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
        selectedAnswer:'Mount Everest',
      },] // Initialize as an empty object if not provided
    const qna = route.params?.qna
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showresult, setShowResult] = useState(false)
  const [pass, setPass] = useState(true)
  const round2 =[{
    title: 'Quiz 1',
    description: 'This is the first quiz. Test your knowledge!',
    startDate: '2023-09-10T08:00:00.000Z',
    endDate: '2023-09-15T23:59:59.999Z',
    duration: 45,
    firstPrize: 'Gold Badge and $1000',
    secondPrize: 'Silver Badge and $500',
    thirdPrize: 'Bronze Badge and $250',
    registered: true,
    completed: true
  }]

  const handleShow = () =>{
    setShowResult(!showresult)
  }
  const onRegisterPress = ()=>{
    navigation.navigate('registerquize', {quizData:round2})
  }
  // Calculate the number of correct answers
  useEffect(() => {
    if (quizData && quizData.length > 0) {
      let count = 0;
      quizData.forEach((question) => {
        if (question.selectedAnswer === question.correctAnswer) {
          count++;
        }
      });
      setCorrectAnswers(count);
    }
  }, [quizData]);

  // Render each question, chosen option, and correct answer
  const renderQuestionItem = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      <Text style={styles.optionText}>Chosen Option: {item.selectedAnswer}</Text>
      <Text style={styles.optionText}>Correct Answer: {item.correctAnswer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>
        {quizData ? `Correct Answers: ${correctAnswers} / ${quizData.length}` : 'No quiz data provided'}
      </Text>
      
     {showresult? 
     <FlatList
        data={quizData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderQuestionItem}
        showsVerticalScrollIndicator={false}
      /> : ''}

      {
        !showresult && pass===true? 
       <CongratulationCard onRegisterPress={onRegisterPress}/>
        : <NotEligibleCard />
      }
      <TouchableOpacity onPress={handleShow} style={styles.showresult}>
        <Text style={styles.showtext}>{ !showresult ? 'See Your Submission' : 'Hide'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent:'space-around'
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 14,
  },
  showresult: {

  },
  showtext: {
    textAlign:'center',
    color:'blue'
  }
});

export default AnswerScreen;
