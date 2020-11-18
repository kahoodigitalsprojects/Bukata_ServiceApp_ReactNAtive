import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../../constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalButton from '../../../components/buttons/globalbutton';

const App = (props) => {
  function _Continue2() {
    props.navigation.navigate('datescreen');
  }
  return (
    <ImageBackground
      source={require('../../../assets/images/bg8.png')}
      style={{width: '100%', height: '100%', flex: 1}}
      resizeMode="cover">
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flex: 0.55,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Roboto-Regular',
              color: theme.textColors.white,
              lineHeight: 20,
              letterSpacing: 0.5,
            }}>
            Describe your
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Roboto-Bold',
              // fontWeight: 'bold',
              lineHeight: 30,
              letterSpacing: 0.5,
              color: theme.textColors.white,
            }}>
            Package
          </Text>
        </View>

        <View
          style={{
            flex: 0.25,
            justifyContent: 'center',
            width: '90%',
            alignSelf: 'center',
          }}>
          {/*========== Describe Package ==========*/}

          <View style={{flex: 0.5}}>
            <View
              style={{
                marginTop: 10,
                width: '100%',
                marginVertical: 1,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <MaterialCommunityIcons
                    name="shopping"
                    size={20}
                    color={theme.iconsColor.orange}
                  />
                </View>
                <View style={{marginLeft: 8}}>
                  <Text
                    style={{
                      fontSize: 17,
                      color: theme.textColors.lightBlack,
                      fontFamily: 'Roboto-Bold',
                    }}>
                    Describe Package
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 12,
                  marginVertical: 5,
                  color: theme.textColors.gray,
                }}>
                e.g. a 32 inch TV Set
              </Text>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: theme.bordersColor.lightBorder,
                marginVertical: 15,
              }}></View>

            {/*========== Package Weight Row ==========*/}

            <View style={{flexDirection: 'row', marginVertical: 10}}>
              <View>
                <MaterialCommunityIcons
                  name="speedometer"
                  size={20}
                  color={theme.iconsColor.orange}
                />
              </View>
              <View style={{marginLeft: 8}}>
                <Text
                  style={{
                    fontSize: 17,
                    color: theme.textColors.lightBlack,
                    fontFamily: 'Roboto-Bold',
                  }}>
                  Package Weight
                </Text>
              </View>
            </View>

            {/* ++++++++++++++++ main View for elevation boxes ++++++++++++++++++ */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {/* ++++++++++++++++ box 1 ++++++++++++++++++ */}

              <TouchableOpacity
                style={{
                  width: '30%',
                  // height: 130,
                  padding: 20,
                  elevation: 1,
                  borderRadius: 10,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: theme.bordersColor.orangeBorder,
                }}>
                <Image
                  source={require('../../../assets/icons/feather.png')}
                  style={{
                    width: 62,
                    height: 62,
                  }}
                />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: 'Roboto-Regular',
                    }}>
                    Light
                  </Text>
                </View>
              </TouchableOpacity>

              {/* ++++++++++++++++ box 2 ++++++++++++++++++ */}

              <TouchableOpacity
                style={{
                  width: '30%',
                  // height: 130,
                  padding: 20,
                  elevation: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/package-1.png')}
                  style={{
                    width: 62,
                    height: 62,
                  }}
                />
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      padding: 5,
                      fontFamily: 'Roboto-Regular',
                    }}>
                    Midium
                  </Text>
                </View>
              </TouchableOpacity>

              {/* ++++++++++++++++ box 3++++++++++++++++++ */}

              <TouchableOpacity
                style={{
                  width: '30%',
                  // height: 130,
                  padding: 20,
                  elevation: 1,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/trolley.png')}
                  style={{
                    width: 62,
                    height: 62,
                    // margin: 7,
                    // alignSelf: 'center',
                  }}
                />
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      padding: 5,
                      fontFamily: 'Roboto-Regular',
                    }}>
                    Heavy
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* ++++++++++++++++++++ first whit text +++++++++++++ */}

            {/* ++++++++++++++++++++ last button +++++++++++++ */}
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.2,
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue2()} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
