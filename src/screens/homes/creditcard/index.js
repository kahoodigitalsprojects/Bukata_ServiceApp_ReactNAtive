import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import GlobalButton from '../../../components/buttons/globalbutton';
import GlobalHeader from '../../../components/header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Chat extends React.PureComponent {
  state = {
    searc: '',
  };

  _Paynow = () => {
    this.props.navigation.navigate('success');
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <GlobalHeader
            text={'Card Details'}
            isTransparent={false}
            isVisibleIcon={true}
            navigation={this.props.navigation}
            //   drawerIcon={true}
          />
          <View style={{width: '93%', alignSelf: 'center'}}>
            <Text style={{fontSize: 14, color: '#393E46', marginBottom: 10}}>
              {' '}
              Payment Details{' '}
            </Text>
            <Text style={{fontSize: 12, color: '#9ea0a4', marginVertical: 5}}>
              Name on card
            </Text>
            <TextInput
              placeholder="John Doe"
              style={{
                borderWidth: 1,
                paddingLeft: 10,
                fontSize: 12,
                borderRadius: 5,
                width: '100%',
                height: 45,
                borderColor: '#F4F6FD',
                backgroundColor: '#F4F6FD',
                elevation: 1,
                alignSelf: 'center',
              }}
              keyboardType="name-phone-pad"
            />
            <Text
              style={{
                fontSize: 12,
                color: '#9ea0a4',

                marginVertical: 5,
                marginTop: 20,
              }}>
              Card number
            </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#f3f6fe',
                elevation: 0.5,
                borderRadius: 5,
                marginVertical: 5,
              }}>
              <View
                style={{
                  width: '14%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome name="cc-mastercard" size={15} color="#d81e23" />
              </View>
              <TextInput
                placeholder="***** ***** **** 4567"
                style={{
                  paddingLeft: 10,
                  fontSize: 12,
                  flex: 1,
                  height: 45,
                  borderColor: '#F4F6FD',
                  backgroundColor: '#F4F6FD',
                  alignSelf: 'center',
                }}
                keyboardType="name-phone-pad"
              />
              <View
                style={{
                  width: '10%',
                  // borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons name="pencil" size={15} color="#ced1ec" />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#f3f6fe',
                elevation: 0.5,
                borderRadius: 5,
                marginVertical: 5,
              }}>
              <View
                style={{
                  width: '60%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#9ea0a4',

                      marginVertical: 5,
                      marginTop: 20,
                    }}>
                    Expiration
                  </Text>
                </View>
                <TextInput
                  placeholder="MM / YY "
                  style={{
                    fontSize: 12,
                    flex: 1,
                    borderRightWidth: 0.5,
                    borderColor: '#9ea0a4',
                    paddingLeft: 10,
                    height: 40,
                    backgroundColor: '#F4F6FD',
                    width: '100%',
                  }}
                  keyboardType="name-phone-pad"
                />
              </View>

              <View
                style={{
                  width: '40%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#9ea0a4',
                      marginVertical: 5,
                      marginTop: 20,
                    }}>
                    Secure code
                  </Text>
                </View>
                <TextInput
                  placeholder="01/20"
                  style={{
                    paddingLeft: 10,
                    fontSize: 12,
                    flex: 1,
                    height: 40,
                    width: '100%',
                    borderColor: '#F4F6FD',
                    backgroundColor: '#F4F6FD',
                    alignSelf: 'center',
                  }}
                  keyboardType="name-phone-pad"
                />
              </View>
            </View>

            <View
              style={{
                marginVertical: 30,
              }}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <Text style={{width: '70%', color: '#afb0b4', fontSize: 16}}>
                  Delivery Charges
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    width: '30%',
                    color: '#7a7d83',
                    fontWeight: 'bold',
                  }}>
                  $22
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  paddingVertical: 10,
                }}>
                <Text style={{width: '70%', color: '#afb0b4', fontSize: 16}}>
                  Total
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    width: '30%',
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  $223.333
                </Text>
              </View>
            </View>
          </View>
          <GlobalButton
            title={'Pay now'}
            buttonStyle={{width: '80%', borderRadius: 25}}
            onPress={() => this._Paynow()}
          />
        </View>
      </ScrollView>
    );
  }
}
