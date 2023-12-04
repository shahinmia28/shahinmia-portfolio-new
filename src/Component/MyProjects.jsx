import React from 'react';
import SwiperSlider from './SwiperSlider';
import styled from 'styled-components';

const MyProjects = () => {
  return (
    <Wrapper id='projects'>
      <div className='container'>
        <div className='my-title'>
          <h2>My Projects</h2>
          <div className='title-underLine'></div>
        </div>
      </div>
      <SwiperSlider />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 60px 0;
  background: linear-gradient(to bottom, #d0ffef 0%, #ffffff 100%);
`;
export default MyProjects;
