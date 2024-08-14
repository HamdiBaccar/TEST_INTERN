import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const FavIcon = ({ color }) => (
  <Svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect
      x="0"
      y="0"
      width="36"
      height="36"
      rx="10"
      fill="white"
      opacity="0.3"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.7759 22.2328L13.47 24.4362C13.1262 24.6031 12.7027 24.485 12.5131 24.1693C12.4583 24.0715 12.4287 23.9631 12.4268 23.8528V14.0893C12.4268 12.2272 13.789 11.4824 15.7492 11.4824H20.3541C22.2545 11.4824 23.6765 12.1776 23.6765 13.9652V23.8528C23.6765 24.0289 23.6016 24.1978 23.4682 24.3224C23.3349 24.4469 23.1541 24.5169 22.9655 24.5169C22.8452 24.5151 22.727 24.4875 22.62 24.4362L18.2875 22.2328C18.1279 22.1522 17.9355 22.1522 17.7759 22.2328Z"
      fill={color}
      stroke={color}
      strokeWidth="1.03448"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FavIcon;
