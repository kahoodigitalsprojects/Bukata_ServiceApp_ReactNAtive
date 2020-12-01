import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import GloballButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';
import {theme} from '../../../constants/theme';
import Toastmessage from '../../../components/toastmessage';

const App = (props) => {
  const [color, setColor] = useState('');
  const [budget, setBudget] = useState('');
  const [isError, setError] = useState(false);
  const [isError2, setError2] = useState(false);
  function _Post() {
    if (budget >= 1) {
      props.navigation.navigate('success');
      setError(false);
      setError2(false);
    } else if (budget == '') {
      setError(true);
      setError2(true);
      // Toastmessage('Fill the Budget input', '', 'info');
    } else {
      setError(true);
      setError2(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Budget" suggest="Set Your">
        <View
          style={{
            flex: 0.9,
            width: '85%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.iconsColor.darkOrange,
                width: 22,
                height: 22,
                borderRadius: 25,
              }}>
              <Fontisto name="dollar" size={18} color="white" />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto-Bold',
                  color: theme.textColors.lightBlack,
                }}>
                {'  '}What's your Budget?
              </Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              borderBottomWidth: 1,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}>
            <Text
              style={{
                color: theme.textColors.orange,
                fontSize: 15,
                fontFamily: 'Roboto-Regular',
              }}>
              Your Offer
            </Text>

            <TextInput
              placeholder="0"
              placeholderTextColor={theme.textColors.placeholder}
              keyboardType={'number-pad'}
              onChangeText={(Btext) => {
                setBudget(Btext);
              }}
              onFocus={() => setColor(true)}
              onBlur={() => setColor(false)}
              style={{fontSize: 18, marginLeft: 5}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 2,
              backgroundColor: isError ? '#ffeeee' : null,
              borderRadius: 20,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError ? 'Please Fill the Budget input' : null}
            </Text>
          </View>
        </View>

        <View style={{flex: 0.1, width: '85%', alignSelf: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              // paddingTop: 10,
              // backgroundColor: 'blue',
            }}>
            <GloballButton
              buttonTheme={'border'}
              title={'Preview'}
              buttonStyle={{borderRadius: 25}}
            />
            <GloballButton
              title={'Post'}
              onPress={() => _Post()}
              buttonStyle={{width: 170, borderRadius: 25}}
            />
          </View>
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
    </ScrollView>
  );
};
export default App;
