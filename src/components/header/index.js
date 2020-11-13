import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {theme} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App = ({isTransparent, text, isVisibleIcon, drawerIcon}) => {
  return (
    <View
      style={{
        height: 50,
        alignItems: 'center',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: isTransparent ? 'transparent' : theme.headerColor,
      }}>
      {isVisibleIcon && (
        <TouchableOpacity
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="left" size={17} color={theme.iconsColor.black} />
        </TouchableOpacity>
      )}
      {drawerIcon && (
        <TouchableOpacity
          style={{
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name="bars" size={17} color={theme.iconsColor.white} />
        </TouchableOpacity>
      )}
      <View style={{flex: 1}}>
        {text && (
          <Text style={{fontWeight: 'bold', fontSize: 20, letterSpacing: 0.5}}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};
export default App;
