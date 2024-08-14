import * as React from "react"
const LocationIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <g
      stroke="#56A7FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.698}
      clipPath="url(#a)"
    >
      <path d="M13.125 5.935c0 4.068-5.625 7.555-5.625 7.555s-5.625-3.487-5.625-7.555c0-1.387.593-2.718 1.648-3.698C4.577 1.256 6.008.704 7.5.704s2.923.55 3.977 1.531c1.055.981 1.648 2.312 1.648 3.699Z" />
      <path d="M7.5 7.678c1.035 0 1.875-.78 1.875-1.744 0-.963-.84-1.743-1.875-1.743-1.036 0-1.875.78-1.875 1.743 0 .963.84 1.744 1.875 1.744Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="rgba(178, 178, 178, 0.5)" d="M0 .123h15V14.07H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default LocationIcon
