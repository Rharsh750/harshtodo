import React, {useState} from 'react';
import {
  View,
  TextInput ,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';

const CreateTask = ({navigation, route }) => {
  const [allData ,setAllData] = useState({
    title: '',
    mainContent: '',
  })
  console.log('allData', allData)
  const createType = route?.params?.createType
  const checkType = route?.params?.checkType
  const addData = async () => {
    const setItems = database().ref('/todos').push();
    const params = {
      title: allData.title,
      mainContent: allData.mainContent,
      time: Date.now(),
    };
    console.log('params', params);
    await setItems
      .set(params)
      .then(res => {
        console.log('res', res);
      })
      .catch(error => {
        console.log('error', error);
      });
    setAllData({
      title: '',
      mainContent: '',
    });
  };
  return (
    <LinearGradient colors={['#c33764', '#1d2671']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, marginTop: 50}}>
      <StatusBar backgroundColor={'#c33764'} barStyle={'light-content'} />
        <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={true}>
            <View style={styles.container}>
              <View style={[styles.titleView, {justifyContent: checkType === 'text' ?  'center' : 'flex-end', }]}>
                <Text style={styles.titleTxt}>Title</Text>
                <TextInput
                  style={styles.titleInput}
                  multiline={true}
                  maxLength={100}
                  returnKeyType={'go'}
                  placeholder={'Enter Title'}
                  placeholderTextColor={'#fff'}
                  // value={allData.Title}
                  onChangeText={title => setAllData({
                    ...allData,title:title
                  })}
                />
              </View>
              <View style={styles.bodyView}>
                <Text style={styles.bodyTxt}>{createType} </Text>
                <TextInput
                  style={[styles.bodyInput, {height: checkType === 'text' ?  '90%' : '20%',}]}
                  multiline={true}
                  numberOfLines={15}
                  placeholder={checkType === 'text' ?  'Enter your tasks' : 'Enter Amount: eg: 10,0000 '}
                  placeholderTextColor={'#fff'}
                  // value={allData.mainContent}
                  onChangeText={mainContent => setAllData({
                   ...allData,mainContent: mainContent 
                  })}
                />
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={addData}>
                  <Text style={styles.buttonTxt}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  titleView: {
    flex: 2,
  },
  titleInput: {
    margin: 12,
    padding: 20,
    borderRadius: 18,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 20
  },
  titleTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#fff'
  },
  bodyView: {
    flex: 3,
    justifyContent: 'center'
  },
  bodyInput: {
    margin: 12,
    borderRadius: 18,
    backgroundColor: '#000',
    color: '#fff',
    fontSize: 18,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
    lineHeight: 100
  },
  bodyTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#fff',
    textTransform: 'capitalize'
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#000',
    padding: 20,
    width: 250,
    alignSelf: 'center',
    borderRadius: 25,
  }
});



export default CreateTask;
