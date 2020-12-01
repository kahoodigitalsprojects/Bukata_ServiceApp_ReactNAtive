import React, {useState, useRef} from 'react';
import {View, ScrollView, ImageBackground} from 'react-native';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Header from '../../../components/header';
import Toastmessage from '../../../components/toastmessage';

const App = (props) => {
  const [isFilled, setFilled] = useState(false);

  // ============

  const [code, SetCode] = useState('');
  function _ConfrimB() {
    if (code.length == 3 || code == '') {
      Toastmessage('Please fill your', '', 'error');
    } else {
      props.navigation.navigate('drawer');
    }
  }
  return (
    <ImageBackground
      source={require('../../../assets/images/bg6.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          navigation={props.navigation}
          isVisibleIcon={true}
          // drawerIcon={true}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <OTPInputView
            style={{
              width: '80%',
              height: 200,
            }}
            placeholderCharacter="0"
            placeholderTextColor={theme.textColors.placeholder}
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged={(code) => {
            // this.setState({code});
            // }}
            autoFocusOnLoad
            // onCodeChanged={(code) => {
            //   if (code.length > 3) {
            //     setFilled(true);
            //   } else {
            //     setFilled(false);
            //   }
            // }}
            codeInputFieldStyle={{
              width: 65,
              height: 65,
              fontSize: 30,
              borderWidth: 1.5,
              borderRadius: 5,
              color: theme.textColors.black,
              borderColor: isFilled ? 'green' : theme.bordersColor.lightYellow,
            }}
            onCodeFilled={(text) => SetCode(text)}
            codeInputHighlightStyle={{
              borderColor: theme.bordersColor.orangeBorder,
            }}
          />

          <GlobalButton
            title={'Confrim'}
            titleStyle={{fontSize: 13}}
            onPress={() => _ConfrimB()}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
