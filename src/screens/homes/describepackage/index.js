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
      averageWeight: '0-7kg',
    },
    {
      Image: require('../../../assets/icons/package-1.png'),
      title: 'medium',
      averageWeight: '8-15kg',
    },
    {
      Image: require('../../../assets/icons/trolley.png'),
      title: 'Heavy',
      averageWeight: 'above 15kg',
    },
  ]);

  // ==========Border Color Change==========
  const [color, setColor] = useState('');

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Package" suggest="Describe Your">
        <View style={styles.borderView}>
          {/*========== Describe Package ==========*/}
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 160,
              // borderWidth: 1,
            }}>
            <View style={{width: '15%', borderWidth: 0, height: '100%'}}>
              <View
                style={{
                  height: '50%',
                  // borderWidth: 1,
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/location.png')}
                  style={{height: 25, width: 25}}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  height: '50%',
                  // borderWidth: 1,
                  // justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/dropoff.png')}
                  style={{height: 30, width: 30}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text> Pickup </Text>
              <TextInput
                editable={false}
                placeholder="Shaz banglows  china"
                style={{borderBottomWidth: 0.5, borderColor: 'gray'}}
              />
              <Text style={{marginTop: 10}}> Drop off </Text>
              <TextInput
                editable={false}
                placeholder="street 40 Hong Kong"
                style={{
                  borderBottomWidth: 0.5,
                  borderColor: 'gray',
                  marginBottom: 20,
                }}
              />
            </View>
          </View> */}

          <View style={styles.describepackageViewrow}>
            <MaterialCommunityIcons
              name="shopping"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text style={styles.describeviewText}>Describe Package</Text>
          </View>

          <TextInput
            placeholder={'e.g. a 32 inch TV Set'}
            placeholderTextColor={theme.textColors.placeholder}
            onChangeText={(text) => {
              setPkgValue(text);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
            style={styles.describeTextinput}></TextInput>

          <View
            style={{
              ...styles.describeborder,
              borderColor: color
                ? theme.bordersColor.darkOrangeB
                : theme.bordersColor.borderColor,
            }}></View>
          <View
            style={{
              backgroundColor: isError ? '#ffeeee' : null,
              ...styles.describewarningView,
            }}>
            <Text style={styles.warningText}>
              {isError ? 'Please Describe Package correctly' : null}
            </Text>
          </View>

          {/*========== Package Weight Row ==========*/}

          <View style={styles.packageweightMainview}>
            <MaterialCommunityIcons
              name="speedometer"
              size={25}
              color={theme.iconsColor.darkOrange}
            />
            <Text style={styles.packageweightText}>Package Weight</Text>
          </View>

          {/* ==========Packages Box Row========== */}

          <View style={styles.packageboxMainview}>
            {/* ========== box 1 ========== */}

            {isPackages.map((item, i) => {
              // let loop = i.toString();
              return (
                <>
                  <View
                    style={{
                      height: 200,
                      width: '30.33%',
                      // borderWidth: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      key={i}
                      onPress={() => {
                        _Pchange(i);
                      }}
                      style={{
                        ...styles.touchableimage,
                        borderWidth: Packagechange == i ? 1 : 0,
                      }}>
                      <Image
                        source={item.Image}
                        style={styles.touchableimages}
                      />
                      <View style={styles.touchableTextview}>
                        <Text style={styles.TouchableText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={{...styles.TouchableText, marginVertical: 10}}>
                      {item.averageWeight}
                    </Text>
                  </View>
                </>
              );
            })}
          </View>
        </View>

        {/* ==========Button========== */}

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
