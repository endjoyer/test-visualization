import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

const BarChartContainer = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
  margin: 20px;
  margin-top: 130px;
`;

const Bar = styled.div`
  width: 80px;
  min-width: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const BarSegment = styled.div`
  width: 100%;
  background-color: ${({ color }) => color};
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  min-height: 15px;
  align-items: center;
  color: white;
  font-weight: bold;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 700;
`;

const BarLabel = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 10px;
  font-weight: 400;
  color: #898290;
`;

const BarChart = ({ data }) => {
  const instances = Object.keys(data).filter(
    (key) => key !== 'title' && key !== 'norm'
  );

  const barRefs = useRef([]);
  const [barHeights, setBarHeights] = useState([]);

  useEffect(() => {
    const heights = barRefs.current.map((ref) => ref.clientHeight);
    setBarHeights(heights);
  }, [data]);

  const maxValue = Math.max(
    ...instances.map(
      (instance) =>
        data[instance].front + data[instance].back + data[instance].db
    ),
    data.norm
  );

  const calculateHeight = (value) => (value / maxValue) * 250;

  return (
    <BarChartContainer>
      {instances.map((instance, index) => {
        const currentBarHeight =
          data[instance].front + data[instance].back + data[instance].db;
        const nextBarHeight =
          index < instances.length - 1
            ? data[instances[index + 1]].front +
              data[instances[index + 1]].back +
              data[instances[index + 1]].db
            : null;

        return (
          <Bar key={instance} ref={(el) => (barRefs.current[index] = el)}>
            <BarSegment
              color="#4AB6E8"
              height={calculateHeight(data[instance].front)}
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            >
              {data[instance].front}
            </BarSegment>
            <BarSegment
              color="#AA6FAC"
              height={calculateHeight(data[instance].back)}
            >
              {data[instance].back}
            </BarSegment>
            <BarSegment
              color="#E85498"
              height={calculateHeight(data[instance].db)}
              style={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              {data[instance].db}
            </BarSegment>
            <BarLabel>{instance}</BarLabel>
            {index < instances.length - 1 && barHeights.length > 0 && (
              <Arrow
                startX={index * 15 + 40}
                startY={barHeights[index] - 150}
                endX={180}
                endY={barHeights[index + 1] - 150}
                value={nextBarHeight - currentBarHeight}
              />
            )}
          </Bar>
        );
      })}
      <Bar>
        <BarSegment
          color="#4AB6E8"
          height={calculateHeight(data.norm)}
          style={{
            background:
              'repeating-linear-gradient(45deg, #4AB6E8, #4AB6E8 10px, #fff 10px, #fff 20px)',
            borderRadius: '10px',
          }}
        >
          <span
            style={{
              color: '#898290',
              backgroundColor: 'white',
              padding: '2px 5px',
              borderRadius: '10px',
            }}
          >
            {data.norm}
          </span>
        </BarSegment>
        <BarLabel>Норматив</BarLabel>
      </Bar>
    </BarChartContainer>
  );
};

export default BarChart;
