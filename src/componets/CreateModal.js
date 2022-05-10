//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
// import { color }
// from '../../Constants/color'; import {
// fontFamily } from
// '../../Constants/constants'; import {
// isIos } from '../../Heplers/constants';
// import { fontSize } from
// '../../Heplers/utils';
// create a component
const CreateModal = ({ModalVisibale, setModalVisibale, onPressBtn}) => {
  return (
    <Modal
      isVisible={ModalVisibale}
      animationIn={'slideInUp'}
      coverScreen={true}
      backdropColor={'rgba(0,0,0,0.5)'}
      backdropOpacity={0.7}
      onBackButtonPress={() => setModalVisibale(false)}
      onBackdropPress={() => setModalVisibale(false)}>
      <View style={styles.containerStyle}>
        <View style={{...styles.subContainer, paddingVertical: 10}}>
          <View style={{flexDirection: 'row'}}>
                <Image source={require('../assets/to-do-list.png')}
                        resizeMode='contain'
                        style={{
                        width: 25,
                        height: 25,
                        alignSelf: 'center',
                        }}
                    />
                <TouchableOpacity
                 style={{paddingHorizontal: 20 }}
                 onPress={() => onPressBtn({type : 'to-do'})}
                 >
                    <Text style={{...styles.texts, color: '#000', paddingVertical: 20}}>
                    Add Your To-do List
                    </Text>
                </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth: 2, width: '90%', borderColor: 'rgb(192,192,192)'}}/>
          <View style={{flexDirection: 'row'}}>
                <Image 
                source={require('../assets/expenses.png')}
                        resizeMode='contain'
                        style={{
                        width: 25,
                        height: 25,
                        alignSelf: 'center',
                        }}
                    />
                <TouchableOpacity style={{paddingHorizontal: 20 }}>
                    <Text style={{...styles.texts, color: '#000', paddingVertical: 20}}>
                    Add Your Expensses
                    </Text>
                </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth: 2, width: '90%', borderColor: 'rgb(192,192,192)'}}/>
          <View style={{flexDirection: 'row'}}>
                <Image 
                source={require('../assets/money.png')}
                        resizeMode='contain'
                        style={{
                        width: 25,
                        height: 25,
                        alignSelf: 'center',
                        }}
                    />
                <TouchableOpacity style={{paddingHorizontal: 35 }}>
                    <Text style={{...styles.texts, color: '#000', paddingVertical: 20}}>
                    Add Your Money
                    </Text>
                </TouchableOpacity>
          </View>
          <View style={{borderBottomWidth: 2, width: '90%', borderColor: 'rgb(192,192,192)'}}/>
          <View style={{flexDirection: 'row'}}>
                <Image 
                source={require('../assets/funds.png')}
                        resizeMode='contain'
                        style={{
                        width: 25,
                        height: 25,
                        alignSelf: 'center',
                        }}
                    />
                <TouchableOpacity style={{paddingHorizontal: 20 }}>
                    <Text style={{...styles.texts, color: '#000', paddingVertical: 20}}>
                    Add Your Investment
                    </Text>
                </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => setModalVisibale(false)}
          style={styles.subContainer}>
          <Text style={styles.texts}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    // </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  containerStyle: {
    //alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor:'rgba(0,0,0,0.5)',
    paddingVertical: 20,
    flex: 1,
  },
  subContainer: {
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 10,
    paddingVertical: 25,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  texts: {
    fontWeight: '400',
    color: '#000',
    // fontFamily: fontFamily.regular,
    fontSize: 16,
  },
});
//make this component available to the app
export default CreateModal;
