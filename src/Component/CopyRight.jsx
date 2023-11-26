import { iconData } from '../data';
import styled from 'styled-components';

const CopyWrite = () => {
  return (
    <Wrapper className='copyRight'>
      <div className='row'>
        <div className='col-12 col-md-6 text-center text-md-start copy d-none d-md-block'>
          <span> &copy; All right are reserved by Shahin mia</span>
        </div>
        <div className='col-12 col-md-6 social m-auto'>
          <ul className='d-flex justify-content-center justify-content-md-end  align-items-center'>
            {iconData.map((d, i) => (
              <li className='icon-box' key={i}>
                <a
                  href={d.link}
                  className='icon-link d-flex text-decoration-none justify-content-center align-items-center'
                >
                  <i className={d.name}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-12 col-md-6 text-center text-md-start copy d-block d-md-none'>
          <span> &copy; All right are reserved by Shahin mia</span>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: #00784c;
  .row {
    .copy {
      margin: auto;
      padding: 10px 40px;
      color: #fff;
    }
    .social {
      ul {
        margin: auto;
        padding: 5px 20px;
        .icon-box {
          background: #fff;
          margin: 5px 10px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          transition: all 0.4s linear;
          &:hover {
            background: #00c57d;
            color: #fff;
            animation: iconAnim 1s infinite;
          }

          @keyframes iconAnim {
            1% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          .icon-link {
            color: inherit;
            i {
              font-size: 20px;
              color: inherit;
            }
          }
        }
      }
    }
  }
`;
export default CopyWrite;
