import { StyleSheet, Text, View ,TouchableOpacity, Image,Dimensions} from 'react-native'
import React, { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MapIcon from '../../assets/imgsJsx/map'
import SaveIcon from '../../assets/imgsJsx/save'
import { format } from 'date-fns'; // Import de date-fns
import { enUS } from 'date-fns/locale';

SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "do MMMM - hh:mm a", { locale: enUS }); // Formatage de la date
  };


const ActivityCardComp = ({activity}) => {

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
    <View>
        <View style={styles.activityCard}>
             <Image 
                source={{uri : activity.GroupImage}}
                style={styles.image}
            />
            <View style={styles.activityDataStyle}>
                <Text style={styles.date}>{formatDate(activity.GroupCreationDate)}</Text>
                <Text style={styles.activityTitle}>{activity.GroupName}</Text>
                <View style={styles.locationContainer}>
                    <MapIcon fill={'rgba(116, 118, 136, 1)'}></MapIcon>
                    <Text style={styles.location}>{activity.GroupLocation}</Text>
                </View>
            </View>
            <SaveIcon  fill="rgba(235, 87, 87, 1)" style={styles.saveIconStyle}></SaveIcon>
        </View>
    </View>
  )
}

export default ActivityCardComp

const styles = StyleSheet.create({
    activityCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        padding: 10,
        //shadow style
        shadowColor: '#505588',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.06,
        shadowRadius: 30,
        elevation: 8,

        marginLeft : (24 / 375) * width,
        width : (327 / 375) * width,
        height : 112,
        marginBottom : 8
    },
    image: {
        width: 79,
        height: 92,
        borderRadius: 4,
        marginRight: 10,
    },
    activityDataStyle : {
        height : 67,
        width : 191,
        marginLeft : 18,
    },
    date: {
        color: 'rgba(78, 122, 208, 1)',
        fontSize: 12,
        fontFamily : 'Poppins-Medium'
    },
    activityTitle: {
        fontSize: 15,
        lineHeight : 22.5,
        fontFamily : 'Poppins-Medium',
        marginTop : 3
    },
    location: {
        marginLeft: 5,
        fontSize : 13,
        lineHeight : 19.5,
        fontFamily : 'Poppins-ExtraBold',
        color : 'rgba(116, 118, 136, 1)',
    },
    saveIconStyle : {
        width : 16.11,
        height : 16,
        marginTop : -50
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
})