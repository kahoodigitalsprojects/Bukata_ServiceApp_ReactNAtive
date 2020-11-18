import React, {useState, useRef} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import Header from '../../../components/header';
// console.log('theame');

const App = (props) => {
  function _ConfrimB() {
    props.navigation.navigate('drawer');
  }

  // ==============PhoneInputs==============
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef();
  return (
    <ImageBackground
      source={require('../../../assets/images/bg6.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          isVisibleIcon={true}
          // drawerIcon={true}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: 25}}>OTP Screen</Text>

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
