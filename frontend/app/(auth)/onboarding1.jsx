import React, { useCallback, useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity,Dimensions } from 'react-native';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import BackButton from "../components/goBackButton";

const { width, height } = Dimensions.get('window');

const OnboardingScreen1 = () => {

    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded] = useFonts({
        'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Black': require('../../assets/fonts/Poppins-Black.ttf'),
        'Poppins-Thin': require('../../assets/fonts/Poppins-Thin.ttf'),
        'Poppins-Light': require('../../assets/fonts/Poppins-Light.ttf'),
        'Poppins-ExtraBold': require('../../assets/fonts/Poppins-ExtraBold.ttf'),
        
      });

      useEffect(() => {
        async function prepare() {
          await SplashScreen.preventAutoHideAsync();
        }
        prepare();
      }, []);
    
      if (!fontsLoaded) {
        return null;
      }


      const handlePress = () => {
        router.push('/onboarding2'); 
      };
      const signIn = () => {
        router.push('/sign-in'); 
      };

    return (
        <View>
            <BackButton></BackButton>
            <View style={styles.container}>
                <Image source={require("../../assets/images/OnBoard1.png")} style={styles.onboardingimage1}></Image>
                <Text style={styles.title}>Explore the World</Text>
                <Text style={styles.subtitle}>Discover New Places and Cultures, {'\n'}Share Your Adventures</Text>
                <TouchableOpacity style={styles.btnStyle1} onPress={handlePress}>
                    <Text style={styles.txtStyle5}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyle2}>
                    <Text style={styles.txtStyle6}>Skip</Text>
                </TouchableOpacity>
                <View style={styles.txtArea1}>
                    <Text style={styles.txtStyle7}>Already have an account? </Text>
                    <Text style={styles.txtStyle8} onPress={signIn}>Sign In</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        
    },
    onboardingimage1:{
        height: 241,
        width: 300,
        marginVertical: 100,
        marginHorizontal: 56,
        alignItems: "center",
        marginBottom:24,
        marginTop:80,
    },
    title:{
        fontSize:20,
        marginBottom:8,
        alignSelf: 'flex-start',
        fontFamily:'Poppins-SemiBold',
        paddingHorizontal: 55,
    },
    subtitle:{
        fontSize:16,
        fontFamily:'Poppins-Medium',
        marginBottom:66,
        alignSelf: 'flex-start',
        paddingHorizontal: 55,
    },
    btnStyle1: {
        backgroundColor: '#1C3F83',
        width: (321 / 375) * width, // 321px -> percentage of width
        height: (49 / 812) * height, // 49px -> percentage of height
        borderRadius: 10,
        alignItems: 'center',
        marginTop: (10 / 812) * height, // 86px -> percentage of height
    },
    btnStyle2: {
        backgroundColor: 'white',
        width: (321 / 375) * width, // 321px -> percentage of width
        height: (49 / 812) * height, // 49px -> percentage of height
        borderRadius: 10,
        alignItems: 'center',
        marginTop: (16 / 812) * height, // 16px -> percentage of height
        borderWidth: 1,
    },
    txtStyle5: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        marginTop: (9 / 812) * height, // 9px -> percentage of height
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtStyle6: {
        color: 'black',
        fontFamily: 'Poppins-Medium',
        marginTop: (9 / 812) * height, // 9px -> percentage of height
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtArea1: {
        marginTop: (22 / 812) * height, // 32px -> percentage of height
        flexDirection: 'row',
    },
    txtStyle7: {
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins-Medium',
    },
      txtStyle8: {
        fontSize: 14,
        lineHeight: 21,
        color: '#1C3F83',
        fontFamily: 'Poppins-Medium',
    },
})

export default OnboardingScreen1;
