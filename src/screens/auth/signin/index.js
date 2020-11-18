import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import FacebookButton from '../../../components/buttons/facebookbutton';
import GmailButton from '../../../components/buttons/gmailbutton';
import Header from '../../../components/header';
import {color} from 'react-native-reanimated';
// console.log('theame');
let path = '../../../assets/images/bg6.png';

const App = (props) => {
  function _SignInB() {
    props.navigation.navigate('drawer');
  }

  function _SignUpB() {
    props.navigation.navigate('otp');
  }

  // ==============PhoneInputs==============
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const phoneInput = useRef();
  const _CreateAccount = () => {
    return (
      <View
        style={{
          // flex: 0.2,
          // backgroundColor: 'pink',
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: '100%',
            alignSelf: 'center',
            marginTop: 20,
            borderColor: theme.bordersColor.borderColor,
          }}>
          <Text style={{color: theme.textColors.yellow}}>Full Name</Text>
          <TextInput placeholder={'John Doe'} />
        </View>
        <Text
          style={{
            color: theme.textColors.lightYellow,
            marginTop: 20,
          }}>
          Phone Number
        </Text>
        {/* =========Number Input========= */}
        <View style={{width: '100%', alignSelf: 'center'}}>
          {showMessage && (
            <View style={{}}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )}
          <PhoneInput
            defaultCode="PK"
            onChangeText={(text) => {
              setValue(text);
            }}
            value={'3172874198'}
            containerStyle={{
              height: 50,
              width: '100%',
            }}
            textInputStyle={{color: 'red'}}
            placeholder="Enter the Number My brother YO YO!!"
            textContainerStyle={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              backgroundColor: 'transparent',
            }}
            codeTextStyle={{color: theme.textColors.placeholder}}
          />
          {/* <TouchableOpacity
            style={{height: 40, width: 100}}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}></TouchableOpacity> */}
        </View>

        {/* ==============Global Button============= */}

        <View style={{alignItems: 'center', marginVertical: 10}}>
          <GlobalButton
            title={'Sign Up'}
            titleStyle={{fontSize: 13}}
            onPress={() => _SignUpB()}
          />
        </View>
      </View>
    );
  };

  // ================ Const SignIn =================
  const _SignIn = () => {
    return (
      <View
        style={{
          // flex: 0.2,
          // backgroundColor: 'pink',
          width: '90%',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: theme.textColors.lightYellow,
            marginTop: 20,
          }}>
          Phone Number
        </Text>
        {/* =========Number Input========= */}
        <View style={{width: '100%', alignSelf: 'center'}}>
          {showMessage && (
            <View style={{}}>
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? 'true' : 'false'}</Text>
            </View>
          )}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            // withDarkTheme
            // withShadow
            // autoFocus
            containerStyle={{
              height: 50,
              width: '100%',
              // color: theme.textColors.placeholder,
            }}
            textContainerStyle={{
              borderBottomWidth: 1,
              borderColor: theme.bordersColor.borderColor,
              backgroundColor: theme.bgColorWhite,
              color: theme.textColors.placeholder,
            }}
            codeTextStyle={{color: theme.textColors.placeholder}}
          />
          <TouchableOpacity
            style={{height: 40, width: 100}}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
            }}></TouchableOpacity>
        </View>
        {/* ==============Global Button============= */}

        <View style={{alignItems: 'center'}}>
          <GlobalButton
            title={'Sign In'}
            titleStyle={{fontSize: 13}}
            onPress={() => _SignInB()}
          />

          <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 16}}>
            or
          </Text>

          {/* ==========Social Buttons========== */}

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-around',
            }}>
            <GmailButton />
            <FacebookButton />
          </View>
        </View>

        {/* ==========Forgot Password========== */}

        <View
          style={{
            marginVertical: 30,
            // backgroundColor: 'pink',
            width: '60%',
            alignItems: 'center',
          }}>
          <Text style={{fontFamily: 'Roboto-Bold'}}>Forgot Password ?</Text>
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require(path)}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          //  isVisibleIcon={true}
          // drawerIcon={true}
        />
        <View
          style={{
            flex: 0.45,
            justifyContent: 'flex-end',
            width: '90%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            {/* =======Sign In===== */}
            <TouchableOpacity
              onPress={() => setClicked(true)}
              style={{
                borderBottomWidth: 5,
                width: '47%',
                borderColor: isClicked
                  ? theme.bordersColor.orangeBorder
                  : 'transparent',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto-Regular',
                  color: isClicked
                    ? theme.textColors.lightBlack
                    : theme.textColors.lightGray,
                  marginLeft: 5,
                }}>
                Sign In
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: 'Roboto-Bold',
                  color: isClicked
                    ? theme.textColors.lightBlack
                    : theme.textColors.lightGray,
                  marginLeft: 5,
                }}>
                To Account
              </Text>
            </TouchableOpacity>

            {/* ====SignUp==== */}

            <TouchableOpacity
              onPress={() => {
                setClicked(false);
                _CreateAccount(true);
              }}
              style={{
                borderBottomWidth: 5,
                width: '47%',
                borderColor: isClicked
                  ? 'transparent'
                  : theme.bordersColor.orangeBorder,
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontFamily: 'Roboto-Regular',
                  color: isClicked
                    ? theme.textColors.lightGray
                    : theme.textColors.lightBlack,
                }}>
                Sign Up
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: 'Roboto-Bold',
                  color: isClicked
                    ? theme.textColors.lightGray
                    : theme.textColors.lightBlack,
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>

          {isClicked ? _SignIn() : _CreateAccount()}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
