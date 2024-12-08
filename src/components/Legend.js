import React from 'react';
import styled from 'styled-components';

const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 20px 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  font-weight: 400;
  color: #898290;
`;

const ColorBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color};
  border-radius: 3px;
  margin-right: 8px;
`;

const Legend = () => (
  <LegendContainer>
    <LegendItem>
      <ColorBox color="#4AB6E8" />
      Клиентская часть
    </LegendItem>
    <LegendItem>
      <ColorBox color="#AA6FAC" />
      Серверная часть
    </LegendItem>
    <LegendItem>
      <ColorBox color="#E85498" />
      База данных
    </LegendItem>
  </LegendContainer>
);

export default Legend;
