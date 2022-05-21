import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderList from '../componets/RenderList';
import {MONEY} from '../constant/Demo';

const Money = ({navigation}) => {
  return (
    <LinearGradient colors={['#c33764', '#1d2671']} style={{flex: 1}}>
    <SafeAreaView style={{flex: 1}}>
    <StatusBar backgroundColor={'#c33764'} barStyle={'light-content'} />
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
    </LinearGradient>
  );
};


export default Money;
