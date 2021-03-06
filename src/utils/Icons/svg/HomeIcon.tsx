import React from 'react'
import { IconProps } from 'models/iconComponent'

const HomeIcon: React.FC<IconProps> = ({ color = '#7f7f7f', onClick }) => {
  return (
    <svg
      id="home"
      xmlns="http://www.w3.org/2000/svg"
      width="18.06"
      height="15.351"
      viewBox="0 0 18.06 15.351"
      onClick={onClick}
    >
      <path
        id="Shape"
        d="M7.224,15.351V9.933h3.612v5.418h4.515V8.127H18.06L9.03,0,0,8.127H2.709v7.224Z"
        fill={color}
      />
    </svg>
  )
}

export default HomeIcon
