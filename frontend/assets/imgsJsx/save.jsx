import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SaveIcon = ({ width = 13, height = 14, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.79 10.978 1.742 13.05a.7.7 0 0 1-.9-.25.63.63 0 0 1-.08-.298V3.325c0-1.75 1.28-2.45 3.122-2.45h4.327c1.786 0 3.123.653 3.123 2.333v9.293c0 .165-.07.324-.196.441a.693.693 0 0 1-.472.183.78.78 0 0 1-.325-.076L6.27 10.98a.537.537 0 0 0-.48 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SaveIcon;
