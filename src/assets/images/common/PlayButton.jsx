import React from 'react'

const PlayButton = ({ color, ...otherProps }) => (
  <svg
    width={20}
    height={20}
    x={0}
    y={0}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 600 800'
    {...otherProps}
  >
    <path fill='none' d='M0-1.79v800L600,395L0-1.79z'></path>
  </svg>
)

export default PlayButton
