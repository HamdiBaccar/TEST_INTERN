import React, { useEffect, useRef } from 'react';
import { View, Animated, Text, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import AppIcon from '../assets/SVGs/AppIcon';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  // Animated values for opacity
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const translateXAnim = useRef(new Animated.Value(0)).current; // Horizontal position animation

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
      Animated.parallel([
        // Fade out animation for opacity
        Animated.timing(opacityAnim, {
          toValue: 0, // Fade out both icon and text
          duration: 3000,
          useNativeDriver: true,
        }),
        // Slide out to the left animation
        Animated.timing(translateXAnim, {
          toValue: -300, // Slide the content out to the left
          duration: 5000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Navigate to (auth)/onboarding1 after the animation finishes
        router.push('(auth)/onboarding1');  // Navigate to onboarding screen
      });

      // Set a timeout for loading time if necessary (optional)
     
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(28, 63, 131, 1)', alignItems: 'center', justifyContent: 'center' }}>
      {/* Icon and Loading Indicator with synchronized fade out */}
      <Animated.View
        style={{
          opacity: opacityAnim, // Fade out
          transform: [{ translateX: translateXAnim }], // Slide out
          alignItems: 'center',
        }}
      >
        {/* Icon Animation */}
        <AppIcon width={150} height={150} />
        
        {/* Loading Indicator and Message */}
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: 20 }} />
        <Text style={{ color: '#fff', fontFamily: 'Poppins-Bold', fontSize: 18, marginTop: 10 }}>
          Please wait...
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
}
