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
  align-items: center
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;

  h3 {
    margin: 8px;
  }
`;

export const WrapperImage = styled.img`
border-radius: 50%;
width: 180px;
margin: 25px;
`;