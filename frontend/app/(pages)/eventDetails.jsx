import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FavIcon from '../../assets/icons/FavIcon';
import DateIcon from '../../assets/icons/DateIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import NextIcon from '../../assets//icons/NextIcon';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg';


const EventDetails = () => {

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
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavIconPress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/images/eventDetails.png")}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-back" size={22} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Event Details</Text>
            <TouchableOpacity onPress={handleFavIconPress}>
              <FavIcon color={isFavorite ? '#56A7FF' : 'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.attendanceContainer}>
            <View style={styles.circleGroup}>
              <Image source={require('../../assets/images/profile1.jpg')} style={styles.circleImage} />
              <Image source={require('../../assets/images/profile2.jpg')} style={styles.circleImage} />
              <Image source={require('../../assets/images/profile3.jpg')} style={styles.circleImage} />
            </View>
            <Text style={styles.goingText}>+100 Going</Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>International Band Music Concert 🎶 <Text style={styles.freeText}>(Free)</Text></Text>
          <View style={styles.organizerContainer}>
            <View style={styles.organizer}>
              <Image source={require('../../assets/images/organizer.jpg')} style={styles.organizerImage} />
              <View style={styles.nameJobContainer}>
                <Text style={styles.organizerName}>Lorem</Text>
                <Text style={styles.organizerJob}>Organizer</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followButtonText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <DateIcon />
            <View style={styles.dateTimeContainer}>
              <Text style={styles.detailsText}>30 Mars 2025</Text>
              <Text style={styles.time}>9:00PM - 12:00PM</Text>
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <LocationIcon />
            <View style={styles.localContainer}>
              <Text style={styles.detailsText}>Carthage, Tunis</Text>
              <Text style={styles.location}>Hannibal Street, Carthage, Tunisia</Text>
            </View>
          </View>
          <Text style={styles.aboutTitle}>About Event</Text>
          <View style={styles.aboutContainer}>
            <Text style={styles.description}>Get ready for an unforgettable night of music, excitement, and exclusive surprises at our brand concert! 🌟 Feel the energy as [Popular Artist/Band] takes the stage to deliver an electrifying performance that you won't want to miss.</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <View style={styles.part7}></View>
        <View style={styles.part1}></View>
        <View style={styles.part3}></View>
        <View style={styles.part4}></View>
        <View style={styles.part5}></View>
        <View style={styles.part6}></View>
        <View style={styles.part2}></View>
          <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate("myTickets")}>
            <View style={styles.buttonContent}>
              <Text style={styles.buyButtonText}>BUY TICKET NOW !</Text>
              <NextIcon style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 244,
  },
  headerOverlay: {
    position: 'absolute',
    top: 15,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  backButton: {
    padding: 10,
    left: 5,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    marginLeft: -125,
  },
  imageContainer: {
    position: 'relative',
    marginTop: -5,
    marginLeft: 50,
    marginBottom: 20,
  },
  attendanceContainer: {
    position: 'absolute',
    top: -25,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 30,
    shadowColor: '#000', // Couleur de l'ombre
    shadowOffset: { width: 0, height: 20 }, // Décalage horizontal et vertical
    shadowOpacity: 0.1, // Opacité de l'ombre
    shadowRadius: 20, // Rayon de flou de l'ombre
    elevation: 5, // Pour les ombres sur Android
  },
  circleGroup: {
    flexDirection: 'row',
  },
  circleImage: {
    width: 34,
    height: 34,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginRight: -10,
    borderWidth: 2,
    borderColor: '#808080',
  },
  goingText: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 10,
    color: "#1C3F83",
    fontFamily: 'Poppins-Medium',
  },
  inviteButton: {
    backgroundColor: '#56A7FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginLeft: 10,
  },
  inviteButtonText: {
    color: '#ffff',
    fontFamily: 'Poppins-Black',
  },
  content: {
    marginTop : 30,
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    color: "#1C3F83",
    fontFamily: 'Poppins-Medium',
  },
  freeText: {
    color: '#56A7FF',
  },
  organizerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  organizer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  organizerImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  nameJobContainer: {
    flexDirection: 'column',
  },
  organizerName: {
    fontSize: 15,
    color: "rgba(13, 12, 38, 1)",
    fontFamily: 'Poppins-Medium',
    lineHeight : 25,
    fontWeight : 600,
  },
  organizerJob: {
    fontSize: 12,
    color: 'rgba(112, 110, 143, 1)',
    fontFamily: 'Poppins-Regular',
  },
  followButton: {
    backgroundColor: '#EAEDFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  followButtonText: {
    color: 'rgba(86, 167, 255, 1)',
    fontFamily: 'Poppins-Bold',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateTimeContainer: {
    marginLeft: 20,
  },
  localContainer: {
    marginLeft: 20,
  },
  detailsText: {
    fontSize: 16,
    color: "rgba(18, 13, 38, 1)",
    fontFamily: 'Poppins-Regular',
    fontWeight : 500,
    lineHeight : 34,
  },
  time: {
    fontSize: 12,
    color: 'rgba(116, 118, 136, 1)',
    fontFamily: 'Poppins-Bold',
    fontWeight: 900,
  },
  location: {
    fontSize: 12,
    color: 'rgba(116, 118, 136, 1)',
    fontFamily: 'Poppins-Bold',
    fontWeight: 900,
  },
  aboutTitle: {
    fontSize: 20,
    color: "#1C3F83",
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  aboutContainer: {
    marginBottom: 120,
  },
  aboutText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins-Light',
  },
  part7 : {
    backgroundColor:'rgba(255, 255, 255, 0.4)',
    width:1000,
    height:10,
  },
  part1 : {
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    width:1000,
    height:10,
  },
  part3 : {
    backgroundColor:'rgba(255, 255, 255, 0.6)',
    width:1000,
    height:10,
  },
  part4 : {
    backgroundColor:'rgba(255, 255, 255, 0.7)',
    width:1000,
    height:10,
  },
  part5 : {
    backgroundColor:'rgba(255, 255, 255, 0.8)',
    width:1000,
    height:10,
  },
  part6 : {
    backgroundColor:'rgba(255, 255, 255, 0.9)',
    width:1000,
    height:10,
  },
  part2 : {
    backgroundColor:'white',
    width:1000,
    height:80,
    marginBottom:-80
  },
  buttonContainer: {
    position: 'absolute',
    alignItems : 'center',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, 
  },
  buyButton: {
    height : 58,
    width:271,
    backgroundColor: '#1C3F83',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor :'rgba(86, 167, 255, 1)',
  },
  buttonContent: {
    backgroundColor :'rgba(86, 167, 255, 1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    marginRight: 10,
    letterSpacing : 1,
    marginLeft : 15,
  },
  nextIcon: {
    marginLeft: 5,
    marginRight : -20
  },
  description : {
    fontSize : 16,
    fontFamily : 'Poppins-Regular',
    fontWeight : 400
  }
});

export default EventDetails;
