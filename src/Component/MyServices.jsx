import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { myServiceData } from '../data';

const MyServices = () => {
  return (
    <Wrapper id='services'>
      <div className='container'>
        <div className='my-title'>
          <h2>My Services</h2>
          <div className='title-underLine'></div>
        </div>
        <div className='rapper'>
          <VerticalTimeline lineColor={'#212cff'}>
            {myServiceData.map((curElem, i) => {
              return (
                <VerticalTimelineElement
                  className='vertical-timeline-element--work'
                  contentStyle={{ color: '#fff' }}
                  contentArrowStyle={{
                    borderRight: '7px solid  #212cff',
                  }}
                  lineColor={'black'}
                  date={curElem.date}
                  iconStyle={{ background: '#fff', color: '#212cff' }}
                  icon={curElem.icon}
                >
                  <div className='content-box'>
                    <div className='h-line'></div>
                    <div className='content-data'>
                      <h3 className='vertical-timeline-element-title'>
                        {curElem.title}
                      </h3>
                      <h5 className='vertical-timeline-element-subtitle'>
                        {curElem.subtitle}
                      </h5>
                      <p>{curElem.docs}</p>
                    </div>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 0;
  background: linear-gradient(to top, #ffffff 0%, #d0ffef 50%, #ffffff 100%);
  .container {
    .rapper {
      margin-top: 30px;
      .vertical-timeline {
        .vertical-timeline-element--work {
          .vertical-timeline-element-icon {
            border: 4px solid #212cff;
            box-shadow: 0 0 10px -2px #212cff;
            padding: 0;
          }
          .vertical-timeline-element-content {
            box-shadow: 0 0 12px 0px #333;
            background: linear-gradient(
              145deg,
              #0009b6 0%,
              #3b45ff 50%,
              #0009b6 100%
            );
            .vertical-timeline-element-date {
              color: #212cff;
            }
            .content-box {
              display: flex;
              justify-content: space-between;

              .h-line {
                padding-right: 1px;
                background: linear-gradient(
                  to bottom,
                  #ffffffff 0%,
                  #7c82ff 100%
                );
                z-index: 5;
                position: relative;
                &::before {
                  content: '';
                  width: 12px;
                  height: 12px;
                  background: #0009b6;
                  position: absolute;
                  border-radius: 50%;
                  top: 0;
                  left: -6px;
                  border: 1px solid #fff;
                }
              }

              .content-data {
                margin-left: 10px;
                h3 {
                  text-transform: capitalize;
                  font-size: 23px;
                }
                .vertical-timeline-element-subtitle {
                  margin-top: 10px;
                  font-size: 16px;
                  font-style: italic;
                  color: #fff;
                }
                p {
                  text-align: justify;
                  font-weight: 300;
                  font-size: 16px;
                  margin-top: 10px;
                  color: #cacdff;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default MyServices;
