import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Todos from '../screens/Todos';
import Expenses from '../screens/Expenses';
import Money from '../screens/Money';
import Investment from '../screens/Investment';
import CreateModal from '../componets/CreateModal';
import { useNavigation } from '@react-navigation/native';
// import CreatePost from '../screens/CreatePost';
import * as RootNavigation from '../navigation/RootNavigation'



const CreatePost = () => {
  <View>
    <Text>Create Post</Text>
  </View>}
const onPressCreatePost = ({type, checkType}) => {
  RootNavigation.navigate('CreateTask', {createType: type, checkType: checkType});
}

const CreateCustomnBottom =({setModalVisibale, ModalVisibale}) => (
  <>
    <TouchableOpacity
    hitSlop={{bottom: 50}}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={() => setModalVisibale(true)}
    >
      <View style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c33764',
        borderWidth: 4
      }}>
        <Image
              source={require('../assets/sketchbook.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                // tintColor: '#fff'
              }}
             />
      </View>
    </TouchableOpacity>
    
    <CreateModal
      ModalVisibale={ModalVisibale}     
      setModalVisibale={setModalVisibale}
      onPressBtn={onPressCreatePost}
    />
    </>
  );

const Tab = createBottomTabNavigator();

const Tabs = ({navigation}) => {
  // let navigation = useNavigation()
  const [ModalVisibale, setModalVisibale] = useState(false)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          height: 90,
          borderRadius: 15,
          ...styles.shadow,
        },
      }}>
        {/* <Tab.Screen
        name="createPost"
        component={CreatePost}
        options={{
          headerShown: false ,
          tabBarIconStyle: {
            // display: 'none',
            position: 'absolute'
          },
          tabBarVisibilityAnimationConfig: false,
          showIcon: false
        }}
      /> */}
      <Tab.Screen
        name="Todos"
        component={Todos}
        options={{
          headerShown: false ,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitle: 'My Todos',
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image source={require('../assets/to-do-list.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 12, paddingVertical: 10}}>My Todos</Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
            headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/expenses.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  // tintColor: focused ? '#000' : '#000',
                }}
              />
              <Text style={{color: '#000', fontSize: 12, fontWeight: 'bold', paddingVertical: 10}}>Expenses</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name='CreatePost' component={CreatePost}
        options={{
          tabBarIcon: ({focused}) => (
            <CreateCustomnBottom setModalVisibale={setModalVisibale} ModalVisibale={ModalVisibale}  />
          )
        }}
      />
      <Tab.Screen
        name="Money"
        component={Money}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/money.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25
                }}
              />
              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 12, paddingVertical: 10}}>Money</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={Investment}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/funds.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25
                }}
              />
              <Text style={{color: '#000',fontWeight: 'bold',  fontSize: 12, paddingVertical: 10}}>Investment</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
