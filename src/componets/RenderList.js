import React from 'react'
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    Image,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';

const RenderList = ({item}) => {
  return (
    <TouchableOpacity style={styles.renderMain}>
        <View style={styles.title}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flex: 3}}>
              <Text
                adjustsFontSizeToFit={true}
                numberOfLines={2}
                style={styles.titleTxt}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: 'bold',
                paddingVertical: 4,
              }}>
              =
            </Text>
            <View style={{flex: 3, paddingLeft: 10}}>
              <Text style={styles.moneyTxt}>{item.money}</Text>
            </View>
          </View>
        </View>
        <View style={styles.date}>
          <Text style={styles.DateTxt}>21/04/2022 14:20</Text>
        </View>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    border: {
      borderBottomWidth: 0.7,
      borderBottomColor: '#000',
      width: '100%',
    },
    renderMain: {
      padding: 10,
      backgroundColor: '#f9c2ff',
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 25,
    },
    title: {
      paddingHorizontal: 20,
      paddingVertical: 5,
      alignItems: 'center',
    },
    titleTxt: {
      fontSize: 17,
      color: '#000',
      fontWeight: 'bold',
    },
    moneyTxt: {
      fontSize: 25,
      color: '#000',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    date: {
      alignItems: 'flex-end',
      marginHorizontal: 15,
    },
    DateTxt: {
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

export default RenderList