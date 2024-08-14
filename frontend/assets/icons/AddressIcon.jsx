import React from 'react';
import Svg, { Path } from 'react-native-svg';

const AddressIcon = (props) => (
  <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M9.25 11.5H14.75" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round"/>
    <Path d="M3.62001 8.99C5.59001 0.330002 18.42 0.340003 20.38 9C21.53 14.08 18.37 18.38 15.6 21.04C13.59 22.98 10.41 22.98 8.39001 21.04C5.63001 18.38 2.47001 14.07 3.62001 8.99Z" stroke="#4D4D4D" strokeWidth="1.5"/>
  </Svg>
);

export default AddressIcon;
