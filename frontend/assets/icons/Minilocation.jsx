import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const Minilocation = (props) => (
    <Svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Defs>
            <ClipPath id="clip0_450_720">
                <Rect width="16" height="16" fill="white" transform="translate(0 0.419922)" />
            </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_450_720)">
            <Path
                d="M14 7.08655C14 11.7532 8 15.7532 8 15.7532C8 15.7532 2 11.7532 2 7.08655C2 5.49525 2.63214 3.96913 3.75736 2.84391C4.88258 1.71869 6.4087 1.08655 8 1.08655C9.5913 1.08655 11.1174 1.71869 12.2426 2.84391C13.3679 3.96913 14 5.49525 14 7.08655Z"
                fill="#747688"
                stroke="#747688"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8 9.08655C9.10457 9.08655 10 8.19112 10 7.08655C10 5.98198 9.10457 5.08655 8 5.08655C6.89543 5.08655 6 5.98198 6 7.08655C6 8.19112 6.89543 9.08655 8 9.08655Z"
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
    </Svg>
);

export default Minilocation;
