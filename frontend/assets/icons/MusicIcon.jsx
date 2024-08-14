import React from 'react';
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg';

const MusicIcon = (props) => (
    <Svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0)">
            <Path
                d="M6.47517 3.32777V12.1813C5.91153 11.6684 5.16294 11.3554 4.34277 11.3554C2.5938 11.3554 1.1709 12.7783 1.1709 14.5273C1.1709 16.2763 2.5938 17.6992 4.34277 17.6992C6.08958 17.6992 7.51086 16.2798 7.51451 14.5339H7.51465V8.20748L16.6236 5.47018V10.0474C16.0599 9.5346 15.3113 9.22153 14.4912 9.22153C12.7422 9.22153 11.3193 10.6444 11.3193 12.3934C11.3193 14.1424 12.7422 15.5653 14.4912 15.5653C16.2342 15.5653 17.6532 14.152 17.6628 12.4111H17.6631V-0.0343323L6.47517 3.32777Z"
                fill="white"
            />
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Rect
                    width="17.7335"
                    height="17.7335"
                    fill="white"
                    transform="translate(0.547363 -3.8147e-05)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export default MusicIcon;
