import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
// import home from '../screens/homes/home';
import {Homes} from './stacknavigation';
import DrawerContent from '../screens/homes/customdrawer';

console.log('App====', Homes);
const Drawer = createDrawerNavigator();

function MyDrawer(props) {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerStyle={{backgroundColor: '#ef6c00'}}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={Homes}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
