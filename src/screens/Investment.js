import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RenderList from '../componets/RenderList';
import {INVESTMENT} from '../constant/Demo';

const Investment = ({navigation}) => {
  return (
    <LinearGradient colors={['#c33764', '#1d2671']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'#c33764'} barStyle={'light-content'} />
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{paddingBottom: 110}}
            data={[]}
            renderItem={RenderList}
            // keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
              return (
                <View style={{justifyContent: 'center' ,alignItems: 'center'}}>
                    <Text>You have no data</Text>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};


export default Investment;
