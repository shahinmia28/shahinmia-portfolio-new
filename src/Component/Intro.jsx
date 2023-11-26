import Typewriter from 'typewriter-effect';
import { webDesign } from '../data';
import styled from 'styled-components';

const Intro = () => {
  const typeData = webDesign.map((d) => d.title);
  return (
    <Wrapper id='intro'>
      <div className='overlay'></div>
      <div className='intro-container'>
        <div className='left'>
          <h1>Spend More To Get The Quality Work</h1>
          <div className='blue-ray'></div>
        </div>
        <div className='content'>
          <h2>There, I'm </h2>
          <h1>Shahin Mia</h1>
          <h3>
            <p> Experienced at</p>
            <Typewriter
              options={{
                strings: typeData,
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 260'>
        <path
          fill='#fff'
          fillOpacity='1'
          d='M0,256L80,256C160,256,320,256,480,229.3C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
        ></path>
      </svg>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  max-height: 800px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }
  .overlay {
    background: linear-gradient(to bottom, #009760ff 0%, #2bffb1ff 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1 !important;
  }
  .intro-container {
    width: 100%;
    margin: 200px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 4;
    @media (max-width: 768px) {
      margin: 50px 0;
      text-align: center;
    }
    .left {
      width: 700px;
      padding: 20px 30px;
      margin: auto;
      @media (max-width: 768px) {
        display: none;
      }
      h1 {
        padding: 10px;
        font-size: 72px;
        font-weight: 700;
        letter-spacing: 4px;
        line-height: 1.1;
        color: #fff;

        @media (max-width: 992px) {
          font-size: 45px;
        }
      }
      .blue-ray {
        margin: 10px;
        background-color: #4de5f0;
        width: 150px;
        height: 6px;
      }
    }
    .content {
      padding: 20px 30px;
      margin: auto;
      width: 500px;
      color: #040404;
      h2 {
        font-size: 30px;
        color: #040404;
        font-weight: bold;
      }
      h1 {
        font-weight: bold;
        color: #fff;
        font-size: 50px;
        margin: 10px 0px;
      }
      h3 {
        font-size: 27px;
        font-weight: bold;
        span {
          font-size: inherit;
          color: #fff1f4;
          font-weight: normal;
          font-style: italic;
        }
      }
      @media (max-width: 768px) {
        margin: 100px auto;
      }
    }
  }
`;

export default Intro;
