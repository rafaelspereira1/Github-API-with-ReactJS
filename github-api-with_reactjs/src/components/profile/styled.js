import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: flex-start;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperStatusUsername = styled.div`
  display: flex;
  align-items: flex-start;
  align-items: center;
  margin-top: 8px;
  h3 {
    margin-right: 8px;
  }
  a{
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;

  h4 {
    margin: 8px;
    font-size: 16px;
    font-weight:bold;
  }

  h3 {
    /* margin: 8px; */
    font-size: 18px;
    font-weight:bold;
  }

  h1 {
    font-size: 22px;
    font-weight:bold;
  }
`;

export const WrapperImage = styled.img`
border-radius: 50%;
width: 180px;
margin: 25px;
`;