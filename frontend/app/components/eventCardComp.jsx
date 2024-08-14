import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import SaveIcon from '../../assets/imgsJsx/save';
import MapIcon from '../../assets/imgsJsx/map';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');




const EventCard = ({ event }) => {
    

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
  return (
    <View style={styles.card}>
        <View style={styles.userData}>
            <View style={styles.userImgStyle}></View>
            <View>
                <Text style={styles.txtStyle1}>Lorem</Text>
                <Text style={styles.txtStyle2}>1hr ago</Text>
            </View>
        </View>
        <Image source={{ uri: event.image }} style={styles.image} />
        <View style={styles.card1}>
            <View style={styles.dateAreaStyle}>
                <Text style={styles.day}>{event.day}</Text>
                <Text style={styles.month}>{event.month}</Text>
            </View>
            <View style={styles.saveAreaStyle}>
                <SaveIcon fill="#56A7FF"></SaveIcon>
            </View>
        </View>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.goingUsersStyle}>
            <View style={styles.goingUserImg1}></View>
            <View style={styles.goingUserImg2}></View>
            <View style={styles.goingUserImg2}></View>
            <Text style={styles.attendance}>{event.attendance}</Text>
        </View>
        <View style={styles.locationAreaStyle}>
            <MapIcon fill="#B8B6C7"></MapIcon>
            <Text style={styles.location}>{event.location}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 238,
    height : 308,
    marginRight: 10,
    marginLeft : 34,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  day: {
    color: '#4E7AD0',
    padding: 5,
    fontSize : 18,
    fontFamily : 'Poppins-ExtraBold',
    lineHeight : 13.7,
    marginTop : 5,
  },
  month: {
    color: '#4E7AD0',
    padding: 5,
    fontSize : 10,
    fontFamily : 'Poppins-ExtraBold',
    lineHeight : 13.7,
    marginTop : -8
  },
  dateAreaStyle : {
    backgroundColor : '#FFFFFF',
    opacity : '70%',
    height : 45,
    width : 45,
    borderRadius : 10,
    marginTop : -142,
    marginLeft : 10,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  saveAreaStyle : {
    backgroundColor : '#FFFFFF',
    opacity : '70%',
    height : 30,
    width : 30,
    borderRadius : 10,
    marginTop : -142,
    marginLeft : 147,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card1 : {
    flexDirection : 'row',
  },
  title: {
    fontSize: 18,
    fontFamily : 'Poppins-Medium',
    lineHeight : 27,
    marginTop : 12,
  },
  locationAreaStyle : {
    flexDirection : 'row',
    marginTop : 10,
  },
  location: {
    fontSize: 13,
    color: '#B8B6C7',
    lineHeight : 19.5,
    marginHorizontal: 7,
    fontFamily : 'Poppins-Bold'
  },
  attendance: {
    fontSize: 12,
    color: '#1C3F83',
    marginHorizontal: 10,
    lineHeight : 19.24,
    fontFamily : 'Poppins-Medium',
    marginTop : 3
  },
  userImgStyle : {
    height : 46,
    width : 46,
    backgroundColor : '#C4C4C4',
    borderRadius : 23,
    marginRight : 8
  },
  userData : {
    flexDirection: 'row',
    marginBottom : 12
  },
  txtStyle1 : {
    fontFamily : 'Poppins-Medium',
    fontSize : 15,
    lineHeight : 22.5
  },
  txtStyle2 : {
    fontSize : 12,
    fontFamily : 'Poppins-Medium'
  },
  goingUsersStyle : {
    flexDirection : 'row',
    marginTop : 7
  },
  goingUserImg1 : {
    height : 24,
    width : 24,
    backgroundColor : 'black',
    opacity : '20%',
    borderRadius : 12,
    borderColor : 'white',
    borderWidth : 1,
  },
  goingUserImg2 : {
    height : 24,
    width : 24,
    backgroundColor : 'black',
    opacity : '20%',
    borderRadius : 12,
    borderColor : 'white',
    borderWidth : 1,
    marginLeft : -8
  },
});

export default EventCard;
