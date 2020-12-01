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

const App = (props) => {
  const [isPkgValue, setPkgValue] = useState('');
  const [isError, setError] = useState(false);

  function _Continue2() {
    if (isPkgValue.length >= 1) {
      props.navigation.navigate('datescreen');
      setError(false);
    } else if (isPkgValue == '') {
      setError(true);
    } else {
      setError(true);
    }
  }

  const [Packagechange, setPackagechange] = useState('');
  const _Pchange = (i) => {
    setPackagechange(i);
  };

  const [isPackages, setPackages] = useState([
    {
      Image: require('../../../assets/icons/feather.png'),
      title: 'Light',
    },
    {
      Image: require('../../../assets/icons/package-1.png'),
      title: 'medium',
    },
    {
      Image: require('../../../assets/icons/trolley.png'),
      title: 'Heavy',
    },
  ]);

  // ==========Border Color Change==========
  const [color, setColor] = useState('');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Package" suggest="Describe Your">
        <View
          style={{
            flex: 0.9,
            width: '85%',
            alignSelf: 'center',
            // backgroundColor: 'pink',
          }}>
          {/*========== Describe Package ==========*/}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <MaterialCommunityIcons
              name="shopping"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text
              style={{
                fontSize: 17,
                color: theme.textColors.lightBlack,
                fontFamily: 'Roboto-Bold',
                marginLeft: 8,
              }}>
              Describe Package
            </Text>
          </View>

          <TextInput
            placeholder={'e.g. a 32 inch TV Set'}
            placeholderTextColor={theme.textColors.placeholder}
            onChangeText={(text) => {
              setPkgValue(text);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
            style={{
              fontSize: 14,
              color: theme.textColors.black,
              marginBottom: 20,
            }}></TextInput>

          <View
            style={{
              borderWidth: 0.5,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
              marginVertical: 2,
            }}></View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor:  isError ?'#ffeeee' : null,
              borderRadius: 20,
              marginBottom: 10,
            }}>
            <Text style={{color: 'red', fontSize: 12}}>
              {isError ? 'Please Describe Package correctly' : null}
            </Text>
          </View>

          {/*========== Package Weight Row ==========*/}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 15,
              marginTop: 25,
            }}>
            <MaterialCommunityIcons
              name="speedometer"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text
              style={{
                fontSize: 17,
                color: theme.textColors.lightBlack,
                fontFamily: 'Roboto-Bold',
                marginLeft: 8,
              }}>
              Package Weight
            </Text>
          </View>

          {/* ==========Packages Box Row========== */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {/* ========== box 1 ========== */}

            {isPackages.map((item, i) => {
              // let loop = i.toString();
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    _Pchange(i);
                  }}
                  style={{
                    width: '30%',
                    // height: 130,
                    padding: 15,
                    backgroundColor: theme.bgColorWhite,
                    elevation: 0.5,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: Packagechange == i ? 1 : 0,
                    borderColor: theme.bordersColor.darkOrangeB,
                  }}>
                  <Image
                    source={item.Image}
                    style={{
                      width: 62,
                      height: 62,
                    }}
                  />
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: 'Roboto-Regular',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ==========Button========== */}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.1,
            marginVertical: 10,
          }}>
          <GlobalButton title={'Continue'} onPress={() => _Continue2()} />
        </View>
      </BgCustom>
      {/* ========== Toast Message ========== */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </ScrollView>
  );
};
export default App;
