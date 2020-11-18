import React from 'react';
import {View, ImageBackground, Text, TextInput, ScrollView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GloballButton from '../../../components/buttons/globalbutton';
import {theme} from '../../../constants/theme';

const App = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/bg7.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode="cover">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 0.38,
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            //   backgroundColor: 'skyblue',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: theme.textColors.white,
              fontFamily: 'Roboto-Regular',
            }}>
            Set your
          </Text>

          <Text
            style={{
              fontSize: 25,
              lineHeight: 30,
              letterSpacing: 0.5,
              color: theme.textColors.white,
              //   fontWeight: 'bold',
              fontFamily: 'Roboto-Bold',
            }}>
            Budget
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            alignItems: 'center',
            //   justifyContent: 'center',
            //   backgroundColor: 'pink',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              //   backgroundColor: 'pink',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.secondaryColor,
                width: 20,
                height: 20,
                borderRadius: 20,
              }}>
              <Fontisto name="dollar" size={16} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Roboto-Bold',
                  color: theme.textColors.lightBlack,
                }}>
                {'  '}What's your Budget?
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '90%',
              marginVertical: 10,
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
            }}>
            <Text
              style={{
                color: theme.textColors.yellow,
                fontSize: 16,
                fontFamily: 'Roboto-Thin',
              }}>
              Your Offer
            </Text>

            <TextInput
              placeholder="0"
              placeholderTextColor={theme.textColors.placeholder}
              style={{fontSize: 18, marginLeft: 5}}
            />
          </View>
        </View>

        <View
          style={{
            flex: 0.12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            //   backgroundColor: 'blue',
          }}>
          <GloballButton buttonTheme={'border'} title={'Preview'} />
          <GloballButton title={'Post'} buttonStyle={{width: 180}} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
