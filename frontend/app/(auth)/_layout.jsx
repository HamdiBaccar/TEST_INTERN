import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Easing } from 'react-native-reanimated';
import OnboardingScreen1 from './onboarding1';
import OnboardingScreen2 from './onboarding2';
import OnboardingScreen3 from './onboarding3';
import PersonalInfo from './sign-up1';
import SignUp2 from './sign-up2';
import Payment from './sign-up3';
import SignIn from './sign-in';

// Configuration for sign-up screens
const signUpConfig = {
  animation: 'timing',
  config: {
    duration: 700,
    easing: Easing.out(Easing.cubic),
  },
};

// Configuration for onboarding screens
const onboardingConfig = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.inOut(Easing.ease),
  },
};



const forSlideAndFade = ({ current, layouts }) => ({
  cardStyle: {
    transform: [
      {
        translateX: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [layouts.screen.width, 0],
        }),
      },
      {
        scale: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.95, 1],
        }),
      },
    ],
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  },
});

const forScaleAndFade = ({ current }) => ({
  cardStyle: {
    transform: [
      {
        scale: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.85, 1],
        }),
      },
    ],
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  },
});

const Stack = createStackNavigator();

const AuthLayout = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      {/* Apply custom transitions only to onboarding screens */}
      <Stack.Screen
        name="onboarding1"
        component={OnboardingScreen1}
        options={{
          transitionSpec: {
            open: onboardingConfig,
            close: onboardingConfig,
          },
          cardStyleInterpolator: forScaleAndFade,
        }}
      />
      <Stack.Screen
        name="onboarding2"
        component={OnboardingScreen2}
        options={{
          transitionSpec: {
            open: onboardingConfig,
            close: onboardingConfig,
          },
          cardStyleInterpolator: forScaleAndFade,
        }}
      />
      <Stack.Screen
        name="onboarding3"
        component={OnboardingScreen3}
        options={{
          transitionSpec: {
            open: onboardingConfig,
            close: onboardingConfig,
          },
          cardStyleInterpolator: forScaleAndFade,
        }}
      />

      {/* Apply custom transitions only to sign-up screens */}
      <Stack.Screen
        name="sign-up1"
        component={PersonalInfo}
        options={{
          transitionSpec: {
            open: signUpConfig,
            close: signUpConfig,
          },
          cardStyleInterpolator: forSlideAndFade,
        }}
      />
      <Stack.Screen
        name="sign-up2"
        component={SignUp2}
        options={{
          transitionSpec: {
            open: signUpConfig,
            close: signUpConfig,
          },
          cardStyleInterpolator: forSlideAndFade,
        }}
      />
      <Stack.Screen
        name="sign-up3"
        component={Payment}
        options={{
          transitionSpec: {
            open: signUpConfig,
            close: signUpConfig,
          },
          cardStyleInterpolator: forSlideAndFade,
        }}
      />
      
      <Stack.Screen 
      name="sign-in" 
      component={SignIn}
      options={{
        transitionSpec: {
          open: signUpConfig,
          close: signUpConfig,
        },
        cardStyleInterpolator: forSlideAndFade,
      }}
      
      
      />
    </Stack.Navigator>
  );
};

export default AuthLayout;
