import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import HomeIcon from '../../assets/imgsJsx/home';
import CalenderIcon from '../../assets/imgsJsx/calender';
import ProfileIcon from '../../assets/imgsJsx/profile';
import ChatIcon from '../../assets/imgsJsx/chat';
import AddEventIcon from '../../assets/imgsJsx/addEventIcon';


const TabLayout = () => {
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
        <>
            <Tabs
                screenOptions={({ route }) => ({
                    tabBarShowLabel: true,
                    tabBarStyle: styles.tabBar,
                    tabBarButton: (props) => {
                        if (route.name === 'addEvent') {
                            return (
                                <TouchableOpacity
                                    {...props}
                                    style={styles.addButton}
                                >
                                    <View style={styles.addIconContainer}>
                                        <AddEventIcon fill="#fff" />
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                        return <TouchableOpacity {...props} />;
                    },
                })}
            >
                <Tabs.Screen name="home" options={{ 
                        headerShown: false,
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Black', color: focused ? '#56A7FF' : '#CED0D5' }}>
                                Explore
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <HomeIcon fill={focused ? '#56A7FF' : '#CED0D5'} />
                        ),
                    }}
                />
                <Tabs.Screen name="events" options={{ 
                        headerShown: false,
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Black', color: focused ? '#56A7FF' : '#CED0D5' }}>
                                Events
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <CalenderIcon fill={focused ? '#56A7FF' : '#CED0D5'} />
                        ),
                    }}
                />
                <Tabs.Screen name="addEvent" options={{ 
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <AddEventIcon/>
                        ),
                    }}
                />
                <Tabs.Screen name="friends" options={{ 
                        headerShown: false,
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Black', color: focused ? '#56A7FF' : '#CED0D5' }}>
                                Friends
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <ProfileIcon fill={focused ? '#56A7FF' : '#CED0D5'} />
                        ),
                    }}
                />
                <Tabs.Screen name="chat" options={{ 
                        headerShown: false,
                        tabBarLabel: ({ focused }) => (
                            <Text style={{ fontSize: 12, fontFamily: 'Poppins-Black', color: focused ? '#56A7FF' : '#CED0D5' }}>
                                Chat
                            </Text>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <ChatIcon fill={focused ? '#56A7FF' : '#CED0D5'} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderTopColor: '#ffffff',
        height: 60,
    },
    addButton: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIconContainer: {
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#56A7FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#4A43EC',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 5,
    },
});

export default TabLayout;
