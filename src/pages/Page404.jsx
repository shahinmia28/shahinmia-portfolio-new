import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Page404 = () => {
  return (
    <Wrapper className='underConstruction'>
      <div className='container text-center'>
        <div className='text'>
          <h1>Opsss!</h1>
          <h3>404! Page not found</h3>
          <Link to={'/'}>Back to home</Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  height: 80vh;
  background: linear-gradient(to bottom, #009760 0%, #ffffff 90%);
  .container {
    .text {
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      a {
        color: #666666;

        &:hover {
          color: #111;
        }
      }
    }
  }
`;
export default Page404;
