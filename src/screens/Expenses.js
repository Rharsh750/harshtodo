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
import RenderList from '../componets/RenderList';
import {EXPENSEES} from '../constant/Demo';

const Expenses = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 110}}
          data={EXPENSEES}
          renderItem={RenderList}
          // keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};


export default Expenses;
