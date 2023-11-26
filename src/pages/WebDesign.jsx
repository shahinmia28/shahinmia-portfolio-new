import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const WebDesign = () => {
  const d = useLocation().state.data;

  return (
    <Wrapper className='web-design'>
      <div className='back-home'>
        <h1>
          <Link to={'/'}>
            <i className='fa-solid fa-reply-all'></i> Back to Home
          </Link>
        </h1>
      </div>
      <div className='container'>
        <div className='m-auto d-flex'>
          <div className='jumbotron'>
            <h1 className='display-4'>{d.title}</h1>
            <img src={d.img} alt={d.img} />
            <p className='lead'>{d.docs}</p>
            <ul className='list-group'>
              {d.list.map((l, i) => (
                <li className='list-group-item list-group-item-light' key={i}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background: linear-gradient(to bottom, #009760 0%, #ffffff 60%);
  .back-home {
    color: #fff;
    background: #00976080;
    position: fixed;
    text-align: center;
    width: 100%;
    padding: 10px;
    z-index: 5;
    box-shadow: 0 0 20px -5px #666;

    h1 {
      color: inherit;
      a {
        color: inherit;
        text-decoration: none;
      }
      &:hover {
        a {
          text-decoration: underline;
        }
      }
    }
  }

  .container {
    div {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .jumbotron {
        margin-top: 100px;
        background: #0097602a;
        padding: 40px;
        max-width: 800px;
        width: 100%;
        border-radius: 10px;
        box-shadow: 0 0 20px -5px #666;
        img {
          width: 100%;
          margin: 20px 0;
        }
        .list-group {
          li:nth-child(odd) {
            background: #858585;
            color: #fff;
          }
        }
      }
    }
  }
`;

export default WebDesign;
