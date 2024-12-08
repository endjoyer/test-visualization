import React from 'react';
import styled from 'styled-components';

const ArrowContainer = styled.svg`
  position: absolute;
  overflow: visible;
  bottom: 0;
  left: 0;
  font-size: 14px;
  font-weight: 700;
`;

const Arrow = ({ startX, startY, endX, endY, value }) => {
  const isPositive = value > 0;
  const isZero = value === 0;
  const color = isZero ? '#898290' : isPositive ? '#00CC99' : '#FC440F';
  const label = isPositive ? `+${value}` : `${value}`;

  const arrowPath = `
    M${startX},${-startY - 6} 
    V${-startY - 62 - (endY > 0 ? endY - startY : 0)} 
    H${endX - 10} 
    V${-endY - 10}
  `;
  const ovalX = (startX + endX - 10) / 2;
  const ovalY = -startY - 62 - (endY > 0 ? endY - startY : 0);

  return (
    <ArrowContainer>
      <path
        d={arrowPath}
        stroke="#898290"
        strokeWidth="1"
        fill="none"
        markerEnd={'url(#arrowhead)'}
      />
      <rect
        x={ovalX - 27}
        y={ovalY - 12}
        width="52"
        height="24"
        rx="14"
        ry="14"
        fill={color}
      />
      {!isZero && (
        <image
          href={isPositive ? 'arrow-up.svg' : 'arrow.svg'}
          x={ovalX - 21}
          y={ovalY - 5}
          width="8"
          height="10"
        />
      )}
      <text
        x={ovalX + 5}
        y={ovalY}
        fill="white"
        fontSize="10"
        textAnchor="middle"
        dy=".3em"
      >
        {label.length > 5 ? `${label.slice(0, 5)}…` : label}
      </text>

      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="5"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#898290" />
        </marker>
      </defs>
    </ArrowContainer>
  );
};

export default Arrow;
