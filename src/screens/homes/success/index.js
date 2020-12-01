import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import GlobalButton from '../../../components/buttons/globalbutton';
import BgCustom from '../../../components/bgcustom';

import {theme} from '../../../constants/theme';

const App = (props) => {
  function _Done() {
    props.navigation.navigate('home');
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} icon={true}>
        {/* ========== Text View ========== */}

        <View
          style={{
            flex: 0.8,
            // backgroundColor: 'pink',
            alignItems: 'center',
            width: '85%',

            alignSelf: 'center',
          }}>
          <View style={{marginVertical: 25}}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: theme.textColors.orange,
              }}>
              SUCCESS
            </Text>
          </View>
          <View style={{marginVertical: 10, marginBottom: 20}}>
            <Text
              style={{
                fontSize: 19,
                textAlign: 'center',
                fontFamily: 'Roboto-Bold',
                fontWeight: 'bold',
                color: theme.textColors.black,
              }}>
              Thank you for{'\n'}your Reservation!
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 17,
                textAlign: 'center',
                //   fontWeight: 'bold',
                color: theme.textColors.black,
              }}>
              Your request has been published{'\n'}and you will be notified if
              anyone{'\n'}accepts the offer
            </Text>
          </View>
        </View>
        {/* +++++++++++++++++++ button View ++++++++++++++++++ */}
        <View
          style={{
            flex: 0.3,
            //   backgroundColor: 'yellow',
            alignItems: 'center',
            width: '85%',
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 10,
          }}>
          <GlobalButton
            buttonTheme={'border'}
            title={'DONE'}
            onPress={() => _Done()}
            buttonStyle={{width: 300}}
            titleStyle={{fontSize: 13}}
          />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
