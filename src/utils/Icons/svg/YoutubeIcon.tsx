import React from 'react'
import { IconProps } from 'models/iconComponent'

const YoutubeIcon: React.FC<IconProps> = ({
  color = '#fff',
  size = '39',
  onClick
}) => {
  return (
    <svg
      id="Grupo_11611"
      data-name="Grupo 11611"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 39 39"
      onClick={onClick}
    >
      <g id="youtube-symbol">
        <g id="Grupo_11610" data-name="Grupo 11610">
          <path
            id="Caminho_17413"
            data-name="Caminho 17413"
            d="M39.969,49.178,51.9,42.99,39.969,36.764Z"
            transform="translate(-25.699 -23.719)"
            fill={color}
          />
          <path
            id="Caminho_17414"
            data-name="Caminho 17414"
            d="M19.5,0A19.5,19.5,0,1,0,39,19.5,19.5,19.5,0,0,0,19.5,0ZM32.786,26.009a3.479,3.479,0,0,1-2.977,2.705A92.342,92.342,0,0,1,19.5,29.1a92.377,92.377,0,0,1-10.312-.382,3.476,3.476,0,0,1-2.975-2.705,29.478,29.478,0,0,1-.48-6.509,29.477,29.477,0,0,1,.486-6.509,3.477,3.477,0,0,1,2.975-2.706A92.474,92.474,0,0,1,19.5,9.9a92.434,92.434,0,0,1,10.31.381,3.478,3.478,0,0,1,2.977,2.706,29.474,29.474,0,0,1,.476,6.509A29.477,29.477,0,0,1,32.786,26.009Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  )
}

export default YoutubeIcon
