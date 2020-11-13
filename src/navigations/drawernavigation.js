import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import home from '../screens/homes/home';

const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator drawerType="slide" initialRouteName="Home">
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={home}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
