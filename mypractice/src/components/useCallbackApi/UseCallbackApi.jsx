import React, { useCallback, useRef, useState } from 'react';
import Numlist from './Numlist';

function UseCallbackApi(props) {
  const [curNum, setCurNum] = useState(5);
  const numRef = useRef();
  numRef.current = curNum;

  const numIncrease = useCallback((number) => {
    //TODO 1) curNum은 항상 5로 고정된다.
    setCurNum(curNum + number);

    //TODO 2) 콜백 : 상태인 curNum이 계속 업데이트 된다.
    // 하지만 함수 내부에서의 cumNum은 5로 고정된다.
    // setCurNum((curNum) => {
    //   console.log(curNum);
    //   return curNum + number;
    // });

    //TODO 3) useRef를 통해 업데이트 가능
    // setCurNum(numRef.current + number);

    //TODO setState는 비동기로 동작하기 때문이다.
    //위의 두가지 모두 curNum은 항상 5이다.
    console.log(curNum, number);
  }, []);

  console.log('curNum', curNum);
  return (
    <>
      <div>--------------------------</div>
      <div>{curNum}</div>
      <button onClick={() => numIncrease(3)}>click</button>
      <Numlist numIncrease={numIncrease} />
    </>
  );
}

export default UseCallbackApi;
