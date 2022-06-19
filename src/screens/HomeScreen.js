import React, {useEffect} from 'react'
import {View, Text,Image, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

const HomeScreen = ({navigation}) => {
  // const [data, setdata] = useState([])
  useEffect(() => {
        database().ref('/todos').on('value', snapshot => {
          console.log('snapshot',Object.values(snapshot.val()))
        })
  }, [])
  
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
              source={require('../assets/harsh.png')}
              style={{width: 180, height: 180, borderRadius: 100}}
            />
          </View>
          <View>
            {

            }
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