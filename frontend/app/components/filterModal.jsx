// FilterModal.js
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import BallIcon from '../../assets/imgsJsx/ball';
import MusicIcon from '../../assets/imgsJsx/musicIcon';
import ArtIcon from '../../assets/imgsJsx/artIcon';
import FoodIcon from '../../assets/imgsJsx/foodIcon';
import CalendarIcon from '../../assets/imgsJsx/calender';
import LeftFlesh from '../../assets/imgsJsx/leftFlesh';
import 'react-datepicker/dist/react-datepicker.css';
import DistanceSlider from './distanceSlider';
import LocationIcon from '../../assets/imgsJsx/location';
import RightFlesh1Icon from '../../assets/imgsJsx/rightFlesh1';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

const FilterModal = ({ isVisible, onClose }) => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }


  //Centre d'interet
  const [circleStates, setCircleStates] = useState([true, false, false, false]);

  const toggleCircle = (index) => {
    const newStates = circleStates.map((state, i) => (i === index ? !state : state));
    setCircleStates(newStates);
  };

  const icons = [BallIcon, MusicIcon, ArtIcon, FoodIcon];
  const names = ['Sports', 'Music', 'Art', 'Food'];



  //date Modal
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };





  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={styles.recContainer}>
          <View style={styles.rectangle1}></View>
        </View>
        <Text style={styles.title}>Filter</Text>
        <View style={styles.itemsContainerStyle}>
          {circleStates.map((isFocused, index) => {
            const IconComponent = icons[index];
            const name = names[index];
            return (
              <View key={index} style={styles.circleContainer}>
                <TouchableOpacity
                  style={isFocused ? styles.focusedCircle : styles.unfocusedCircle}
                  onPress={() => toggleCircle(index)}
                >
                  <IconComponent fill={isFocused ? 'white' : '#B6B6B6'} />
                </TouchableOpacity>
                <Text style={styles.namesStyle}>{name}</Text>
              </View>
            );
          })}
        </View>
        <Text style={styles.timeStyle}>Time & Date</Text>
        <TouchableOpacity style={styles.dateStyle} onPress={showDatePicker}>
          <CalendarIcon style={styles.calendarIconStyle} fill={'rgba(86, 167, 255, 1)'} />
          <Text style={styles.txtStyle1}>Choose from calendar</Text>
          <LeftFlesh style={styles.fleshIconStyle} />
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <View style={styles.locationStyle}>
          <Text style={styles.txtLocationStyle}>Location</Text>
          <View style={styles.locationContainerStyle}>
            <View style={styles.squareStyle1}>
              <View style={styles.squareStyle2}>
                <LocationIcon></LocationIcon>
              </View>
            </View>
            <Text style={styles.txtLocationStyle2}>Tunis,Tunisia</Text>
            <RightFlesh1Icon style={{position: 'absolute',right: 18}}></RightFlesh1Icon>
          </View>
        </View>
        <DistanceSlider></DistanceSlider>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    marginTop: 200,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
    height: height * 0.9,
    paddingBottom: 50,
  },
  recContainer: {
    alignItems: 'center',
  },
  rectangle1: {
    height: 4.65,
    width: 26,
    backgroundColor: 'rgba(178, 178, 178, 0.5)',
    borderRadius: 10,
    marginTop: -10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 33.33,
    fontWeight: 700,
    fontFamily: 'Poppins-bold',
    marginTop: 6,
  },
  circleContainer: {
    alignItems: 'center',
  },
  focusedCircle: {
    height: 58.85,
    width: 63.29,
    backgroundColor: 'rgba(86, 167, 255, 1)',
    borderRadius: 50,
    marginTop: 18,
    marginLeft: 18,
    shadowColor: 'rgba(86, 167, 255, 1)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfocusedCircle: {
    height: 58.85,
    width: 63.29,
    borderRadius: 50,
    borderWidth: 0.87,
    borderColor: 'rgba(229, 229, 229, 1)',
    marginTop: 18,
    marginLeft: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsContainerStyle: {
    flexDirection: 'row',
  },
  namesStyle : {
    marginLeft : 15,
    marginTop : 10,
    fontSize : 14,
    fontFamily : 'Poppins-Bold',
    lineHeight : 23,
  },
  timeStyle : {
    marginTop : 24,
    fontSize : 16,
    fontFamily : 'Poppins-Regular',
    lineHeight : 34,
  },
  dateStyle : {
    borderRadius : 10,
    borderWidth : 1,
    borderColor : 'rgba(230, 230, 230, 1)',
    height : 40,
    width : 241,
    marginTop : 8,
    flexDirection : 'row',
    alignItems : 'center'
  },
  calendarIconStyle : {
    marginLeft : 14,
  },
  fleshIconStyle:{
    marginLeft : 5,
    marginTop : 5,
  },
  txtStyle1 : {
    fontSize : 15,
    fontFamily : 'Poppins-SemiBold',
    color : 'rgba(128, 122, 122, 1)',
    marginLeft : 5,
    marginTop : 3,
  },
//location style
  locationStyle : {
    marginTop : 20,
    marginLeft : 2,
  },
  txtLocationStyle : {
    fontSize : 16,
    fontFamily : 'Poppins-Regular',
    lineHeight : 34,
  },
  txtLocationStyle2 : {
    fontSize : 16,
    fontFamily : 'Poppins-Bold',
    marginLeft : 18
  },
  locationContainerStyle : {
    height : 56,
    width : 334,
    borderRadius : 15,
    borderWidth : 1,
    borderColor:'rgba(229, 229, 229, 1)',
    marginTop : 10,
    alignItems : 'center',
    flexDirection : 'row'

  },
  squareStyle1 : {
    marginLeft : 7,
    width : 45,
    height : 42,
    borderRadius : 12,
    backgroundColor : '#E6F2FF',
    justifyContent : 'center',
    alignItems : 'center'
  },
  squareStyle2 : {
    width : 31,
    height : 28,
    borderRadius : 10,
    backgroundColor : 'white',
    justifyContent : 'center',
    alignItems : 'center'
  }
});

export default FilterModal;
