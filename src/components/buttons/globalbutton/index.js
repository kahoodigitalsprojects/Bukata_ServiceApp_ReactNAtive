import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {butttonTheme} from '../../../constants/theme';
// import Fontisto from 'react-native-vector-icons/Fontisto';

const App = ({
  onPress,
  buttonTheme,
  buttonStyle,
  titleStyle,
  title,
  containerStyle,
}) => {
  const [theme, setTheme] = useState('background');

  const switchColors = () => {
    switch (buttonTheme) {
      case 'border':
        setTheme('border');
        break;
      default:
        setTheme('background');
    }
  };

  useEffect(() => {
    switchColors();
  }, []);

  return (
    <Button
      title={title}
      onPress={() => (onPress ? onPress() : null)}
      buttonStyle={[
        {...butttonTheme[theme].buttonStyle},
        {
          ...buttonStyle,
        },
      ]}
      titleStyle={[
        {...butttonTheme[theme].titleStyle},
        {
          ...titleStyle,
        },
      ]}
      containerStyle={[
        {...containerStyle},
        {
          alignItems: 'center',
          borderRadius: 25,
          justifyContent: 'center',
        },
      ]}
    />
  );
};

export default App;
