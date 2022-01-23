import React, { memo } from 'react';

function Numlist({ numIncrease }) {
  const numBtn = () => {
    numIncrease(2);
  };

  console.log('numlist');

  return <button onClick={numBtn}> numlist </button>;
}

//* 첫 렌더링 이후 메모이제이션된다.
export default memo(Numlist);
// export default Numlist;
