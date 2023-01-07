import React, { FC } from 'react';
import placeholer from '../../images/no-image.jpeg';

interface IImageProps {
  src: string;
  alt: string;
}

export const Image: FC<IImageProps> = ({ src, alt }: IImageProps) => {
  const path = src
    ? `${process.env.REACT_APP_IMAGE_BASE_PATH}/original${src}`
    : placeholer;
  return <img src={path} alt={alt} />;
};
