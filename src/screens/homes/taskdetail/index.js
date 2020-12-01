import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import GlobalButton from '../../../components/buttons/globalbutton';
import Header from '../../../components/header';
import {theme} from '../../../constants/theme';
import Toast from 'react-native-toast-message';
import Toastmessage from '../../../components/toastmessage';

const App = (props) => {
  const [color, setColor] = useState('');
  const [offer, setOffer] = useState('');
  const [isError, setError] = useState(false);

  function _Send() {
    if (offer >= 1) {
      props.navigation.navigate('successtask');
      setError(false);
    } else if (offer == '') {
      setError(true);
      // Toastmessage('Please Make a Offer', '', 'info', 'bottom');
    } else {
      setError(true);
    }
  }
  let item = props.route.params.selectedTask;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFF'}}>
      {console.log('NOW I GOT THE DATA', props.route.params.selectedTask)}
      <Header
        text={'Tasks'}
        isTransparent={false}
        isVisibleIcon={true}
        navigation={props.navigation}
        //   drawerIcon={true}
      />
      <View
        style={{
          flex: 0.22,
          // backgroundColor: 'green',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* ========== first row for profile ========== */}

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginBottom: 10,
          }}>
          <View
            style={{
              backgroundColor: theme.secondaryColor,
              width: 70,
              height: 70,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: theme.textColors.white,
                fontSize: 20,
                fontFamily: 'Roboto-Bold',
              }}>
              J
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingLeft: 10,
            }}>
            <Text
              style={{
                fontSize: 17,
                // fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
                color: theme.textColors.black,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: theme.textColors.gray,
                fontFamily: 'Roboto-Thin',
              }}>
              15 Request{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '90%',
            marginVertical: 10,
            borderBottomWidth: 1,
            borderColor: theme.bordersColor.lightBorder,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: theme.bordersColor.lightYellow,
                borderRadius: 10,
              }}></View>
            <View>
              {/* ++++++++++++++++++yellow dot text View +++++++++++++++++++++++++ */}
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  marginTop: -5,
                  fontFamily: 'Roboto-Regular',
                  color: theme.textColors.black,
                }}>
                First Gate Dadinkowa
              </Text>
            </View>
          </View>
          {/* +++++++++++++++++++++++ midele small border ++++++++++++++++++++ */}

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 11,
                height: 14,
                borderLeftWidth: 0.3,
                marginLeft: 4,
                marginBottom: 2,
                borderColor: theme.bordersColor.borderColor,
              }}></View>
          </View>
          {/* +++++++++++++++++++++++ orange dot view ++++++++++++++++++++ */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: theme.bordersColor.orangeBorder,
                borderRadius: 10,
              }}></View>

            {/* +++++++++++++++++++++++ orangr text view ++++++++++++++++++++ */}
            <View style={{marginBottom: 30}}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 14,
                  marginTop: -5,
                  color: theme.textColors.black,
                  fontFamily: 'Roboto-Regular',
                }}>
                Mees Palace Rayfield
              </Text>
            </View>
          </View>
        </View>

        <View style={{width: '90%', marginTop: 20}}>
          <Text
            style={{color: theme.textColors.black, fontFamily: 'Roboto-Bold'}}>
            Package Description
          </Text>
          <Text
            style={{
              color: theme.textColors.orange,
              marginVertical: 6,
              fontFamily: 'Roboto-Bold',
            }}>
            Weight:
            <Text>Heavy</Text>
          </Text>
        </View>
        {/* ++++++++++++++++++paragraph view++++++++++++++++ */}
        <View style={{width: '90%', marginVertical: 10}}>
          <Text
            style={{
              color: theme.textColors.darkGray,
              fontFamily: 'Roboto-Regular',
            }}>
            3 cartons of indome noodles to be deliverd to mees place kitchen
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            backgroundColor: theme.bgColorWhite,
            alignItems: 'center',
            elevation: 2,
            borderRadius: 12,
            marginVertical: 5,
            overflow: 'hidden',
          }}>
          <View
            style={{
              backgroundColor: color
                ? theme.bordersColor.orangeBorder
                : theme.taskColors.makeOfferBG,
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                borderTopStartRadius: 12,
                padding: 5,
                color: color ? '#FFF' : '#000',
                fontFamily: 'Roboto-Regular',
              }}>
              MAKE OFFER
            </Text>
          </View>

          <TextInput
            placeholder={'0'}
            placeholderTextColor={theme.textColors.lightGray}
            keyboardType={'number-pad'}
            onChangeText={(offerText) => {
              setOffer(offerText);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
            style={{fontSize: 20, height: 60, fontWeight: 'bold'}}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            // marginBottom: 10,
            width: '80%',
            backgroundColor: isError ? '#ffeeee' : null,
            borderRadius: 20,
          }}>
          <Text style={{color: 'red', fontSize: 12}}>
            {isError ? 'Please Fill Input Correctly' : null}
          </Text>
        </View>
      </View>

      {/*++++++++++++++++ last button View++++++++++++++++ */}

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          //   backgroundColor: 'pink',
          flex: 0.9,
          marginVertical: 10,
        }}>
        <GlobalButton title={'Send Request'} onPress={() => _Send()} />
      </View>
      {/* ========== Toast Message ========== */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};
export default App;
