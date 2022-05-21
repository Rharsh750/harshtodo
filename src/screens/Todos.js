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
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient colors={['#c33764', '#1d2671']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1, marginTop: 0}}>
        <StatusBar backgroundColor={'#c33764'} barStyle={'light-content'} />
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
    </LinearGradient>
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
    backgroundColor: 'rgba(189,195,199, 0.5)',
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
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    opacity: 0.8
  },
  title: {
    flex: 2,
    paddingHorizontal: 20,
    paddingVertical: 7,
    // alignItems: 'center'
  },
  titleTxt: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold'
  },
  date: {
    flex: 2,
    alignItems: 'flex-end',
    marginHorizontal: 15,
    paddingVertical: 5,
  },
  DateTxt: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Todos;
