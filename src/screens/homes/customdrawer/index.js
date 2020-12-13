import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Value} from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../../constants/theme';
const DrawerContent = (props) => {
  let array;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ED1C24',

        // opacity: 0.9,
        overflow: 'hidden',
      }}>
      <View
        style={{
          justifyContent: 'center',
          height: '26%',
          //   borderWidth: 1,
          backgroundColor: theme.textColors.orange,
        }}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0,
            paddingLeft: 40,
          }}>
          <TouchableOpacity
            style={{
              height: 70,
              width: 70,
              //   borderWidth: 1,
              elevation: 1,
              backgroundColor: 'white',
              borderRadius: 70,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.textColors.orange,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {' '}
              EO{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingLeft: 40,
            marginVertical: 7,
            // borderWidth: 1,
          }}>
          <Text style={{color: 'white', fontSize: 18}}> Elvin Opara</Text>
        </View>
        <View
          style={{
            paddingLeft: 40,
          }}>
          <Text style={{color: '#0000005D', fontSize: 15}}>
            {' '}
            mclean@gmail.com
          </Text>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 20}}>
        {
          (array = [
            {
              title: 'Dashboard',
              name: 'HomeScreen',
              type: 'FontAwesome',
              //   icon: require('../../assets/icons/home.png'),
            },
            {
              title: 'Request History',
              name: 'Match',
              type: 'Entypo',
              // icon: require('../assets/icons/70.png'),
              //   icon: require('../../assets/icons/userss.png'),
            },
            {
              title: 'Notification ',
              name: 'Home',

              type: 'Fontisto',
              // icon: require('../assets/icons/69.png'),
              //   icon: require('../../assets/icons/calendar.png'),
            },
            {
              title: 'Setting ',
              name: 'Home',
              type: 'FontAwesome5',
              // icon: require('../assets/icons/68.png'),
              //icon: require('../../assets/icons/search.png'),
            },

            {
              title: 'Sign Out',
              name: 'visitwebsite',

              type: 'FontAwesome',
              // icon: require('../assets/icons/67.png'),
              // icon: require('../../assets/icons/info.png'),
            },
          ].map(
            (val, i) => (
              console.log('loop', val),
              (
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('adminscreens')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    marginTop: 5,
                    borderColor: 'black',
                    paddingVertical: 10,
                    width: '96%',
                    borderRadius: 1,
                    alignSelf: 'center',
                    borderColor: '#dc92a2',
                    marginVertical: 10,
                  }}>
                  <Image
                    source={val.icon}
                    style={{height: 15, width: 15, marginRight: 15}}
                    resizeMode="contain"
                  />

                  <Text
                    style={{
                      letterSpacing: 1,

                      flex: 1,
                      // textAlign: 'left',
                      color: 'black',
                    }}>
                    {val.title}
                  </Text>
                </TouchableOpacity>
              )
            ),
          ))
        }
      </View>
    </View>
  );
};
export default DrawerContent;
