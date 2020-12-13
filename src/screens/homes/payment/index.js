import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import {Button} from 'react-native-elements';
import GlobalHeader from '../../../components/header';
import GloballButton from '../../../components/buttons/globalbutton';

import Entypo from 'react-native-vector-icons/Entypo';
export default class Subcategory extends React.PureComponent {
  state = {
    search: '',
    selectPayment: '',
    paymentMethods: [
      {
        name: 'Use a credit/ Debit Card',
      },
      {
        name: 'Cash On Delivery',
      },
    ],
  };

  updateSearch = (search) => {
    this.setState({search});
  };
  _Post = () => {
    if (this.state.selectPayment == 1) {
      this.props.navigation.navigate('success');
    } else {
      this.props.navigation.navigate('creditcard');
    }
  };
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View>
          <GlobalHeader
            text={'Payment'}
            isTransparent={false}
            isVisibleIcon={true}
            navigation={this.props.navigation}
            //   drawerIcon={true}
          />
          {this.state.paymentMethods.map((item, i) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  backgroundColor: '#ffff',
                  alignSelf: 'center',
                  borderRadius: 10,
                  marginVertical: 5,
                  paddingVertical: 15,
                  overflow: 'hidden',
                  flexDirection: 'row',
                  elevation: 4,
                  marginVertical: 20,
                }}
                key={i}
                onPress={() => {
                  this.setState({
                    selectPayment: i,
                  });
                }}>
                <View
                  style={{
                    width: '20%',
                    borderWidth: 0,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 35,
                      width: 35,
                      marginTop: 0,
                      borderRadius: 35,
                      backgroundColor: 'white',
                      elevation: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Entypo name="credit-card" size={20} />
                  </View>
                </View>

                <View
                  style={{
                    width: '80%',
                    borderWidth: 0,
                    paddingLeft: 5,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#585858',
                      marginVertical: 5,
                      fontWeight: 'bold',
                    }}>
                    {item.name}
                  </Text>
                  <View
                    style={{
                      borderWidth: 1.5,
                      width: 20,
                      alignItems: 'center',
                      borderColor: '#707070',
                      justifyContent: 'center',
                      height: 20,
                      borderRadius: 20,
                      position: 'absolute',
                      right: 20,
                      top: 5,
                    }}>
                    <View
                      style={{
                        borderWidth: 1.5,
                        width: 15,
                        alignItems: 'center',
                        borderColor: '#707070',
                        justifyContent: 'center',
                        height: 15,
                        borderRadius: 15,
                        backgroundColor:
                          this.state.selectPayment == i ? 'black' : 'white',
                      }}></View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <GloballButton
          title={'Proceed'}
          onPress={() => this._Post()}
          buttonStyle={{width: '80%', borderRadius: 25}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#7c0183',
    borderColor: 'white',
  },
});
