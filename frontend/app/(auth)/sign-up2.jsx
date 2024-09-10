import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, TextInput as PaperTextInput, Provider, DefaultTheme } from 'react-native-paper';
import { router,useRouter, useLocalSearchParams } from 'expo-router';
import BackButton from '../components/goBackButton';
import EmailAuthIcon from '../../assets/imgsJsx/emailAuth';
import LockIcon from '../../assets/imgsJsx/lock';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1C3F83',
  },
};

const SignUp2 = () => {

  const router = useRouter();
  const { parentName, address, phone } = useLocalSearchParams();


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

  const GoToSignInPress = () => {
    router.push('/sign-in');
  };

  const [parentEmail, setParentEmail] = useState("");
  const [parentPassword, setParentPassword] = useState("");
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 

  const validateInputs = () => {
    let valid = true;

    if (!parentEmail.includes('@')) {
      setEmailError("Please enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (parentPassword.length < 8) {
      setPasswordError("Password should be at least 8 characters long");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSignup = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const userData = {
        parentEmail: parentEmail,
        parentPassword: parentPassword,
      };
      router.push({
        pathname: '/sign-up3', // ou '/sign-up3' si vous allez directement à la page 3
        params: {
            parentName: parentName,
            address: address,
            phone: phone,
            parentEmail: parentEmail,
            parentPassword: parentPassword,
        },
    });

      const response = await fetch('http://192.168.1.243:3000/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await response.json();
      if (!response.ok) return Alert.alert(data.message);
      else{
        return Alert.alert('SignUp has been successfully completed!')
      }
      
    } catch (err) {
      console.log(err);
      Alert.alert('Something went wrong, try again later!');
    }
  };

  return (
    <Provider theme={customTheme}>
      <View style={styles.container}>
        <View style={{marginTop : 15}}>
          <BackButton></BackButton>
        </View>
        <View style={styles.content}>
          <Text style={styles.header}>Parent E-mail & Password</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Parent e-mail</Text>
            <View style={styles.iconInputContainer}>
              <EmailAuthIcon style={styles.icon}/>
              <PaperTextInput
                value={parentEmail}
                onChangeText={setParentEmail}
                style={styles.inputWithIcon}
                mode="outlined"
                theme={{ colors: { primary: '#1C3F83' } }} 
              />
            </View>
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Parent password</Text>
            <View style={styles.iconInputContainer}>
              <LockIcon style={styles.icon}/>
              <PaperTextInput
                value={parentPassword}
                onChangeText={setParentPassword}
                secureTextEntry={true}
                style={styles.inputWithIcon}
                mode="outlined"            
                theme={{ colors: { primary: '#1C3F83' } }} 
              />
            </View>
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </View>

          <Button mode="contained" onPress={handleSignup} labelStyle={styles.buttonLabel} style={styles.button}>
            Next
          </Button>

          <TouchableOpacity onPress={GoToSignInPress}>
            <Text style={styles.signInText}>
              Already have an account? 
              <Text style={styles.signInLink}> Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Provider>
  );
};

export default SignUp2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 30,
    flex: 1,
    padding: wp('7%'),
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 50,
    marginTop: -15,
  },
  inputContainer: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: 14,
    marginBottom: hp('1%'),
    fontWeight: '500',
    color: '#5A5A5A',
    fontFamily: 'Poppins-Medium',
  },
  iconInputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: hp('1.2%'),
    zIndex: 1,
  },
  inputWithIcon: {
    paddingLeft: wp('7%'),
    height: 40,
    backgroundColor: '#F2F2F2',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: hp('0.5%'),
  },
  button: {
    backgroundColor: '#1C3F83',
    marginTop: 205,
    height: hp('7%'),
    width: wp('85%'),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    position: 'relative',
    bottom: wp('-4%'),
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
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    position: 'relative',
    bottom: hp('-5%'),
    lineHeight: 21,
  },
  signInLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4E7AD0',
    fontFamily: 'Poppins-Medium',
  },
});
