import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import axios from 'axios';
import UserIcon from '../../assets/icons/UserIcon';
import AddressIcon from '../../assets/icons/AddressIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import BackButton from '../components/goBackButton';

const PersonalInfo = () => {
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

    const navigation = useNavigation();
    const [parentName, setParentName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({ parentName: '', address: '', phone: '' });

    const validateFields = () => {
        let valid = true;
        let errors = { parentName: '', address: '', phone: '' };

        if (parentName.trim() === '') {
            errors.parentName = 'Parent name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(parentName.trim())) {
            errors.parentName = 'Parent name should only contain letters and spaces';
            valid = false;
        }

        if (address.trim() === '') {
            errors.address = 'Address is required';
            valid = false;
        }

        if (phone.trim() === '') {
            errors.phone = 'Phone number is required';
            valid = false;
        } else if (!/^\d+$/.test(phone.trim())) {
            errors.phone = 'Phone number should only contain digits';
            valid = false;
        } else if (phone.trim().length < 8 || phone.trim().length > 15) {
            errors.phone = 'Phone number should be between 8 and 15 digits';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleNext = async () => {
        if (validateFields()) {
            navigation.navigate('forgotPwd');
            // try {
            //     const response = await axios.post('http://192.168.1.13:3000/api/create-group', {
            //         GroupName: parentName,
            //         GroupTopic: address,
            //         GroupDescription: phone
            //     });

            //     if (response.data.success) {
            //         navigation.navigate('onboardingScreen1');
            //     } else {
            //         alert('Error: ' + response.data.msg);
            //     }
            // } catch (error) {
            //     console.error(error);
            //     alert('Error: ' + error.message);
            // }
        }
    };

    const handleParentNameChange = (text) => {
        setParentName(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, parentName: 'Parent name is required' }));
        } else if (!/^[A-Za-z\s]+$/.test(text.trim())) {
            setErrors(prev => ({ ...prev, parentName: 'Parent name should only contain letters and spaces' }));
        } else {
            setErrors(prev => ({ ...prev, parentName: '' }));
        }
    };

    const handleAddressChange = (text) => {
        setAddress(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, address: 'Address is required' }));
        } else {
            setErrors(prev => ({ ...prev, address: '' }));
        }
    };

    const handlePhoneChange = (text) => {
        setPhone(text);
        if (text.trim() === '') {
            setErrors(prev => ({ ...prev, phone: 'Phone number is required' }));
        } else if (!/^\d+$/.test(text.trim())) {
            setErrors(prev => ({ ...prev, phone: 'Phone number should only contain digits' }));
        } else if (text.trim().length < 8 || text.trim().length > 15) {
            setErrors(prev => ({ ...prev, phone: 'Phone number should be between 8 and 15 digits' }));
        } else {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    return (
            <View style={styles.container}>
                <BackButton></BackButton>
                <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
                    <View style={styles.content}>
                        <Text style={styles.title}>Personal Informations</Text>
                        <Text style={styles.subtitle}>Please fill the following</Text>
                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Parent Name</Text>
                            <View style={styles.inputContainer}>
                                <UserIcon style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    value={parentName}
                                    onChangeText={handleParentNameChange}
                                />
                            </View>
                            {errors.parentName ? <Text style={styles.errorText}>{errors.parentName}</Text> : null}
                        </View>

                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Address</Text>
                            <View style={styles.inputContainer}>
                                <AddressIcon style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    value={address}
                                    onChangeText={handleAddressChange}
                                />
                            </View>
                            {errors.address ? <Text style={styles.errorText}>{errors.address}</Text> : null}
                        </View>

                        <View style={styles.inputBox}>
                            <Text style={styles.inputLabel}>Phone Number</Text>
                            <View style={styles.inputContainer}>
                                <PhoneIcon style={styles.icon} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    value={phone}
                                    onChangeText={handlePhoneChange}
                                />
                            </View>
                            {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
                        </View>
                        <TouchableOpacity style={styles.NextButton} onPress={handleNext}>
                            <Text style={styles.NextButtonText}>Next</Text>
                        </TouchableOpacity>
                        <Text style={styles.minitext}>Already have an account? <Text style={styles.signInText}>Sign In</Text></Text>
                    </View>
                </ScrollView>
            </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingTop: 15,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        marginBottom: 5,
        alignSelf: 'flex-start',
        paddingHorizontal: 45,
        right:20,
        marginTop : 50
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        textAlign: 'left',
        marginBottom: 21,
        alignSelf: 'flex-start',
        paddingHorizontal: 45,
        right:20,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 50,
    },
    inputBox: {
        marginBottom: 12,
    },
    inputLabel: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginBottom: 6,
        textAlign: 'left',
    },
    NextButton: {
        width: 321,
        height: 49,
        backgroundColor: "#1C3F83",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 37,
        top:88,
    },
    NextButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
    },
    minitext: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginBottom: 50,
        top:85,
    },
    signInText: {
        color: '#1C3F83',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    inputContainer: {
        width: 321,
        height: 49,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 10,
        width: 24,
        height: 24,
        color: "#000",
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 40,
        zIndex: 1,
    },
    input: {
        flex: 1,
        height: 40,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
});

export default PersonalInfo;
