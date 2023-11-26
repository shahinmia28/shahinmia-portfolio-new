import { testimonial } from '../data';
import styled from 'styled-components';

const Testimonial = () => {
  return (
    <Wrapper className='testimonial' id='testimonial'>
      <div className='my-title'>
        <h2>Testimonial</h2>
        <div className='title-underLine'></div>
      </div>
      <div className='container row'>
        {testimonial.map((data, index) => (
          <div
            className={data.featured ? 'card featured m-3' : 'card m-3'}
            key={index}
          >
            <div className='top'>
              <img src={data.img} alt='' />
            </div>
            <div className='center'>
              <p> {data.desc} </p>
              <h4>{data.name}</h4>
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: linear-gradient(to top, #d0ffef 0%, #ffffff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  .container {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .card {
      width: 320px;
      height: 380px;
      border-radius: 10px;
      box-shadow: 0px 0px 15px -8px #05233b;
      display: flex;
      flex-direction: column;
      padding: 20px;
      transition: all 1s ease;

      &.featured {
        transform: scale(1.05);
      }

      &:hover {
        transform: scale(1.1);
      }
      .top {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin: 30px 0;
        }
      }
      .center {
        color: #05233b;
        text-align: center;
        p {
          padding: 10px;
          border-radius: 10px;
          background: linear-gradient(to bottom, #d0ffef 0%, #e8fff7 100%);
        }
        h4 {
          margin-top: 30px;
          font-weight: 600;
        }
        span {
          color: #05233baf;
        }
      }
    }
  }
`;
export default Testimonial;
