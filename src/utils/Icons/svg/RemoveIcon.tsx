import React from 'react'
import { IconProps } from 'models/iconComponent'

const RemoveIcon: React.FC<IconProps> = ({
  color = '#fff',
  size = '39',
  onClick
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill={color}
      onClick={onClick}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
    </svg>
  )
}

export default RemoveIcon
