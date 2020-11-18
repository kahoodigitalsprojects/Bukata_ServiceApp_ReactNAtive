import React, {useState} from 'react';
import {View, ImageBackground, ScrollView, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header';
import GlobalButton from '../../../components/buttons/globalbutton';

const App = (props) => {
  function _Continue1() {
    props.navigation.navigate('describepackage');
  }
  return (
    <ImageBackground
      source={require('../../../assets/images/bg7.png')}
      style={{width: '100%', height: '100%', flex: 1}}
      resizeMode="cover">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* ==========Header========== */}

        <Header
          text={true}
          isTransparent={true}
          isVisibleIcon={true}
          //   drawerIcon={true}
        />
        {/* ++++++++++++++++++++ first whit text +++++++++++++ */}

        <View
          style={{
            flex: 0.33,
            width: '87%',
            alignSelf: 'center',
            // backgroundColor: 'green',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 19,
              color: theme.textColors.white,
            }}>
            Choose your
          </Text>

          <Text
            style={{
              fontSize: 22,
              fontFamily: 'Roboto-Bold',
              //   fontWeight: 'bold',
              lineHeight: 30,
              letterSpacing: 0.5,
              color: theme.textColors.white,
            }}>
            Route
          </Text>
        </View>

        {/* ++++++++++++++++++++ main view for text inputs +++++++++++++ */}

        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            // backgroundColor: 'pink',
          }}>
          {/* ==========1st TextInput========== */}

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              //   marginTop: 10,
              width: '90%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="gps-not-fixed"
                size={20}
                color={theme.iconsColor.orange}
              />

              <Text
                style={{
                  fontSize: 17,
                  color: theme.textColors.lightBlack,
                  fontFamily: 'Roboto-Bold',
                  marginLeft: 8,
                }}>
                Pick Up Location
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontSize: 12,
                  fontFamily: 'Roboto-Thin',
                  marginTop: 7,
                }}>
                Enter Address
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                width: '100%',
              }}>
              <TextInput
                placeholder="Pick Up address"
                placeholderTextColor={theme.textColors.placeholder}
                style={{fontSize: 15, width: '90%'}}
              />

              <View
                style={{
                  justifyContent: 'center',
                  width: '10%',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="location"
                  size={17}
                  color={theme.iconsColor.placeholderIcon}
                />
              </View>
            </View>
          </View>

          {/* ==========2nd TextInput========== */}

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              marginTop: 10,
              width: '90%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons
                name="gps-fixed"
                size={20}
                color={theme.iconsColor.orange}
              />

              <Text
                style={{
                  fontSize: 17,
                  color: theme.textColors.lightBlack,
                  fontFamily: 'Roboto-Bold',
                  marginLeft: 8,
                }}>
                Package Destination
              </Text>
            </View>

            <View>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontSize: 12,
                  fontFamily: 'Roboto-Thin',
                  marginTop: 7,
                }}>
                Enter Address
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                // justifyContent: 'space-between',
                width: '100%',
              }}>
              <TextInput
                placeholder="Drop off address"
                placeholderTextColor={theme.textColors.placeholder}
                style={{fontSize: 15, width: '90%'}}
              />

              <View
                style={{
                  justifyContent: 'center',
                  width: '10%',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="location"
                  size={17}
                  color={theme.iconsColor.placeholderIcon}
                />
              </View>
            </View>
          </View>
        </View>

        {/* ========== Button ========== */}

        <View
          style={{
            flex: 0.47,
            justifyContent: 'flex-end',
            marginVertical: 10,
            // backgroundColor: 'red',
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue1()} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
