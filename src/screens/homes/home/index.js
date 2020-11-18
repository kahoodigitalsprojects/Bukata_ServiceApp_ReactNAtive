import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {theme} from '../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';
import Header from '../../../components/header';
console.log('theame');

const App = (props) => {
  function _Send() {
    console.log("Sendes")
    props.navigation.navigate('chooseroute');
  }

  function _Deliver() {
    props.navigation.navigate('task');
  }

  const images = [
    require('../../../assets/images/slide1.png'),
    require('../../../assets/images/slide2.png'),
  ];
  return (
    <ImageBackground
      source={require('../../../assets/images/bg6.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          isTransparent={true}
          //  isVisibleIcon={true}
          drawerIcon={true}
        />
        {/* ==========Slider========== */}

        <View style={{flex: 0.5, justifyContent: 'flex-end', width: '100%'}}>
          <SliderBox
            images={images}
            // parentWidth={Dimensions.get('window').width / 1}
            SliderBoxHeight={180}
            // dotColor="#FFF"
            // inactiveDotColor="#90A4AE"
            dotStyle={{display: 'none'}}
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            // disableOnPress={true}
            resizeMode={'contain'}
            resizeMethod={'resize'}
            paginationBoxStyle={{
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              backgroundColor: 'transparent',
              width: '100%',
              backgroundColor: 'white',
            }}
            imageLoadingColor="#FFF"
          />
        </View>

        {/* =========2nd Portion========= */}

        <View
          style={{
            flex: 0.5,
          }}>
          {/* ==========Text row========== */}

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 60,
                width: 50,
                marginLeft: 20,
              }}>
              <AntDesign
                name="right"
                size={22}
                color={theme.iconsColor.yellow}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontFamily: 'Roboto-Thin',
                }}>
                What do you
              </Text>
              <Text
                style={{
                  color: theme.textColors.orange,
                  fontFamily: 'Roboto-Bold',
                  fontSize: 25,
                  // fontWeight: '900',
                }}>
                want to do
              </Text>
            </View>
          </View>

          {/* ==========Boxes========== */}

          <View
            style={{
              flexDirection: 'row',
              width: '85%',
              alignSelf: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() => _Send()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                height: 150,
                width: 140,
                backgroundColor: theme.secondaryColor,
              }}>
              <Image
                source={require('../../../assets/images/package.png')}
                style={{height: 80, width: 80}}
              />
              <Text
                style={{
                  color: theme.textColors.white,
                  fontFamily: 'Roboto-Bold',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                  letterSpacing: 0.5,
                  marginTop: 8,
                }}>
                Send {'\n'}Package
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => _Deliver()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                height: 150,
                width: 140,
                backgroundColor: theme.primaryColor,
              }}>
              <Image
                source={require('../../../assets/images/box.png')}
                style={{height: 80, width: 80}}
              />
              <Text
                style={{
                  color: theme.textColors.white,
                  fontFamily: 'Roboto-Bold',
                  fontWeight: 'bold',
                  fontSize: 18,
                  textAlign: 'center',
                  letterSpacing: 0.5,
                  marginTop: 8,
                }}>
                Deliver {'\n'}Package
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
