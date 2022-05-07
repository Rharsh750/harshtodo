import React from 'react';
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
import {TODODATA} from '../constant/Demo';

const Todos = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.renderMain}>
          <View style={styles.title}>
            <Text style={styles.titleTxt} numberOfLines={1}>{item.title}</Text>
          </View>
          <View style={styles.border} />
          <View style={styles.TodoData}>
            <Text numberOfLines={3} adjustsFontSizeToFit={true} style={styles.msgTxt}>
              {item.msg}
            </Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.DateTxt}>21/04/2022 14:20</Text>
          </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={styles.container}>
        <FlatList
        contentContainerStyle={{paddingBottom: 110}}
          data={TODODATA}
          renderItem={renderItem}
          // keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    borderBottomWidth: 0.7,
    borderBottomColor: '#000',
    width:"100%",
  },
  renderMain: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  TodoData: {
    flex: 2,
    padding: 10,
    // backgroundColor: 'yellow'
  },
  msgTxt: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  title: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 7,
    // alignItems: 'center'
  },
  titleTxt: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold'
  },
  date: {
    flex: 2,
    alignItems: 'flex-end',
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  DateTxt: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Todos;
