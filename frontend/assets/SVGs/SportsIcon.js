import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SportsIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <G fill="#FFA800" clipPath="url(#a)">
      <Path d="M8.805 2.614A8.768 8.768 0 0 0 8.114.327 8.833 8.833 0 0 0 3.468 2.48l4.4 4.4c.86-1.094 1.192-2.587.937-4.266ZM7.872 8.352c-1.05.868-2.402 1.321-3.92 1.321-.403 0-.817-.032-1.24-.096a9.67 9.67 0 0 1-2.217-.624l-.002.152c0 2.261.847 4.325 2.24 5.891l5.892-5.891-.753-.753Z" />
      <Path d="m7.133 7.613-4.4-4.4A8.832 8.832 0 0 0 .582 7.86c.753.34 1.525.575 2.287.69 1.68.256 3.172-.077 4.265-.936ZM15.852 9.66c-1.68-.255-3.173.078-4.266.937l4.4 4.4a8.833 8.833 0 0 0 2.153-4.646 8.77 8.77 0 0 0-2.287-.69ZM10.112 10.593l-.752-.752-5.892 5.89a8.833 8.833 0 0 0 5.892 2.242l.151-.002a9.67 9.67 0 0 1-.624-2.217c-.306-2.02.128-3.832 1.225-5.16ZM8.607 7.618l.753.753 5.89-5.892A8.833 8.833 0 0 0 9.36.24L9.208.24c.3.732.512 1.477.624 2.217.307 2.021-.127 3.832-1.225 5.161Z" />
      <Path d="M9.915 15.598c.115.761.35 1.533.69 2.286a8.832 8.832 0 0 0 4.646-2.153l-4.4-4.4c-.86 1.094-1.192 2.587-.936 4.267ZM10.847 9.857c1.33-1.098 3.14-1.532 5.161-1.225a9.67 9.67 0 0 1 2.217.624l.002-.152a8.833 8.833 0 0 0-2.241-5.89l-5.891 5.89.752.753Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.493.24h17.733v17.733H.493z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SportsIcon
