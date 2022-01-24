import React, { useState } from 'react';
import Imgs from './Imgs';

function ImgWrapper(props) {
  const [images, setImages] = useState([
    './asset/image1.png',
    './asset/image2.png',
    './asset/image3.png',
    './asset/image4.png',
    './asset/image5.png',
    './asset/image6.png',
    './asset/image7.png',
  ]);
  return (
    <ul>
      {images.map((image) => (
        <Imgs image={image} key={image} />
      ))}
    </ul>
  );
}

export default ImgWrapper;
