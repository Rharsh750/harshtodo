import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';
import RenderList from '../componets/RenderList';
import {INVESTMENT} from '../constant/Demo';

const Investment = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor={'red'} barStyle={'dark-content'} />
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 110}}
          data={[]}
          renderItem={RenderList}
          // keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
              return (
                  <View style={{flex: 1, flexDirection: 'column'}}>
                      <View style={{justifyContent: 'center', backgroundColor: 'yellow'}}>
                      <Text>You have no data</Text>
                      </View>
                  </View>
              )
          }}
        />
      </View>
    </SafeAreaView>
  );
};


export default Investment;
