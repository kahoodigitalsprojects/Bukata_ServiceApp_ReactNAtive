import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {theme} from '../../../constants/theme';
import BgCustom from '../../../components/bgcustom';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalButton from '../../../components/buttons/globalbutton';
import styles from './styles';
import DropDownPicker from 'react-native-dropdown-picker';
// import {Icon} from 'native-base';

import Icon from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  const [isPkgValue, setPkgValue] = useState('');
  const [country, setCountry] = useState('Select Company');
  const [isError, setError] = useState(false);

  function _Continue2() {
    props.navigation.navigate('datescreen');

    // if (isPkgValue.length >= 1) {
    //   props.navigation.navigate('datescreen');
    //   setError(false);
    // } else if (isPkgValue == '') {
    //   setError(true);
    // } else {
    //   setError(true);
    // }
  }

  const [Packagechange, setPackagechange] = useState('');
  const _Pchange = (i) => {
    setPackagechange(i);
  };

  const [items, setItems] = useState([
    {
      label: 'USA',
      value: 'usa',
      icon: () => <Icon name="flag" size={18} color="#900" />,
      hidden: true,
    },
    {
      label: 'UK',
      value: 'uk',
      icon: () => <Icon name="flag" size={18} color="#900" />,
    },
    {
      label: 'France',
      value: 'france',
      icon: () => <Icon name="flag" size={18} color="#900" />,
    },
  ]);
  const [data, setData] = useState([
    {
      name: 'Company 1',
    },
    {
      name: 'Company 2',
    },
    {
      name: 'Company 2',
    },
  ]);
  const [label, setLable] = useState('Select  a company');

  const [scan, setscan] = useState(false);
  // ==========Border Color Change==========
  const [color, setColor] = useState('');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Delivery Services" suggest="Other">
        {/* ==========Button========== */}
        <View
          style={{
            // elevation:2,backgroundColor:'white'
            // ,
            // borderWidth: 1,
            marginVertical: 20,

            width: '80%',
            alignSelf: 'center',
            // borderWidth: 0.5,
            elevation: 2,
          }}>
          <View
            style={{
              height: 40,
              alignSelf: 'center',
              //   borderWidth: 1,
              //   elevation: 1,
              borderRadius: 3,
              flexDirection: 'row',
              elevation: 3,
              backgroundColor: 'white',
              // backgroundColor:'red'
            }}>
            {/* <View
            style={{
              width: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              type={'AntDesign'}
              name={'up'}
              // name={'down'}
              style={{fontSize: 15}}
            />
          </View> */}

            <View
              style={{
                width: '80%',
                paddingLeft: 10,
                borderWidth: 0,
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12}}>{label} </Text>
            </View>

            <TouchableOpacity
              style={{
                width: '20%',
                // borderWidth: 1,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={
                () => setscan(!scan)
                // props._OpenPicker()
              }>
              <Icon
                // type={'AntDesign'}
                name={scan ? 'caretup' : 'caretdown'}
                // name={'down'}
                // style={{fontSize: 12}}
              />
            </TouchableOpacity>
          </View>
          {scan ? (
            <View
              style={{
                // elevation: 1,
                backgroundColor: 'white',
                width: '100%',
                alignSelf: 'center',
              }}>
              {data?.map((item, i) => {
                console.log('==', item);
                return (
                  <>
                    <TouchableOpacity
                      style={{
                        borderWidth: 0,
                        // borderBottomWidth: 0.4,
                        elevation: 1,
                        paddingVertical: 10,
                        paddingVertical: 10,
                      }}
                      onPress={() => {
                        setscan(!scan);
                        setLable(item.name);
                      }}>
                      <Text> {item.name} </Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          ) : null}
        </View>

        <View style={styles.ButtonMainview}>
          <GlobalButton title={'Continue'} onPress={() => _Continue2()} />
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </ScrollView>
  );
};
export default App;
