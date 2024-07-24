'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import agileImg from '@/assets/agile.jpg';
import projectmanagmentImg from '@/assets/projectmanagment.jpg';
import tecnologyImg from '@/assets/tecnology.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: agileImg, alt: 'A agile project' },
  { image: projectmanagmentImg, alt: 'Project managment' },
  { image: tecnologyImg, alt: 'Steamed dumplings' },

];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}