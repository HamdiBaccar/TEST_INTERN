import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import InterestsHeader from '../../assets/SVGs/InterestsHeader';
import { router } from 'expo-router';
const interests = [
  { name: 'Sports', icon: '⚽', color: '#703C00' },
  { name: 'Music', icon: '🎵', color: '#FCCBD7' },
  { name: 'Food', icon: '🍴', color: '#B0F1FA' },
  { name: 'Gaming', icon: '🎮', color: '#ff7675' },
  { name: 'Movies', icon: '🎬', color: '#9C88FF' },
  { name: 'Art', icon: '🎨', color: '#FF6347' },
];

const InterestsSelectionScreen=() => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((item) => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  const GoToHomePress = () => {
    router.push('/home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerIcons}>
        <InterestsHeader />
      </View>
      <Text style={styles.description}>
        Personalize your experience by selecting your favorite interests. Your choices will help us tailor content and recommendations <Text style={styles.highlightedText}>just for you.</Text>
      </Text>
      <View style={styles.interestContainer}>
        {interests.map((interest) => (
          <TouchableOpacity
            key={interest.name}
            style={[
              styles.interestButton,
              selectedInterests.includes(interest.name) && { backgroundColor: interest.color },
            ]}
            onPress={() => toggleInterest(interest.name)}
          >
            <Text style={styles.interestIcon}>{interest.icon}</Text>
            <Text
              style={[
                styles.interestText,
                selectedInterests.includes(interest.name) && { color: '#fff' },
              ]}
            >
              {interest.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={GoToHomePress}>
        <Text style={styles.continueButtonText}>Continue</Text>
        
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default InterestsSelectionScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
  highlightedText: {
    color: '#1C3F83',
    fontFamily: 'Poppins-Bold',
  },
  interestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  interestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    padding: 10,
    margin: 5,
    width: 140,
  },
  interestIcon: {
    marginRight: 5,
  },
  interestText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  continueButton: {
    backgroundColor: '#1C3F83',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
});
