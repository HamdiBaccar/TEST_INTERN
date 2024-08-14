import * as React from "react"
const MusicIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={29}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M10.247 5.715v13.709a5.487 5.487 0 0 0-3.551-1.279c-2.913 0-5.282 2.203-5.282 4.911 0 2.708 2.37 4.912 5.282 4.912 2.909 0 5.275-2.198 5.281-4.901V13.27l15.169-4.238v7.087a5.489 5.489 0 0 0-3.55-1.279c-2.913 0-5.283 2.203-5.283 4.911 0 2.708 2.37 4.912 5.282 4.912 2.903 0 5.265-2.189 5.282-4.884V.51l-18.63 5.205Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.376.564h29.53v27.458H.376z" />
      </clipPath>
    </defs>
  </svg>
)
export default MusicIcon
