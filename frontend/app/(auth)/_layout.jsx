import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen name="onboarding1" options={{headerShown : false}} />
            <Stack.Screen name="onboarding2" options={{headerShown : false}} />
            <Stack.Screen name="onboarding3" options={{headerShown : false}} />
            <Stack.Screen name="sign-up1" options={{headerShown : false}} />
            <Stack.Screen name="sign-up2" options={{headerShown : false}} />
            <Stack.Screen name="sign-up3" options={{headerShown : false}} />
            <Stack.Screen name="sign-in" options={{headerShown : false}} />
        </Stack>
    </>
  )
}

export default AuthLayout