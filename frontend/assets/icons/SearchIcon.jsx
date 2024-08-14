import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props) => (
  <Svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M10.8431 15.8333C14.9976 15.8333 18.3655 12.8486 18.3655 9.16667C18.3655 5.48477 14.9976 2.5 10.8431 2.5C6.68866 2.5 3.3208 5.48477 3.3208 9.16667C3.3208 12.8486 6.68866 15.8333 10.8431 15.8333Z"
      stroke="#B9B9B9"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity="0.4"
      d="M20.246 17.5L16.1558 13.875"
      stroke="#B9B9B9"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SearchIcon;
