import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icons from react-native-vector-icons

const QuizCard = ({
  quiz,
  handleCompetition
}) => {
  const navigation = useNavigation()
  const now = new Date();
  const startTime = new Date(quiz.startDate);
  const endTime = new Date(quiz.endDate);
  const remainingMinutes = Math.max(0, (endTime - now) / (1000 * 60));
  
  // Format start and end dates (e.g., "Sep 10 - Sep 15")
  const formattedDates = `${startTime.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })} - ${endTime.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })}`;
// const formattedDates ='fjhskljdf'
  return (
    <>

    { quiz.registered === true && quiz.completed === false ? 
      <TouchableOpacity onPress={() => handleCompetition(quiz)} >
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{quiz.title}</Text>
        <Text style={styles.description}>{quiz.description}</Text>
        <Text style={styles.duration}>Duration : {quiz.duration} Minutes</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.dateInfo}>
          <Image
            source={require('../../../../assets/quize_card/calender.png')}
            style={{width: 18, height: 18, marginRight: 5}}
          />
          <Text style={styles.dateText}>{formattedDates}</Text>
        </View>
        <View style={styles.timeInfo}>
          <Image
            source={require('../../../../assets/quize_card/test.png')}
            style={{width: 21, height: 21}}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
     : ''}
    { quiz.registered === true && quiz.completed === true ? 
     <TouchableOpacity onPress={() => handleCompetition(quiz)} >
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{quiz.title}</Text>
        <Text style={styles.description}>{quiz.description}</Text>
        <Text style={styles.duration}>Duration : {quiz.duration} Minutes</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.dateInfo}>
          <Image
            source={require('../../../../assets/quize_card/calender.png')}
            style={{width: 18, height: 18, marginRight: 5}}
          />
          <Text style={styles.dateText}>{formattedDates}</Text>
        </View>
        <View style={styles.timeInfo}>
          <Image
            source={require('../../../../assets/quize_card/check.png')}
            style={{width: 21, height: 21}}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
     : ''}
    { quiz.registered === false && quiz.completed === false ? 
     <TouchableOpacity onPress={() => handleCompetition(quiz)} >
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{quiz.title}</Text>
        <Text style={styles.description}>{quiz.description}</Text>
        <Text style={styles.duration}>Duration : {quiz.duration} Minutes</Text>
      </View>

      <View style={styles.details}>
        <View style={styles.dateInfo}>
          <Image
            source={require('../../../../assets/quize_card/calender.png')}
            style={{width: 18, height: 18, marginRight: 5}}
          />
          <Text style={styles.dateText}>{formattedDates}</Text>
        </View>
        <View style={styles.timeInfo}>
          <Image
            source={require('../../../../assets/quize_card/new1.png')}
            style={{width: 22, height: 22}}
          />
        </View>
      </View>
    </View>
    </TouchableOpacity>
     : ''}

     </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
  },
  header: {
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  icon: {
    marginRight: 4,
  },
  dateText: {
    fontSize: 16,
    color: 'gray',
  },
  remainingTimeText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default QuizCard;

// {  registered === true && completed === false ? <View style={styles.timeInfo}>
// <Image
//           source={require('../../../../assets/quize_card/test.png')}
//           style={{ width: 21, height: 21 }}
//         />

// </View> : ''}
// {  registered === true && completed === true ? <View style={styles.timeInfo}>
// <Image
//           source={require('../../../../assets/quize_card/check.png')}
//           style={{ width: 21, height: 21 }}
//         />

// </View> : ''}
// {  registered === false && completed === false ? <View style={styles.timeInfo}>
// <Image
//           source={require('../../../../assets/quize_card/new1.png')}
//           style={{ width: 25, height: 25 }}
//         />

// </View> : ''}
