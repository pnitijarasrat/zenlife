import React from "react";

interface IconProp {
  src: string
  alt: string
  size: number

}

const Icon: React.FC<IconProp> = ({ src, alt, size }) => {
  const style = {
    width: size,
    height: size
  }
  return (
    <img src={src} alt={alt} style={style} />
  )

}

export default Icon