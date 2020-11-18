import React from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView} from 'react-native';
import {theme} from '../../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalButton from '../../../components/buttons/globalbutton';

const App = () => {
  return (
    // ++++++++++++++++++++++++ ImageBackground ++++++++++++++++++
    <ImageBackground
      source={require('../../../assets/images/bg8.png')}
      style={{width: '100%', height: '100%', flex: 1}}
      resizeMode="cover">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* // ++++++++++++++++++++++++ Contact Info  View++++++++++++++++++ */}
        <View
          style={{
            flex: 0.45,
            alignSelf: 'center',
            width: '85%',
            justifyContent: 'center',
            // backgroundColor: 'pink',
          }}>
          <Text
            style={{
              color: theme.textColors.white,
              fontSize: 18,
              fontFamily: 'Roboto-Regular',
            }}>
            Set receivers
          </Text>
          <Text
            style={{
              color: theme.textColors.white,
              fontSize: 24,
              fontFamily: 'Roboto-Bold',
              //   fontWeight: 'bold',
              lineHeight: 30,
              letterSpacing: 0.5,
            }}>
            Contact Info
          </Text>
        </View>

        {/* // ++++++++++++++++++++++++ Main View  ++++++++++++++++++ */}

        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            // backgroundColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            <Ionicons
              name="person-outline"
              size={22}
              color={theme.iconsColor.orange}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: 'center',
                marginLeft: 5,
                color: theme.textColors.lightBlack,
                fontFamily: 'Roboto-Bold',
              }}>
              Receiver Details
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              width: '90%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: theme.textColors.yellow,
                  fontFamily: 'Roboto-Thin',
                  fontSize: 14,
                }}>
                Receiver Name
              </Text>

              <TextInput
                placeholder="e.g.John Doe"
                placeholderTextColor={theme.bordersColor.borderColor}
                style={{fontSize: 14}}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              width: '90%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: theme.textColors.yellow,
                  fontFamily: 'Roboto-Thin',
                  fontSize: 14,
                  marginVertical: 10,
                }}>
                Receiver Phone Number
              </Text>

              <TextInput
                placeholder="e.g.08031234567"
                placeholderTextColor={theme.bordersColor.borderColor}
                style={{fontSize: 14}}
              />
            </View>
          </View>
        </View>
        {/* // ++++++++++++++++++++++++ Button View++++++++++++++++++ */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 0.4,
            // backgroundColor: 'pink',
            marginVertical: 10,
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue2()} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
