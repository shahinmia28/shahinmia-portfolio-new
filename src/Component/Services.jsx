import { webDesign } from '../data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Services = () => {
  return (
    <Wrapper className='services' id='services'>
      <div className='container'>
        <div className='my-title'>
          <h2>Services</h2>
          <div className='title-underLine'></div>
        </div>
        <div className='items-lists row d-flex m-auto'>
          {webDesign.map((d, i) => (
            <Link
              to={{
                pathname: `/web/${d.id}`,
              }}
              state={{ data: d }}
              className='card m-3'
              key={i}
            >
              <img src={d.img} alt='' />
              <h3>{d.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 60px 0;
  background: linear-gradient(to top, #d0ffef 0%, #ffffff 100%);
  .items-lists {
    justify-content: center;
    align-items: center;
    .card {
      width: 300px;
      height: 220px;
      border-radius: 20px;
      border: 1px solid #05233b;
      color: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      cursor: pointer;
      padding: 0;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        z-index: 1;
        object-fit: cover;
      }

      h3 {
        position: absolute;
        text-align: center;
      }
      &:hover {
        background: #009760;
        img {
          opacity: 0.4;
          z-index: 0;
        }
      }
    }
  }
`;

export default Services;
