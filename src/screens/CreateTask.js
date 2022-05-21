import React from 'react';
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

const CreateTask = ({navigation, route }) => {
  const createType = route?.params?.createType
  const checkType = route?.params?.checkType
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
                />
              </View>
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
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
