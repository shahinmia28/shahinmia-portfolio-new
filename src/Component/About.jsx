import { skillData, webDesign } from '../data';
import { useState } from 'react';
import styled from 'styled-components';

const About = () => {
  const [animationStart, setAnimationStart] = useState(false);

  const animation = () => {
    if (window.scrollY > 1200) {
      setAnimationStart(true);
    } else {
      setAnimationStart(false);
    }
  };
  window.addEventListener('scroll', animation);

  return (
    <Wrapper id='about'>
      <div className='container'>
        <div className='info-box'>
          <div className='intro-data'>
            <img src='/image/shahin.jpg' alt='intro-img' />
            <h3 className='name'>Shahin Mia</h3>
            <h5 className='title'>Front-End web developer</h5>
            <p className='text-muted text-center'>
              I'm Shahin mia, a professional and highly experienced web designer
              with expertise in creating responsive websites and web
              applications. I am using React JS to develop an application, fast,
              functional and interactive website or web application.
            </p>
          </div>

          <div className='skill-container'>
            {skillData.map((d, i) => (
              <div className='skill-box' key={i}>
                <div className='skill-title'>{d.title}</div>
                <div className='skill-bar'>
                  <span
                    className={
                      animationStart ? `anim ${d.class}` : ` ${d.class}`
                    }
                    style={{ width: d.tooltip + '%' }}
                  >
                    <span className='tool'>{d.tooltip}%</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 0;
  background: linear-gradient(to bottom, #d0ffef 0%, #ffffff 100%);
  .container {
    .info-box {
      padding: 20px;
      margin: auto;
      max-width: 1000px;
      background: #fff;
      box-shadow: 0 0 20px -10px #333;
      border-radius: 10px;
      .intro-data {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        img {
          height: 200px;
          width: 180px;
          border-radius: 100%;
          transition: all 0.4s linear;
          animation: imgBlink 2s infinite;
          &:hover {
            transform: scale(1.5);
          }
          @keyframes imgBlink {
            0% {
              box-shadow: 0 0 20px -10px #4de5f0a1;
            }
            50% {
              box-shadow: 0 0 20px 1px #4de5f0a1;
            }
            100% {
              box-shadow: 0 0 20px -10px #4de5f0a1;
            }
          }
        }
        .name {
          color: #009760;
          padding-top: 17px;
          font-weight: bold;
        }
        .title {
          font-size: 15px;
          color: #ad8317;
          font-style: italic;
        }
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
            height: 8px;
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

              .tool {
                position: absolute;
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
            .html {
              background: #dc1414;
              animation-delay: 0.1s;
              .tool {
                background: #dc1414;
              }
            }
            .css {
              background: #daa220;
              animation-delay: 0.2s;
              .tool {
                background: #daa220;
              }
            }
            .bootstrap {
              background: #dace20;
              animation-delay: 0.3s;
              .tool {
                background: #dace20;
              }
            }
            .javascript {
              background: #659700;
              animation-delay: 0.3s;
              .tool {
                background: #659700;
              }
            }
            .react {
              background: #49ff46;
              animation-delay: 0.4s;
              .tool {
                background: #49ff46;
              }
            }
            .node {
              background: #46ffe9;
              animation-delay: 0.5s;
              .tool {
                background: #46ffe9;
              }
            }
            .express {
              background: #46acff;
              animation-delay: 0.5s;
              .tool {
                background: #46acff;
              }
            }
            .mongodb {
              background: #9946ff;
              animation-delay: 0.5s;
              .tool {
                background: #9946ff;
              }
            }
          }
        }
      }
    }
  }
`;

export default About;
