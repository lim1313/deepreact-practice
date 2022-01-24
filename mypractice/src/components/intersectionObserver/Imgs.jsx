import React, { useEffect, useRef } from 'react';

function Imgs({ image }) {
  let imgRef = useRef();

  const callback = (entries, observer) => {
    let [entry] = entries;
    // viewport에 들어오면 src 설정
    if (entry.isIntersecting) {
      imgRef.current.src = imgRef.current.dataset.src;
      // src 설정 후 관찰 중지
      observer.unobserve(imgRef.current);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (imgRef.current) observer.observe(imgRef.current);

    // 언마운트 직전 모든 관찰 제거
    return () => observer.disconnect();
  }, []);

  return (
    <li className='imgWrapper'>
      <img ref={imgRef} data-src={image} alt={image} />
    </li>
  );
}

export default Imgs;
