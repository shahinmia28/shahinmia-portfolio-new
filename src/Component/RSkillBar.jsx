import styled from 'styled-components';
import Counter from './Counter';
import { roundSkillData } from '../data';
import CircleAnim from './CircleAnim';
const RSkillBar = ({ animationStart }) => {
  return (
    <Wrapper>
      <div className='round-skill-container row'>
        {roundSkillData.map((curElem, i) => {
          return (
            <div className='col col-md-4' key={i}>
              <div className='skill-box'>
                <div className='skill-bar'>
                  <div className='outer'>
                    <div className='inner'>
                      <div className='number'>
                        <Counter
                          percentage={curElem.percentage}
                          animationStart={animationStart}
                        />
                      </div>
                    </div>
                  </div>
                  <CircleAnim data={curElem} animationStart={animationStart} />
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    version='1.1'
                    width='160px'
                    height='160px'
                  >
                    <defs>
                      <linearGradient id='GradientColor'>
                        <stop offset='0%' stopColor='#0512ff' />
                        <stop offset='100%' stopColor='#5f67ff' />
                      </linearGradient>
                    </defs>

                    <circle
                      cx='80'
                      cy='80'
                      r='70'
                      stroke='url(#GradientColor)'
                      strokeWidth='10'
                      strokeDasharray='472'
                      fill='none'
                      strokeLinecap='round'
                      className={animationStart ? 'animate' : ''}
                    >
                      <animate
                        attributeName='stroke-dasharray'
                        from='0,500'
                        to={`350, ${472 - (472 * curElem.percentage) / 100}`}
                        dur='2s'
                        fill='freeze'
                      />
                    </circle>
                  </svg> */}
                </div>
                <h4 className='skill-title'>{curElem.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .round-skill-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .skill-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      margin: auto;

      .skill-title {
        text-align: center;
        margin-top: 20px;
      }
      .skill-bar {
        width: 160px;
        height: 160px;
        position: relative;
        .outer {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          padding: 20px;
          box-shadow: 6px 6px 10px -1px #00000026, -6px -6px 10px -1px #62626222;

          .inner {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: inset 4px 4px 6px -1px #6c6c6c25,
              inset -4px -4px 4px -1px #ffffff, -0.5px -0.5px 0px #fff,
              0.5px 0.5px 0px #d3d3d3ac, 0px 12px 10px -10px #e6e6e6ac;

            .number {
              font-size: 22px;
              font-weight: 600;
              color: #5f67ff;
            }
          }
        }
      }
    }
  }
`;
export default RSkillBar;
