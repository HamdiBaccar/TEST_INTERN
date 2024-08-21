import { ScrollView,StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import RightFleshIcon from '../../assets/imgsJsx/rightFlesh';
import EventCard from './eventCardComp';
import apiService from '../service/eventService'
import { router } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

const handlePress = () => {
    router.push('./events'); 
  };

  const handleEventPress = (id) => {
    // Naviguer vers la page eventDetails avec les détails de l'événement
    router.push({
        pathname: '../(pages)/eventDetails',
        params: { id }  
    });
};

const UpComingEventsComp = () => {

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

      
      const [event, setEvent] = useState([]);
            useEffect(() => {
            // Fetch all events from the backend
            apiService.getAllEvents()
            .then(data => {
                setEvent(data);
            })
            .catch(error => {
                console.error(error);
            });
        }, []);
    
      

  return (
    <View style={styles.container}>
        <View style={styles.group3352Style}>
            <Text style={styles.txtStyle1}>Upcoming Events</Text>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.txtStyle2}>See All</Text>
            </TouchableOpacity>
            <RightFleshIcon style={styles.iconStyle1}></RightFleshIcon>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {event.map((event, index) => (
                <TouchableOpacity key={index} onPress={() => handleEventPress(event._id)} >
                    <EventCard event={event}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
        {/* <TouchableOpacity onPress={()=>router.push('../search')}>
                <Text style={styles.txtStyle2}>Search</Text>
        </TouchableOpacity> */}
    </View>
  )
}

export default UpComingEventsComp

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    },
    group3352Style : {
        flexDirection: 'row',
        marginLeft : (24 / 375) * width,
        marginBottom : 26,
    },
    txtStyle1 : {
        opacity: 0.84,
        color : '#120D26',
        fontFamily: 'Poppins-Medium',
        fontSize : 18,
        lineHeight : 34,
    }, 
    txtStyle2 : {
        marginLeft : (109 / 375) * width,
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