import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar
} from 'react-native';
import RenderList from '../componets/RenderList';
import {MONEY} from '../constant/Demo';

const Money = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 110}}
          data={MONEY}
          renderItem={RenderList}
          // keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};


export default Money;
