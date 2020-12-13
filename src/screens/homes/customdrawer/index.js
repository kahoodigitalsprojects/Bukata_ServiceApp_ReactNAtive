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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
              name: 'home',

              icon: (
                <FontAwesome5
                  name="clipboard-list"
                  size={17}
                  style={{marginRight: 15}}
                  color={theme.textColors.orange}
                />
              ),
            },
            {
              title: 'Request History',
              name: 'task',
              type: 'Entypo',
              icon: (
                <FontAwesome5
                  name="history"
                  size={17}
                  style={{marginRight: 15}}
                  color={theme.textColors.orange}
                />
              ),
            },
            {
              title: 'Notification ',
              name: 'taskdetail',

              type: 'Fontisto',
              icon: (
                <Ionicons
                  name="notifications"
                  size={17}
                  style={{marginRight: 15}}
                  color={theme.textColors.orange}
                />
              ),
            },
            {
              title: 'Setting ',
              name: 'home',
              type: 'FontAwesome5',
              icon: (
                <AntDesign
                  name="setting"
                  size={17}
                  style={{marginRight: 15}}
                  color={theme.textColors.orange}
                />
              ),
            },

            {
              title: 'Sign Out',
              name: 'signin',
              icon: (
                <MaterialCommunityIcons
                  name="logout"
                  size={17}
                  style={{marginRight: 15}}
                  color={theme.textColors.orange}
                />
              ),
            },
          ].map(
            (val, i) => (
              console.log('loop', val),
              (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(
                      val.name ? val.name : props.navigation.closeDrawer(),
                    )
                  }
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
                  {val.icon}

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
