import { View, Text, StyleSheet, FlatList, Button} from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react'
import { Alert } from 'react-native';

import ModalComponent from './payment_modal';
export default function RegisterQuize({route, navigation}) {
    const quizData = route.params?.quizeData ? route.params?.quizeData : {
      title: 'Quiz 4',
      description: 'This is the first quiz. Test your knowledge!',
      startDate: '2023-09-10T08:00:00.000Z',
      endDate: '2023-09-15T23:59:59.999Z',
      duration: 45,
      firstPrize: 'Gold Badge and $1000',
      secondPrize: 'Silver Badge and $500',
      thirdPrize: 'Bronze Badge and $250',
      registered: true,
      completed: true
    }
    
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      navigation.navigate('quizelist', { filter:'registered', autoButtonClick:true})
      setModalVisible(!isModalVisible);
    };
    const registeredStudents = [
        { id: 1, rule: 'The quiz will consist of multiple-choice questions (MCQs) and/or short-answer questions.' },
        { id: 2, rule: 'Participants will be provided with a specified time limit to answer each question.' },
        { id: 3, rule: 'The quiz may have multiple rounds, including preliminary and final rounds' },
        { id: 4, rule: 'Participants must refrain from using any external resources or assistance during the quiz.' },
        { id: 5, rule: 'Cheating or plagiarism will result in disqualification.' }
      ];
    const onRegisterPress = async()=>{
      setModalVisible(!isModalVisible);
    }

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
    {/* Quiz Details */}
    <View style={styles.quizDetails}>
      <Text style={styles.title}>{quizData.title}</Text>
      <Text style={styles.description}>{quizData.description}</Text>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Start Date:</Text>
        <Text style={styles.detailValue}>{quizData.startDate.slice(0,10)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>End Date:</Text>
        <Text style={styles.detailValue}>{quizData.endDate.slice(0,10)}</Text>
      </View>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Duration:</Text>
        <Text style={styles.detailValue}>{quizData.duration} minutes</Text>
      </View>
      <View style={styles.prizes}>
          <Text style={styles.prizesTitle}>Prizes:</Text>
          <Text style={[styles.prizeText]}>1st Prize: <Text style={{color:'#fcc200'}}>{quizData.firstPrize}</Text></Text>
          <Text style={[styles.prizeText]}>2nd Prize: <Text style={{color:'#838996'}}>{quizData.secondPrize}</Text></Text>
          <Text style={[styles.prizeText]}>3rd Prize: <Text style={{color:'#836953'}}>{quizData.thirdPrize}</Text></Text>
        </View>
    </View>
    
    {/* Registered Students */}
    <View style={styles.registeredStudents}>
      <Text style={styles.studentsTitle}>Rules & Guidelines</Text>
      <FlatList
        data={registeredStudents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.rules}> {item.id}. {item.rule}</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
    <View style={styles.checkbox_cont}>
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
  <Text>I Accept the guidelines</Text>
  </View>
    {/* Register Button */}
    <View style={styles.registerButton}>
      <Button title="Register" onPress={onRegisterPress} variant='text' color="#6b9ef5" disabled={!toggleCheckBox}/>
    </View>
    <ModalComponent isVisible={isModalVisible} toggleModal={toggleModal} />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    quizDetails: {
      marginBottom: 16,
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      borderWidth:1
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 8,
    },
    detailRow: {
      flexDirection: 'row',
      marginBottom: 4,
    },
    detailLabel: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
    },
    detailValue: {
      flex: 2,
      fontSize: 16,
    },
    registeredStudents: {
        flex:1,
      marginBottom: 15,
    },
    studentsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    rules: {
      fontSize: 16,
      marginBottom: 4,
    },
    registerButton: {
      alignSelf: 'center',
    },
    prizes: {
        marginTop: 5,
      },
      prizesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      prizeText: {
        fontSize: 16,
        color: 'black',
        marginBottom: 4,
      },
      checkbox_cont:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
     
        maxHeight:30
      }
  });