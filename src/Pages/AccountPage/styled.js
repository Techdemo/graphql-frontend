import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ProzaLibre-Medium;
  font-size: 48px;
  color: #100B00;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1.5em;
`;

export const PersonDetailList = styled.ul`
  list-style-type: none;
  text-indent: -20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 150px;
`

export const PersonDetail = styled.li`
   font-family: ProzaLibre-Medium;
   font-size: 16px;
`