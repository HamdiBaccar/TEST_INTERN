import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat, withSequence } from 'react-native-reanimated';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BackButton from '../components/goBackButton';

const { height,width } = Dimensions.get('window');

export default function OBScreen() {
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

  // for image animation
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        }),
        withTiming(1, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        })
      ),
      -1,
      true
    );
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const GoToSignUpPress = () => {
    router.push('/sign-up2');
  };

  const GoToSignInPress = () => {
    router.push('/sign-in');
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  if (error) {
    console.error('Error loading fonts:', error);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ height: height }}>
        <BackButton></BackButton>
        <View>
          <Animated.Image
            style={[styles.image, animatedImageStyle]}
            source={require('../../assets/image3.png')}
            resizeMode='contain'
          />
          <View>
            <Text style={styles.header}>Follow your Passion</Text>
            <Text style={styles.secondHeader}>Connect with Enthusiasts, Share</Text>
            <Text style={styles.thirdHeader}>Your Journey</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Button mode="contained" style={styles.button} labelStyle={styles.buttonLabel} onPress={GoToSignUpPress}>
            Continue
          </Button>
        </View>
        <TouchableOpacity onPress={GoToSignInPress}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    width: wp('70%'),
    marginLeft: wp('15%'),
    marginTop: (105 / 812) * height,
  },
  header: {
    marginTop: hp('2%'),
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    marginBottom: 5,
    marginRight: 60,
    marginTop: 20,
    marginLeft : 41,
  },
  secondHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
    marginLeft : 41,
  },
  thirdHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#5A5A5A',
    marginLeft : 41,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#1C3F83',
    marginBottom: hp('5%'),
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop : 15,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signInText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: wp('18%'),
    fontFamily: 'Poppins-Medium',
  },
  signInLink: {
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
  },
  bottomContainer: {
    marginTop: (70 / 812) * height,
    alignItems: 'center',
    paddingBottom: hp('3%'),
  },
  signin: {
    alignItems: 'center',
    marginLeft: 20,
  },
});
