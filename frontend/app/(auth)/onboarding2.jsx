import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import React from 'react';
import BackButton from '../components/goBackButton';

const { width, height } = Dimensions.get('window');

const Onboarding = () => {
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

  if (!fontsLoaded && !error) {
    return null;
  }

  if (error) {
    console.error('Error loading fonts:', error);
  }


  const handlePress = () => {
    router.push('/onboarding3'); 
  };
  const signIn = () => {
    router.push('/sign-in'); 
  };
  return (
    <SafeAreaView className="w-full h-full" style={styles.container}>
      <BackButton></BackButton>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Onboarding2.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text style={styles.txtStyle1}>Connect with Friends </Text>
        <Text style={styles.txtStyle2}>and Family</Text>
        <Text style={styles.txtStyle3}>Discover New Places and Cultures,</Text>
        <Text style={styles.txtStyle4}>Share Your Adventures</Text>
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
        <View style={styles.rectangle}></View>
      </View>
    </SafeAreaView>
  );
}

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  img: {
    height: (280 / 812) * height, // 215px -> percentage of height
    width: (360 / 375) * width, // 310px -> percentage of width
    marginTop: (105 / 812) * height, // 145px -> percentage of height
  },
  txtStyle1: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 60,
    marginTop: 20,
    marginLeft : 41,
  },
  txtStyle2: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 60,
    marginLeft : 41
  },
  txtStyle3: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginTop: (10 / 812) * height, // 10px -> percentage of height
    marginLeft: (41 / 375) * width, // 55px -> percentage of width
  },
  txtStyle4: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginLeft: (41 / 375) * width, // 55px -> percentage of width
    marginTop: (-2 / 812) * height, // -2px -> percentage of height
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
  btnStyle1: {
    backgroundColor: '#1C3F83',
    width: (321 / 375) * width, // 321px -> percentage of width
    height: (49 / 812) * height, // 49px -> percentage of height
    marginLeft: (27 / 375) * width, // 27px -> percentage of width
    borderRadius: 10,
    alignItems: 'center',
    marginTop: (45 / 812) * height, // 86px -> percentage of height
  },
  btnStyle2: {
    backgroundColor: 'white',
    width: (321 / 375) * width, // 321px -> percentage of width
    height: (49 / 812) * height, // 49px -> percentage of height
    marginLeft: (27 / 375) * width, // 27px -> percentage of width
    borderRadius: 10,
    alignItems: 'center',
    marginTop: (16 / 812) * height, // 16px -> percentage of height
    borderWidth: 1,
  },
  txtArea1: {
    marginTop: (30 / 812) * height, // 32px -> percentage of height
    marginLeft: (75 / 375) * width, // 90px -> percentage of width
    flexDirection: 'row',
  },
  imgStyle1 : {
    height : (18 / 812) * height,
    width : (10 / 375) * width,
    marginLeft : (27 / 375) * width,
    marginTop : (30 / 812) * height,
  },
  rectangle: {
    backgroundColor: 'black',
    height: (4 / 812) * height, // 4px -> percentage of height
    width: (165 / 375) * width, // 165px -> percentage of width
    marginLeft: (105 / 375) * width, // 105px -> percentage of width
    marginTop: (45 / 812) * height, // 45px -> percentage of height
    borderRadius: 10,
  },
});
