import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {theme} from '../../../constants/theme';
import GlobalButton from '../../../components/buttons/globalbutton';
import FacebookButton from '../../../components/buttons/facebookbutton';
import GmailButton from '../../../components/buttons/gmailbutton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';
import Header from '../../../components/header';
console.log('theame');

const App = (props) => {
  const images = [
    require('../../../assets/images/slide1.png'),
    require('../../../assets/images/slide2.png'),
  ];
  return (
    <ImageBackground
      source={require('../../../assets/images/bg6.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <Header
        text={false}
        isTransparent={true}
        //  isVisibleIcon={true}
        drawerIcon={true}
      />
      {/* ==========Slider========== */}

      <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
        <SliderBox
          images={images}
          parentWidth={Dimensions.get('window').width / 1}
          SliderBoxHeight={180}
          // dotColor="#FFF"
          // inactiveDotColor="#90A4AE"
          dotStyle={{display: 'none'}}
          paginationBoxVerticalPadding={0}
          autoplay
          circleLoop
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
            width: '100%',
          }}
          imageLoadingColor="#FFF"
        />
      </View>
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
              width: 70,
            }}>
            <AntDesign name="right" size={22} color={theme.iconsColor.yellow} />
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: theme.textColors.orange}}>What do you</Text>
            <Text
              style={{
                color: theme.textColors.orange,
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Want to do
            </Text>
          </View>
        </View>

        {/* ==========Boxes========== */}

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-around',
          }}>
          <View
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
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                marginTop: 8,
              }}>
              Send {'\n'}Package
            </Text>
          </View>
          <View
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
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                marginTop: 8,
              }}>
              Deliver {'\n'}Package
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;
