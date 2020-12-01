import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {theme} from '../../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BgCustom from '../../../components/bgcustom';
import GlobalButton from '../../../components/buttons/globalbutton';
import Toastmessage from '../../../components/toastmessage';

const App = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [color, setColor] = useState('');
  const [color2, setColor2] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);

  function _Continue4() {
    if (name.length >= 1 && phone.length >= 1) {
      props.navigation.navigate('setyourbudget');
      setError(false);
      setError2(false);
    } else if (name == '') {
      setError(true);
    } else if (phone == '') {
      setError2(true);
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Contact Info" suggest="Set receivers">
        {/* ==========2nd Flex========== */}

        <View
          style={{
            flex: 0.9,
            // backgroundColor: 'green',
            width: '85%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Ionicons
              name="person-outline"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text
              style={{
                fontSize: 17,
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
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,

              marginBottom: 2,
            }}>
            <View>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontFamily: 'Roboto-Thin',
                  fontSize: 15,
                }}>
                Receiver Name
              </Text>

              <TextInput
                placeholder="Abdul Samad"
                placeholderTextColor={theme.textColors.placeholder}
                onChangeText={(textName) => {
                  setName(textName);
                }}
                onFocus={() => setColor(true)}
                onBlur={() => setColor(false)}
                style={{fontSize: 14, marginLeft: 5}}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              backgroundColor: isError ? '#ffeeee' : null,
              borderRadius: 20,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError ? '* Please Fill the Name Input' : null}
            </Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              // backgroundColor: 'red',
              borderColor: color2
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
              marginVertical: 2,
            }}>
            <View>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontFamily: 'Roboto-Thin',
                  fontSize: 14,
                  marginTop: 10,
                }}>
                Receiver Phone Number
              </Text>

              <TextInput
                placeholder="e.g.03103844268"
                placeholderTextColor={theme.textColors.placeholder}
                keyboardType={'number-pad'}
                onChangeText={(textPhone) => {
                  setPhone(textPhone);
                }}
                onFocus={() => setColor2(true)}
                onBlur={() => setColor2(false)}
                style={{fontSize: 14, marginLeft: 5}}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              backgroundColor: isError2 ? '#ffeeee' : null,
              borderRadius: 20,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError2 ? '* Please Fill the Number Input' : null}
            </Text>
          </View>
        </View>

        {/* // ++++++++++++++++++++++++ Button View++++++++++++++++++ */}

        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginVertical: 10,
            // backgroundColor: 'pink',
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue4()} />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
