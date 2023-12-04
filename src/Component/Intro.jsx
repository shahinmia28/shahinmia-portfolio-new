import styled from 'styled-components';

const Intro = () => {
  return (
    <Wrapper id='home'>
      <div className='container'>
        <div className='intro-container row'>
          <div className='col col-12 col-md-6'>
            <div className='content'>
              <h2>Hey There,</h2>
              <h1>Shahin Mia</h1>
              <h3>MERN Stack Web Developer</h3>
              <p>
                I'm a professional and highly experienced web developer with
                expertise in creating responsive websites and web applications.
                I am using MERN Stack technology to develop an application,
                fast, functional and interactive website or web application.
              </p>
              <div className='button-group'>
                <a href='image/mycv.pdf'>Resume</a>
                <a href='#footer'>Find Me</a>
              </div>
            </div>
            <span className='h-line'></span>
          </div>
          <div className='col col-12 col-md-6'>
            <div className='image'>
              <img src='/image/shahin.jpg' alt='intro-img' />
            </div>
          </div>
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
  overflow: hidden;
  position: relative;
  background: linear-gradient(to bottom, #006640ff 0%, #2bffb1ff 100%);
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .intro-container {
    width: 100%;
    margin-top: 130px;
    margin-bottom: 280px;
    @media (max-width: 768px) {
      margin: 100px 0;
    }
    .col {
      display: flex;
      @media (max-width: 768px) {
        padding-top: 50px;
      }
      .content {
        text-align: right;
        padding: 20px;
        margin: auto;
        padding-left: 20%;
        @media (max-width: 768px) {
          padding-left: 0;
        }
        h2 {
          font-size: 30px;
          color: #040404;
          font-weight: bold;
          @media (max-width: 768px) {
            font-size: 25px;
          }
        }
        h1 {
          font-weight: bold;
          color: #fff;
          font-size: 60px;
          margin: 10px 0px;
          @media (max-width: 768px) {
            font-size: 40px;
          }
        }
        h3 {
          font-size: 25px;
          font-weight: 500;
          color: #111;
          font-style: italic;
          @media (max-width: 768px) {
            font-size: 18px;
          }
        }
        p {
          font-size: 18px;
          text-align: justify;
          color: #fff;
          font-weight: 400;
          @media (max-width: 768px) {
            font-size: 16px;
          }
        }
        .button-group {
          a {
            color: #fff;
            text-decoration: none;
            padding: 10px 15px;
            border: none;
            margin: 5px;
            text-transform: uppercase;
            box-shadow: 0 0 10px -3px #111;
            border-radius: 5px;
            font-weight: 500;
            transition: all 0.4s linear;
            cursor: pointer;
            &:hover {
              box-shadow: 0 0 10px -3px #fff;
            }
          }
        }
      }

      .h-line {
        height: 100%;
        padding-right: 1px;
        background: linear-gradient(to bottom, #ffffffff 0%, #87ffd1ff 100%);
        position: relative;
        &::before {
          content: '';
          width: 12px;
          height: 12px;
          background: #007e50ff;
          position: absolute;
          border-radius: 50%;
          top: 0;
          left: -6px;
          border: 1px solid #fff;
        }
      }
      .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        img {
          height: 350px;
          width: 330px;
          border-radius: 100%;
          transition: all 0.4s linear;
          animation: imgBlink 2s infinite;
          @media (max-width: 768px) {
            height: 250px;
            width: 230px;
          }
          &:hover {
            transform: scale(1.3);
          }
          @keyframes imgBlink {
            0% {
              box-shadow: 0 0 20px -10px #fff;
            }
            50% {
              box-shadow: 0 0 20px 1px #fff;
            }
            100% {
              box-shadow: 0 0 20px -10px #fff;
            }
          }
        }
      }
    }
  }
`;

export default Intro;
