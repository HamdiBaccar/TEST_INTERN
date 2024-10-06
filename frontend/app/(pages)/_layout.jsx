import React from 'react'
import { Stack } from 'expo-router'



const PagesLayout = () => {
  return (
    <>
        <Stack>
            <Stack.Screen name="search" options={{headerShown : false}} />
            <Stack.Screen name="eventDetails" options={{headerShown : false}} />
            <Stack.Screen name="Profile" options={{headerShown : false}} />
        </Stack>
    </>
  )
}

export default PagesLayout