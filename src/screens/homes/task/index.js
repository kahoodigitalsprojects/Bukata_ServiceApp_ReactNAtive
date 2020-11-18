import React, {useState} from 'react';
import {ScrollView, View, Text, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../components/header';
import {theme} from '../../../constants/theme';

const Task = (props) => {
  
  const [array, setArray] = useState([
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'J',
      name: 'Johan Doe',
      request: 'Requests 5',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'k',
      name: 'Martha',
      request: 'Requests 8',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
    {
      Price: '1200',
      day: 'Monday',
      date: 'Mid-day 10am to 2pm',
      fname: 'L',
      name: 'Aleeza',
      request: 'Requests 6',
      adress: 'First Gate Dadinkowa',
      street: 'Mess Place ,Rayfiewl',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {/* ==========Header========== */}

        <Header
          text={'Tasks'}
          isTransparent={false}
          isVisibleIcon={true}
          //   drawerIcon={true}
        />
        {/* ++++++++++++++++  main Container +++++++++++++++++++ */}

        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Roboto-Bold',
                // fontWeight: '900',
              }}>
              3 Tasks Available
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{color: theme.textColors.black}}>Sort by</Text>

              <AntDesign
                name="caretdown"
                size={12}
                color={theme.iconsColor.black}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 3,
                  padding: 2,
                }}
              />
            </View>
          </View>
        </View>

        {/* +++++++++++++++++++++++++ main elevation box++++++++++++++++++++ */}

        {array.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                elevation: 2,
                backgroundColor: theme.taskColors.bgColorWhite,
                width: '90%',
                borderRadius: 10,
                alignSelf: 'center',
                // height: 200,
                padding: 5,
                marginVertical: 10,
              }}>
              {/* ++++++++++++++++++ profile main View +++++++++++++++++++++++++ */}
              <View
                style={{
                  flexDirection: 'row',
                  margin: 4,
                  alignItems: 'center',
                  width: '95%',
                  justifyContent: 'space-between',
                }}>
                {/* ++++++++++++++++++ profile Image view+++++++++++++++++++++++++ */}

                <View style={{flexDirection: 'row', margin: 5}}>
                  <View
                    style={{
                      marginVertical: 5,
                      backgroundColor: theme.taskColors.profileBG,
                      width: 50,
                      height: 50,
                      borderRadius: 100,
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        marginTop: 12,
                        fontSize: 18,
                        color: theme.globalButtonColor.textWhite,
                      }}>
                      {item.fname}
                    </Text>
                  </View>

                  {/* ++++++++++++++ profile name View +++++++++++++++++++++ */}

                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        marginTop: 18,
                        // fontWeight: 'bold',
                        fontFamily: 'Roboto-Bold',
                        color: theme.textColors.black,
                      }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{fontSize: 12, color: theme.textColors.darkGray}}>
                      {item.request}
                    </Text>
                  </View>
                </View>

                {/* ++++++++++++++++++Price View +++++++++++++++++++++++++ */}

                <View style={{}}>
                  <Text
                    style={{
                      color: theme.textColors.orange,
                      fontSize: 18,
                      fontFamily: 'Roboto-Bold',
                      //   fontWeight: 'bold',
                    }}>
                    {item.Price}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                      fontFamily: 'Roboto-Thin',
                      color: theme.textColors.black,
                    }}>
                    Heavy
                  </Text>
                </View>
              </View>

              {/* ==========  yellow dot Row ========== */}
              <View
                style={{
                  width: '100%',
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 40, alignItems: 'flex-end'}}>
                    <View
                      style={{
                        width: 9,
                        height: 9,
                        backgroundColor: theme.taskColors.circleLight,
                        borderRadius: 12,
                      }}></View>
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 14,
                      width: '100%',
                      color: theme.textColors.black,
                    }}>
                    {item.adress}
                  </Text>
                </View>

                {/* ++++++++++++++++ midele small border +++++++++++++++ */}
                <View style={{width: 46, alignItems: 'flex-end'}}>
                  <View
                    style={{
                      width: 11,
                      height: 14,
                      borderLeftWidth: 0.3,
                      marginLeft: 4,
                      marginBottom: 2,
                      borderColor: theme.taskColors.circleDark,
                    }}></View>
                </View>

                {/* ========== Orange dot Row ========== */}
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 40, alignItems: 'flex-end'}}>
                    <View
                      style={{
                        width: 9,
                        height: 9,
                        backgroundColor: theme.bordersColor.orangeBorder,
                        borderRadius: 12,
                      }}
                    />
                  </View>

                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 14,
                      marginTop: 0,
                      //   width: '100%',
                      color: theme.textColors.black,
                    }}>
                    {item.street}
                  </Text>
                </View>
              </View>

              {/* ++++++ main view for date and time +++++++ */}

              <View
                style={{
                  borderTopWidth: 0.4,
                  borderColor: theme.bordersColor.borderColor,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  width: '90%',
                  justifyContent: 'space-between',
                  //   margin: 5,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 7,
                    // backgroundColor: 'red',
                    alignItems: 'center',
                  }}>
                  <View>
                    <Entypo
                      name="calendar"
                      size={18}
                      color={theme.iconsColor.orange}
                      style={{}}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      padding: 5,
                      color: theme.textColors.black,
                    }}>
                    {item.day}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    alignItems: 'center',
                  }}>
                  <View>
                    <AntDesign
                      name="clockcircleo"
                      size={18}
                      color={theme.iconsColor.orange}
                      style={{paddingLeft: 10}}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      padding: 5,
                      color: theme.textColors.black,
                    }}>
                    {item.date}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Task;
