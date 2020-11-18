import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../../components/header';
import GlobalButton from '../../../components/buttons/globalbutton';

const App = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <ImageBackground
      source={require('../../../assets/images/bg8.png')}
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
        {/* ======== */}

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flex: 0.55,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: theme.textColors.white,
              fontFamily: 'Roboto-Regular',
              fontSize: 19,
              //   fontWeight: 'bold',
            }}>
            Set Your
          </Text>
          <Text
            style={{
              color: theme.textColors.white,
              fontSize: 22,
              fontFamily: 'Roboto-Bold',
              //   fontWeight: 'bold',
            }}>
            Date & Time
          </Text>
        </View>

        {/* ===== */}

        <View
          style={{
            width: '90%',
            flex: 0.25,
            justifyContent: 'center',
            // alignItems: 'center',
            alignSelf: 'center',
          }}>
          {/* ==========Row========== */}
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'pink',
              alignItems: 'center',
              //   width: '90%',
            }}>
            <Entypo name="calendar" color={theme.iconsColor.orange} size={18} />

            <Text
              style={{
                fontSize: 20,
                marginLeft: 10,
                fontFamily: 'Roboto-Bold',
                color: theme.textColors.lightBlack,
              }}>
              Set Date & Time
            </Text>
          </View>

          {/* +++++++++++++++ TextInput main View ++++++++++++= */}

          <View
            style={{
              //   width: '90%',
              //   alignSelf: 'center',
              marginVertical: 12,
              borderRadius: 0,
              elevation: 1,
              backgroundColor: theme.chooseDateBG,
            }}>
            <View
              style={{
                backgroundColor: theme.chooseDateBG,
                width: '100%',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextInput
                placeholder="Choose Date"
                placeholderTextColor={theme.textColors.placeholder}
                style={{padding: 10}}
              />
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  padding: 10,
                  //   backgroundColor: 'pink',
                }}
                onPress={() => setOpen(!isOpen)}>
                <AntDesign
                  name="caretdown"
                  size={12}
                  color={theme.iconsColor.placeholderIcon}
                />
              </TouchableOpacity>
            </View>

            {/* +++++++++++++++++ dropdown view +++++++++++++++ */}

            {isOpen ? (
              <View>
                <Text>24/jan/2020</Text>
                <Text>24/feb/2020</Text>
                <Text>24/mar/2020</Text>
              </View>
            ) : null}
          </View>
          {/* +++++++++++++++++++++++++ Cente view row1 for icon +++++++++++++ */}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* +++++++++++++++++++++++++  box1 +++++++++++++  */}
            <View
              style={{
                backgroundColor: theme.bgColorWhite,
                width: '48%',
                // height: 100,
                padding: 5,
                elevation: 2,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: theme.bordersColor.orangeBorder,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/sunrise.png')}
                style={{width: 55, height: 55}}
              />

              <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular'}}>
                Morning
              </Text>
              <Text style={{fontSize: 10, fontFamily: 'Roboto-Thin'}}>
                before 10am
              </Text>
            </View>
            {/* +++++++++++++++++++++++++ box 2 +++++++++++++  */}
            <View
              style={{
                backgroundColor: theme.bgColorWhite,
                width: '48%',
                // height: 100,
                elevation: 2,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
              }}>
              <Image
                source={require('../../../assets/icons/dawn.png')}
                style={{width: 55, height: 55}}
              />

              <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular'}}>
                Mid Day
              </Text>
              <Text style={{fontSize: 10, fontFamily: 'Roboto-Thin'}}>
                10am-2pm
              </Text>
            </View>
          </View>
          {/* +++++++++++++++++++++++++ Cente view row2 for icon +++++++++++++ */}
          <View
            style={{
              //   width: '90%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* +++++++++++++++++++++++++ box 3 +++++++++++++  */}
            <View
              style={{
                backgroundColor: theme.bgColorWhite,
                width: '48%',
                // height: 100,
                padding: 5,
                elevation: 2,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 15,
              }}>
              <Image
                source={require('../../../assets/icons/sun.png')}
                style={{width: 55, height: 55}}
              />

              <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular'}}>
                Afternoon
              </Text>
              <Text style={{fontSize: 10, fontFamily: 'Roboto-Thin'}}>
                2pm-6pm
              </Text>
            </View>
            {/* +++++++++++++++++++++++++ box 4 +++++++++++++  */}
            <View
              style={{
                backgroundColor: theme.bgColorWhite,
                width: '48%',
                // height: 100,
                padding: 5,
                elevation: 2,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/half-moon.png')}
                style={{
                  width: 55,
                  height: 55,
                }}
              />

              <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular'}}>
                Evening
              </Text>
              <Text style={{fontSize: 10, fontFamily: 'Roboto-Thin'}}>
                after-6pm
              </Text>
            </View>
          </View>
        </View>

        {/* ++++++++++++++++++++ button ++++++++++++++++++++ */}

        <View style={{flex: 0.1, justifyContent: 'center'}}>
          <GlobalButton title={'Continue'} />
          {/* <View
            style={{
              backgroundColor: theme.globalButtonColor.background,
              width: '70%',
              marginVertical: 10,
              borderRadius: 10,
              height: 50,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                padding: 10,
                fontSize: 16,
                color: theme.textColors.white,
              }}>
              Continue
            </Text>
          </View> */}
          <View></View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
