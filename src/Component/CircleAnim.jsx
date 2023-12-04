import React from 'react';
import styled from 'styled-components';

const CircleAnim = ({ animationStart, data }) => {
  const per = data.percentage - 5;
  return (
    <Wrapper>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='160px'
        height='160px'
      >
        <defs>
          <linearGradient id='GradientColor'>
            <stop offset='0%' stopColor='#0512ff' />
            <stop offset='100%' stopColor='#6f76ff' />
          </linearGradient>
        </defs>

        <circle
          cx='80'
          cy='80'
          r='70'
          stroke='url(#GradientColor)'
          strokeWidth='10'
          strokeDasharray='472'
          strokeDashoffset='472'
          fill='none'
          strokeLinecap='round'
          className={animationStart ? 'animate' : ''}
        >
          <style>
            {`
              @keyframes anim {
                100% {
                  stroke-dashoffset: ${472 - (472 * per) / 100};
                }
              }
            `}
          </style>
        </circle>
      </svg>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  svg {
    position: absolute;
    top: 0;
    left: 0;
    circle {
      &.animate {
        animation: anim 2s linear forwards;
      }
    }
  }
`;
export default CircleAnim;
