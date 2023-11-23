const SvgComponent = (props) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={15}
  height={15}
  fill="#fff"
  viewBox="0 0 16 16"
  {...props}
>
  <path
    fillRule="evenodd"
    d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
  />
</svg>
)
export default SvgComponent