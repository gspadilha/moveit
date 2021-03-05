import React, { useContext } from 'react';
import { CountdownContext } from '../../../contexts/CoutdownContextProvider';

import {
  CountdownContainer,
  CountdownNumber,
  CountdownSeparator,
  CountdownButtonStart,
  CountdownButtonStop,
  CountdownButtonFinished,
} from './styles';

const CountDown: React.FC = () => {
  const {
    minutes,
    seconds,
    isActive,
    hasFinished,
    handleResetCountdown,
    handleStartCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

      {hasFinished ? (
        <CountdownButtonFinished disabled>
          Ciclo encerrado
        </CountdownButtonFinished>
      ) : (
        <>
          {isActive ? (
            <CountdownButtonStop type="button" onClick={handleResetCountdown}>
              Abandonar Ciclo
            </CountdownButtonStop>
          ) : (
            <CountdownButtonStart type="button" onClick={handleStartCountdown}>
              Iniciar um novo Ciclo
            </CountdownButtonStart>
          )}
        </>
      )}
    </>
  );
};

export default CountDown;
