import { Link } from 'react-router-dom';
import { footerMenuData } from '../data';
import CopyWrite from './CopyRight';
import Svgwave from './Svgwave';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrapper className='footer' id='footer'>
      <Svgwave />
      <div className='info '>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4 footer-logo text-center '>
              <h1>
                <a href='#intro' className='nav-link'>
                  Shahin M.
                </a>
              </h1>
            </div>
            <div className='footer-contact col-12 col-md-8'>
              <ul className='contact-details'>
                <li>
                  <i className='fa-solid fa-location-dot'></i>
                  <span>Bhuapur, Tangail, Dhaka, Bangladesh</span>
                </li>
                <li>
                  <i className='fa-solid fa-envelope-open'></i>
                  <span>shahin.lokerpara@gmail.com</span>
                </li>
                <li>
                  <i className='fa-solid fa-mobile-screen-button'></i>
                  <span>+880 1777 2969 33</span>
                </li>
              </ul>

              <ul className='footer-menu'>
                {footerMenuData.map((d, i) => (
                  <li key={i}>
                    <i className={d.icon}></i>
                    <Link to={'/underConstruction'}>{d.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CopyWrite />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .info {
    background: #009760ff;
    width: 100%;
    color: #fff;
    .container {
      .row {
        padding: 20px 0;
        .footer-logo {
          margin: auto;
          h1 {
            padding: 20px 0;
            margin: auto 0;
            font-weight: 800;
          }
        }
        .footer-contact {
          ul {
            list-style: none;
            display: flex;
            justify-content: start;

            @media (max-width: 768px) {
              flex-direction: column;
            }
            li {
              display: flex;
              align-items: baseline;
              margin: 0 15px;
              padding: 5px;
              font-size: 15px;
              cursor: pointer;

              i {
                width: 20px;
                height: 20px;
                margin-right: 8px;
                color: #fff;
              }
              a {
                color: inherit;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
              span {
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Footer;
