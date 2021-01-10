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
import CheckBox from '@react-native-community/checkbox';

import Toastmessage from '../../../components/toastmessage';
import styles from './styles';
let path = '../../../assets/images/bg6.png';

const App = (props) => {
  const [name, setname] = useState('saad');
  function _SignUpB() {
    // let dbName = 'Samad';
    props.navigation.navigate('chooseroute', {
      deliveryBoy: true,
    });
    // if (name == '' || value == '') {
    //   Toastmessage('Please Fill Inputs', '', 'info');
    // } else if (name.length >= 1 && value.length >= 1) {
    //   props.navigation.navigate('task');
    // } else {
    //   Toastmessage('You enter wrong details', '', 'error');
    // }
  }

  // ==============PhoneInputs==============
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [vicheles, Setvicheles] = useState([
    {
      name: 'Riding',
    },
    {
      name: 'Driving',
    },
    {
      name: 'Flying',
    },
  ]);

  const phoneInput = useRef();

  const _CreateAccount = () => {
    return (
      <View style={styles.flexView}>
        {/* ==========name and textinputname========= */}
        <View
          style={{
            ...styles.nameview,
            borderColor: color
              ? theme.bordersColor.darkOrangeB
              : theme.bordersColor.borderColor,
          }}>
          <Text style={styles.fullnametext}>Full Name</Text>
          <TextInput
            placeholder={'Abdul Samad'}
            onChangeText={(nameText) => {
              setname(nameText);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
          />
        </View>
        <Text style={styles.phonetext}>Phone Number</Text>
        {/* =========Number Input========= */}
        <View style={styles.numberinputView}>
          {showMessage && (
            <View>
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
            value={value}
            containerStyle={styles.containerstyle}
            // textInputStyle={{}}
            placeholder="Enter the Number"
            textContainerStyle={{
              ...styles.textcontainerstyle,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}
            codeTextStyle={styles.codetextstyle}
          />
        </View>

        <View
          style={{
            ...styles.nameview,
            borderColor: color
              ? theme.bordersColor.darkOrangeB
              : theme.bordersColor.borderColor,
          }}>
          <Text style={styles.fullnametext}>Passport Number</Text>
          <TextInput
            placeholder={'C, F, G, H, J, K /0-9'}
            onChangeText={(nameText) => {
              setname(nameText);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
          />
        </View>
        {/* ==============Global Button============= */}

        {vicheles.map((item, i) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox == i}
                onFillColor={'blue'}
                onCheckColor="red"
                tintColors="red"
                onValueChange={(newValue) => {
                  setToggleCheckBox(i);
                }}
              />
              <Text> {item.name} </Text>
            </View>
          );
        })}

        <View style={styles.globalbtview}>
          <GlobalButton
            title={'verify'}
            titleStyle={{fontSize: 13}}
            onPress={() => _SignUpB()}
          />
        </View>
      </View>
    );
  };

  // ================ Const SignIn =================

  // =======main=====
  return (
    <ImageBackground
      source={require(path)}
      style={styles.mainimgbdview}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          //  isVisibleIcon={true}
          // drawerIcon={true}
        />
        {/* ======signin and signup touch==== */}
        <View style={styles.tapmainview}>
          <View style={styles.taprowview}>
            {/* =======tap Sign In===== */}
            <View
              //   onPress={() => setClicked(true)}
              style={{
                ...styles.tapsigintouch,
                borderColor: theme.bordersColor.orangeBorder,
              }}>
              <Text
                style={{
                  ...styles.tapsigintext,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                Identity
              </Text>
              <Text
                style={{
                  ...styles.sigintoaccounttext,
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 17,
                }}>
                Verification
              </Text>
            </View>

            {/* ==== tapSignUp==== */}
          </View>

          {_CreateAccount()}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
