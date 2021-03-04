import React, { useEffect, useState } from 'react';

import {
  CountdownContainer,
  CountdownNumber,
  CountdownSeparator,
  CountdownButtonStart,
  CountdownButtonStop,
} from './styles';

const INITIAL_TIME = 60 * 25;

const CountDown: React.FC = () => {
  const [time, setTime] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(currentValue => currentValue - 1);
      }, 1000);
    }
  }, [isActive, time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const handleStartCountdown = () => {
    setIsActive(true);
  };

  const handleStopCountdown = () => {
    setIsActive(false);
  };
  return (
    <>
      <CountdownContainer>
        <CountdownNumber>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </CountdownNumber>
        <CountdownSeparator>:</CountdownSeparator>
        <CountdownNumber>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </CountdownNumber>
      </CountdownContainer>

      {!isActive ? (
        <CountdownButtonStart type="button" onClick={handleStartCountdown}>
          Iniciar um novo Ciclo
        </CountdownButtonStart>
      ) : (
        <CountdownButtonStop type="button" onClick={handleStopCountdown}>
          Abandonar Ciclo
        </CountdownButtonStop>
      )}
    </>
  );
};

export default CountDown;
