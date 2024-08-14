import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkIcon = ({ color }) => (
    <Svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.75925 13.1267L3.13443 15.4934C2.76518 15.6727 2.31027 15.5458 2.1067 15.2067C2.0478 15.1017 2.01603 14.9853 2.01392 14.8667V4.38008C2.01392 2.38008 3.47701 1.58008 5.58244 1.58008H10.5284C12.5696 1.58008 14.097 2.32674 14.097 4.24674V14.8667C14.097 15.0559 14.0165 15.2374 13.8733 15.3711C13.7301 15.5049 13.5358 15.5801 13.3333 15.5801C13.2041 15.5782 13.0771 15.5485 12.9622 15.4934L8.3088 13.1267C8.13733 13.0402 7.93072 13.0402 7.75925 13.1267Z"
            fill={color}
            fillOpacity="0.5"
        />
    </Svg>
);

export default BookmarkIcon;
