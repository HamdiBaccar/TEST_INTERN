import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const DistanceSlider = () => {
  const [distanceRange, setDistanceRange] = useState([10, 100]);

  const handleValuesChange = (values) => {
    setDistanceRange(values);
  };

  return (
    <View style={styles.container}>
        <View style={styles.distanceRangeStyle}>
            <Text style={styles.label}>Select distance range</Text>
            <Text style={styles.rangeText}>
                {distanceRange[0]}km - {distanceRange[1]}km
            </Text>
        </View>
      <MultiSlider
        values={distanceRange}
        sliderLength={280}
        onValuesChange={handleValuesChange}
        min={0}
        max={150}
        step={1}
        selectedStyle={{
          backgroundColor: 'rgba(86, 167, 255, 1)', // Couleur de la plage sélectionnée
        }}
        unselectedStyle={{
          backgroundColor: 'rgba(86, 167, 255, 1)', // Couleur de la plage non sélectionnée
          opacity : '20%'
        }}
        trackStyle={{
          height: 3,
        }}
        markerStyle={{
          height: 32,
          width: 35,
          borderRadius: 9,
          backgroundColor: '#FFFFFF',
          borderColor: 'rgba(86, 167, 255, 1)',
          borderWidth: 1,
          shadowOffset: { width: 0, height: 0 },
        }}
        containerStyle={{
        }}
      ></MultiSlider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontFamily : 'Poppins-Medium',
    marginBottom: 20,
    marginLeft : -20
  },
  rangeText: {
    fontSize: 16,
    color: 'rgba(78, 122, 208, 1)', 
    fontFamily : 'Poppins-Bold',
    marginLeft : 30,
  },
  distanceRangeStyle : {
    flexDirection : 'row'
  },
});

export default DistanceSlider;
