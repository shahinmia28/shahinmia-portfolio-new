import { skillData } from '../data';
import { useState } from 'react';
import styled from 'styled-components';
import RSkillBar from './RSkillBar';
import Counter from './Counter';

const Skills = () => {
  const [animationStart, setAnimationStart] = useState(false);

  const animation = () => {
    if (window.scrollY > 500) {
      setAnimationStart(true);
    } else {
      setAnimationStart(false);
    }
  };
  window.addEventListener('scroll', animation);

  return (
    <Wrapper id='skills'>
      <div className='container'>
        <div className='info-box'>
          <div className='my-title'>
            <h2>My Skills</h2>
            <div className='title-underLine'></div>
          </div>
          <RSkillBar animationStart={animationStart} />

          <div className='skill-container'>
            {skillData.map((d, i) => {
              return (
                <div className='skill-box' key={i}>
                  <div className='skill-title'>{d.title}</div>
                  <div className='skill-bar'>
                    <span
                      className={
                        animationStart ? `anim ${d.class}` : ` ${d.class}`
                      }
                      style={{ width: d.tooltip + '%' }}
                    >
                      <span className='tool'>
                        <Counter
                          percentage={d.tooltip}
                          animationStart={animationStart}
                        />
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 0;
  background: linear-gradient(to top, #d0ffef 0%, #ffffff 100%);
  .container {
    .info-box {
      padding: 20px;
      margin: auto;
      max-width: 1000px;
      background: #fff;
      box-shadow: 0 0 20px -10px #333;
      border-radius: 10px;
      .my-title {
        margin-top: 20px;
      }
      .skill {
        width: 100%;
      }

      .skill-container {
        width: 100%;
        padding: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .skill-box {
          width: 100%;
          margin: 10px 0;
          padding: 2px;
          .skill-title {
            display: inline;
            font-size: 14px;
            font-weight: 600;
            color: #333;
          }
          .skill-bar {
            height: 5px;
            width: 100%;
            border-radius: 30px;
            margin-top: 6px;
            background: #0097602a;

            .skill-per {
              position: relative;
              display: block;
              height: 100%;
              border-radius: 30px;
              opacity: 0;
              transition: all 3s linear;
              background: linear-gradient(to right, #868cff 0%, #212cff 100%);
              .tool {
                position: absolute;
                background: #212cff;
                right: -14px;
                top: -28px;
                font-size: 9px;
                font-weight: 500;
                color: #fff;
                padding: 2px 6px;
                border-radius: 3px;
                z-index: 10 !important;
                transition: all 0.4s linear;
                cursor: pointer;
                &:hover {
                  transform: scale(1.5);
                }
                &::after {
                  content: '';
                  position: absolute;
                  left: 50%;
                  bottom: -2px;
                  height: 10px;
                  width: 10px;
                  z-index: -1 !important;
                  background: inherit;
                  transform: translateX(-50%) rotate(45deg);
                }
              }
              &.anim {
                animation: progress 3s linear forwards;

                @keyframes progress {
                  0% {
                    width: 0;
                    opacity: 1;
                  }
                  100% {
                    opacity: 1;
                  }
                }
                @media (max-width: 768px) {
                  animation-delay: 0.6s;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Skills;
