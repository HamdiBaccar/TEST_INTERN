import { StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RightFleshIcon from '../../assets/imgsJsx/rightFlesh';
import { router } from 'expo-router';
import ActivityCardComp from './activityCardComp';
import apiActivityService from '../service/activityService';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

const handlePress = () => {
    router.push('./events'); 
  };



const NearbyActivitiesComp = () => {

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

      const [activity,setActivity] = useState([]);
        useEffect(() => {
          apiActivityService.getAllActivities()
          .then(response =>{
            setActivity(Array.isArray(response.data) ? response.data : []);
            console.log(response.data);
          })
          .catch(err =>{
            console.log(err);
          })
        },[])


  return (
    <View style={styles.container} >
      <View style={styles.group3352Style}>
            <Text style={styles.txtStyle1}>Nearby Activities</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.txtStyle2}>View More</Text>
            </TouchableOpacity>
            <RightFleshIcon style={styles.iconStyle1}></RightFleshIcon>
        </View>
        {Array.isArray(activity) && activity.length > 0 ? (
          activity.map((activity, index) => (
            <ActivityCardComp key={index} activity={activity} />
          ))
        ) : (
          <Text>No activities found</Text>
        )}

    </View>
  )
}

export default NearbyActivitiesComp

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    },
    group3352Style : {
        flexDirection: 'row',
        marginLeft : (24 / 375) * width,
    },
    txtStyle1 : {
        opacity: 0.84,
        color : '#120D26',
        fontFamily: 'Poppins-Medium',
        fontSize : 18,
        lineHeight : 34,
    }, 
    txtStyle2 : {
        marginLeft : (97 / 375) * width,
        color : '#747688',
        fontSize : 14,
        marginTop : (10/ 812) * height,
        fontFamily : 'Poppins-Bold'
    },
    iconStyle1 : {
        marginTop : (18/ 812) * height,
        marginLeft : 5.29,
    }
})