'use client';

import { useState, useEffect } from 'react';
import { Image } from '@mantine/core';
import image from './website_development.svg';
import image2 from './website_development2.svg';


export function HeroImage(){
  const [currentImage, setCurrentImage] = useState(image);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage:any) => (prevImage === image ? image2 : image));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
        {isClient ?
            <Image src={currentImage.src} />
            :
            <Image src={image.src} />
        }
    </>
);

};