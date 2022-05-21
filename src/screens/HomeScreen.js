import React from 'react'
import {View, Text,Image, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({navigation}) => {
  return (
    <LinearGradient colors={['#c33764' , '#1d2671']} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'#c33764'} barStyle={'light-content'} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{padding: 30}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
              Welcome Harsh
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/harsh.jpeg')}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: '#000',
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
                height: 100,
                borderRadius: 100,
              }}
              onPress={() => navigation.navigate('Tabs')}>
              <Image
                source={require('../assets/plus.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default HomeScreen