import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [number, setNumber] = useState<number>(0);

  const minusBtnHandler = () => {
    setNumber(number - 1);
  };

  const plusBtnHandler = () => {
    setNumber(number + 1);
  };

  // 숫자를 받아와 해당 숫자를 포함한 문자열 메세지 반환 함수
  const createAlertMsg = (num: number): string => {
    return `현재 숫자는 ${num} 입니다.`;
  };

  const alertMsgBtn = () => {
    // createAlertMsg 함수를 호출하여 메세지를 생성하고, alert으로 띄움
    alert(createAlertMsg(number));
  };

  // 컴포넌트가 렌더링될 때마다 실행하는 함수
  useEffect(() => {
    // 의존성 배열 [number]을 설정함으로써 number 값이 변경될 때마다 함수 실행
    console.log(`number가 ${number}로 변경되어 알려드립니다.`);
  }, [number]);

  return (
    <>
      <div>
        <h2>{number}</h2>
      </div>
      <div>
        <button onClick={minusBtnHandler}>-</button>
        <button onClick={plusBtnHandler}>+</button>
      </div>
      <button onClick={alertMsgBtn}>Message</button>
    </>
  );
};

export default App;
