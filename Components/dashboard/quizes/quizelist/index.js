import React , {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaProvider,
  View,
  Alert,
} from 'react-native';
import QuizCard from '../quize_card';
import {SafeAreaView} from 'react-native-safe-area-context';
export default function QuizeList({navigation, route}) {
  // const [registred, setRegistered] = useState([])
  // const [completed, setCompleted] = useState([])

 

  const quizzes = [
    {
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
    },
    {
      title: 'Quiz 2',
      description: 'Try out the second quiz and challenge yourself!',
      startDate: '2023-09-12T10:00:00.000Z',
      endDate: '2023-09-17T23:59:59.999Z',
      duration: 30,
      firstPrize: 'Gold Badge and $1000',
      secondPrize: 'Silver Badge and $500',
      thirdPrize: 'Bronze Badge and $250',
      registered: true,
      completed: false
    },
    {
      title: 'Quiz 3',
      description: 'Our third quiz is here. Can you ace it?',
      startDate: '2023-09-14T09:00:00.000Z',
      endDate: '2023-09-19T23:59:59.999Z',
      duration: 60,
      firstPrize: 'Gold Badge and $1000',
      secondPrize: 'Silver Badge and $500',
      thirdPrize: 'Bronze Badge and $250',
      registered: false,
      completed: false
    },
    {
      title: 'Quiz 4',
      description: 'Try out the second quiz and challenge yourself!',
      startDate: '2023-09-12T10:00:00.000Z',
      endDate: '2023-09-17T23:59:59.999Z',
      duration: 30,
      firstPrize: 'Gold Badge and $1000',
      secondPrize: 'Silver Badge and $500',
      thirdPrize: 'Bronze Badge and $250',
      registered: true,
      completed: true
    },
    {
      title: 'Quiz 5',
      description: 'Our third quiz is here. Can you ace it?',
      startDate: '2023-09-14T09:00:00.000Z',
      endDate: '2023-09-19T23:59:59.999Z',
      duration: 60,
      firstPrize: 'Gold Badge and $1000',
      secondPrize: 'Silver Badge and $500',
      thirdPrize: 'Bronze Badge and $250',
      registered: false,
      completed: false
    },
  ];
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
  const [filterquize, setFilterquize] = useState(quizzes)
 


  const handleFilter = async(filter) =>{
    var result = []
   if(filter==='registered'){
    quizzes.map((quize, id)=>{
      if(quize.registered === true && quize.completed === false){
        result.push(quize)
      }
    })
    setFilterquize(result)

   }
   
   else if(filter==='completed'){
    quizzes.map((quize, i)=>{
      if(quize.completed===true){
        result.push(quize)
      }
    })
    setFilterquize(result)
   }
   else{
    setFilterquize(quizzes)
   }
 
  }

  const handleCompetition = async (quiz) => {
    if(quiz.registered === false && quiz.completed === false){
      navigation.navigate('registerquize', {quizeData: quiz});
    }
    if(quiz.registered === true && quiz.completed === false){
      navigation.navigate('takeexam', {quizeData: quiz});
    }
    else if(quiz.registered === true && quiz.completed === true){
      navigation.navigate('showresult', {quizeData: quiz});
    }
  };
  useEffect(() => {
    if (route.params?.filter && route.params?.autoButtonClick) {
      handleFilter(route.params?.filter);
    }
  }, [route.params?.autoButtonClick, route.params?.filter ]);



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.filtercontainer}>
            <TouchableOpacity onPress={()=>handleFilter('')}>
            <View style={styles.rouded_text_container}>
            <Text  style={styles.rouded_text}>All Quizes</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('registered')}>
            <View style={styles.rouded_text_container}>

            <Text style={styles.rouded_text}>Registered</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>handleFilter('completed')}>
            <View style={styles.rouded_text_container}>
            <Text  style={styles.rouded_text}>Completed</Text>
            </View>
            </TouchableOpacity>
        </View>
        {filterquize.map((quiz, index) => (
        
            <QuizCard
              quiz={quiz}
              handleCompetition={()=>handleCompetition(quiz)}
              key={index}
            />
      
        ))}
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filtercontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
  
    margin:15

  },
  rouded_text_container:{
    borderWidth:1,
    width:'auto',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 10,
    padding:5
  }
});
