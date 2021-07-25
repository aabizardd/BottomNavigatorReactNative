import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FindScreen from '../screens/FindScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PostScreen from '../screens/PostScreen';

import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...style.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: '#fff',
          ...style.shadow,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...style.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: focused ? 14 : 0,
                borderRadius: focused ? 100 : 0,
                backgroundColor: focused ? '#8fcbbc' : '#fff',
              }}>
              <Image
                source={require('../assets/icon/home.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#fff' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Find"
        component={FindScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: focused ? 14 : 0,
                borderRadius: focused ? 100 : 0,
                backgroundColor: focused ? '#8fcbbc' : '#fff',
              }}>
              <Image
                source={require('../assets/icon/find.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#fff' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icon/plus.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#8fcbbc',
                }}
              />
            </View>
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: focused ? 14 : 0,
                borderRadius: focused ? 100 : 0,
                backgroundColor: focused ? '#8fcbbc' : '#fff',
              }}>
              <Image
                source={require('../assets/icon/chat.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#fff' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: focused ? 14 : 0,
                borderRadius: focused ? 100 : 0,
                backgroundColor: focused ? '#8fcbbc' : '#fff',
              }}>
              <Image
                source={require('../assets/icon/settings.png')}
                resizeMode="contain"
                style={{
                  width: 23,
                  height: 23,
                  tintColor: focused ? '#fff' : '#748c94',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
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
