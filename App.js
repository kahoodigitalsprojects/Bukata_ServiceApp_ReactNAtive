import React from 'react';
import 'react-native-gesture-handler';
import Stack from './src/navigations/stacknavigation';

const App = (props) => {
  return <Stack navigation={props.navigation} />;
};

export default App;
