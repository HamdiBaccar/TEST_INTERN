import React from 'react';
import Svg, { Path } from 'react-native-svg';

const MapIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      d="M14 6.667c0 3.415-3.213 6.473-4.937 7.867a1.675 1.675 0 0 1-2.126 0C5.213 13.14 2 10.082 2 6.667a6 6 0 1 1 12 0Z"
    />
    <Path fill="#fff" d="M8 8.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
);

export default MapIcon;
