import { useState } from 'react';
import { NavMenuLists } from '../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  const [navBar, setNavBar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <Wrapper>
      <nav className={navBar ? 'navigation-bar scroll' : 'navigation-bar'}>
        <h1>
          <Link to='/' className='nav-link'>
            Shahin M.
          </Link>
        </h1>

        <ul
          id={click ? 'mobile' : ''}
          className={
            navBar ? 'navigation-bar-list scroll' : 'navigation-bar-list'
          }
        >
          {NavMenuLists.map((d, i) => (
            <li key={i}>
              <a
                className='nav-link'
                href={`#${d.name}`}
                onClick={() => setClick(false)}
              >
                {d.name}
              </a>
            </li>
          ))}
        </ul>

        <div className='right d-block d-md-none '>
          <div className='toggle-menu'>
            <i
              className={click ? 'fas fa-times' : 'fas fa-bars'}
              onClick={() => setClick(!click)}
            ></i>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .navigation-bar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    padding: 0 60px;
    background: transparent;
    transition: all 0.5s ease;
    z-index: 15;
    width: 100%;
    height: 100px;
    color: #fff;
    @media (max-width: 768px) {
      padding: 0 20px;
    }

    &.scroll {
      height: 60px;
      background: #fff;
      color: #555;
      box-shadow: 0 0 15px -5px #333;

      .right {
        .toggle-menu {
          span {
            background: #333;
          }
        }
      }
    }

    h1 {
      margin: auto 0;
      font-weight: 900;
    }

    .navigation-bar-list {
      margin: auto 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0;
      font-weight: 500;
      transition: all 0.4s linear;
      li {
        list-style: none;
        padding: 5px;
        border-radius: 5px;
        &:hover {
          box-shadow: 0 0 15px -5px #333;
        }

        a {
          text-transform: uppercase;
          color: inherit;
          margin: 0 20px;
          font-size: 15px;
        }
      }

      @media (max-width: 768px) {
        display: block;
        background: #fff;
        z-index: -1 !important;
        position: absolute;
        left: -300px;
        top: 80px;
        padding-top: 30px;
        width: 250px;
        border-radius: 10px;
        box-shadow: 0 0 15px -5px #333;
        li {
          color: #333;
          padding: 5px;
          margin: 10px;
          a {
            text-align: left;
          }
        }

        &#mobile {
          left: 8px;
          &.scroll {
            top: 65px;
            background: #fff;
            li {
              color: #333;
            }
          }
        }
      }
    }
    .right {
      margin: auto 0;
      .toggle-menu {
        padding: 2px 10px;
        i {
          transition: all 0.4s ease-in-out;
          font-size: 35px;
        }
      }
    }
  }
`;

export default NavMenu;
