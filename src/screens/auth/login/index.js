import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import FacebookButton from '../../../components/buttons/facebookbutton';
import GmailButton from '../../../components/buttons/gmailbutton';
import Header from '../../../components/header';
console.log('theame');
const App = (props) => {
  function _Login() {
    props.navigation.navigate('drawer');
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
      }}>
      <Header text={'Tasks'} isTransparent={false} isVisibleIcon={true} />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          lineHeight: 30,
          color: theme.textColors.orange,
        }}>
        Login
      </Text>

      <View
        style={{
          marginVertical: 20,
          justifyContent: 'space-around',
          height: 200,
        }}>
        <GlobalButton
          buttonTheme="border"
          onPress={() => _Login()}
          title="Login"
        />
        <GlobalButton
          buttonTheme="background"
          // onPress={() => _Signup()}
          title="Sign Up"
        />
      </View>

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
  );
};

export default App;
