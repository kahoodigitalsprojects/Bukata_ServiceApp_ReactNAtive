import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';

const App = (props) => {
  const [pickupA, setPickupA] = useState('');
  const [dropoffA, setdropoffA] = useState('');
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);

  function _Continue1() {
    if (pickupA.length >= 1 && dropoffA.length >= 1) {
      props.navigation.navigate('describepackage');
      setError(false);
      setError2(false);
    } else if (pickupA == '') {
      setError(true);
    } else if (dropoffA == '') {
      setError2(true);
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Route" suggest="Choose Your">
        {/* ========== 2nd flex ========== */}

        <View
          style={{
            flex: 0.9,
            alignItems: 'center',
            padding: 10,
            width: '87%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
          }}>
          {/* ==========Pick Up Location========== */}

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
              //   marginTop: 10,
              // width: '90%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="gps-not-fixed"
                size={25}
                color={theme.iconsColor.darkOrange}
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
                  fontSize: 15,
                  fontFamily: 'Roboto-Thin',
                  marginTop: 7,
                }}>
                Enter Address
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TextInput
                placeholder="Pick Up address"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(Ptext) => {
                  setPickupA(Ptext);
                }}
                onFocus={() => setColor(true)}
                onBlur={() => setColor(false)}
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
          <View
            style={{
              alignItems: 'center',
              marginVertical: 2,
              width: '100%',
              backgroundColor: isError ? '#ffeeee' : null,
              borderRadius: 20,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError ? 'Please Fill a Valid Address' : null}
            </Text>
          </View>

          {/* ========== Package Destination ========== */}

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: color2
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
              marginTop: 20,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons
                name="gps-fixed"
                size={25}
                color={theme.iconsColor.darkOrange}
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
              }}>
              <TextInput
                placeholder="Drop off address"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(text) => {
                  setdropoffA(text);
                }}
                onFocus={() => setColor2(true)}
                onBlur={() => setColor2(false)}
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
          <View
            style={{
              alignItems: 'center',
              marginVertical: 2,
              width: '100%',
              backgroundColor: isError2 ? '#ffeeee' : null,
              borderRadius: 20,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError2 ? 'Please Fill a Valid Destination' : null}
            </Text>
          </View>
        </View>

        {/* ========== Button ========== */}

        <View
          style={{
            flex: 0.1,
            justifyContent: 'flex-end',
            marginVertical: 10,
            // backgroundColor: 'red',
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue1()} />
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </ScrollView>
  );
};
export default App;
