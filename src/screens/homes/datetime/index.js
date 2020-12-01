import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import {theme} from '../../../constants/theme';
import BgCustom from '../../../components/bgcustom';
import GlobalButton from '../../../components/buttons/globalbutton';
import moment from 'moment';
import Toast from 'react-native-toast-message';
const App = (props) => {
  function _Continue3() {
    props.navigation.navigate('contactinfo');
  }

  // ==========Date & Time States==========

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  // ========== Using Map ==========

  const [array, setarray] = useState([
    {
      image: require('../../../assets/icons/sunrise.png'),
      title1: 'Morning',
      title2: 'before 10am',
    },
    {
      image: require('../../../assets/icons/dawn.png'),
      title1: 'Mid Day',
      title2: '10am-2pm',
    },
    {
      image: require('../../../assets/icons/sun.png'),
      title1: 'Afternoon',
      title2: '2pm-6pm',
    },
    {
      image: require('../../../assets/icons/half-moon.png'),
      title1: 'Evening',
      title2: 'after 6pm',
    },
  ]);
  // ==========Border Change Function & State==========
  const [change, setChange] = useState('');
  const _Change = (i) => {
    setChange(i);
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <BgCustom {...props} name="Date & Time" suggest="Set Your">
        {/* ========Second Flex ======== */}

        <View
          style={{
            width: '85%',
            flex: 0.9,
            // justifyContent: 'center',
            // alignItems: 'center',
            alignSelf: 'center',
          }}>
          {/* ==========Date & Time Row========== */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Entypo name="calendar" color={theme.iconsColor.orange} size={25} />

            <Text
              style={{
                fontSize: 17,
                marginLeft: 10,
                fontFamily: 'Roboto-Bold',
                color: theme.textColors.lightBlack,
              }}>
              Set Date & Time
            </Text>
          </View>

          {/* ========== Date & Time Code ========== */}

          <View
            style={{
              backgroundColor: theme.chooseDateBG,
              width: '100%',
              marginVertical: 12,
              borderRadius: 0,
              elevation: 1,
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{justifyContent: 'center', paddingLeft: 7}}>
              <Text>{`${moment(date).format(' dddd, DD MMM YYYY')}`}</Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                padding: 10,
                // backgroundColor: 'pink',
              }}
              onPress={showDatepicker}>
              <AntDesign
                name="caretdown"
                size={12}
                color={theme.iconsColor.placeholderIcon}
              />
            </TouchableOpacity>
          </View>

          <View>
            {/* <Button onPress={showTimepicker} title="Show time picker!" /> */}
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={false}
                display="default"
                onChange={onChange}
              />
            )}
          </View>

          {/* ========== Box Row Wrap ==========  */}

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {/* ========== Box with Map ==========  */}

            {array.map((item, i) => {
              // let loop = i.toString();
              return (
                <TouchableOpacity
                  key={i}
                  style={{
                    backgroundColor: theme.bgColorWhite,
                    width: '48%',
                    padding: 5,
                    elevation: 2,
                    borderRadius: 10,
                    borderWidth: change == i ? 1 : 0,
                    borderColor: theme.bordersColor.darkOrangeB,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 8,
                  }}
                  onPress={() => _Change(i)}>
                  <Image source={item.image} style={{width: 55, height: 55}} />

                  <Text style={{fontSize: 13, fontFamily: 'Roboto-Regular'}}>
                    {item.title1}
                  </Text>
                  <Text style={{fontSize: 10, fontFamily: 'Roboto-Thin'}}>
                    {item.title2}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* ++++++++++++++++++++ button ++++++++++++++++++++ */}

        <View style={{flex: 0.1, justifyContent: 'center'}}>
          <GlobalButton title={'Continue'} onPress={() => _Continue3()} />
        </View>
      </BgCustom>
    </ScrollView>
  );
};
export default App;
