import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-grey: center;
   color: green;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
    position: fixed;
    width: 100%;

    bottom: 2.5rem;
    height: 1.25rem;
    font-size: 3rem;
    z-index: 10;
    color: rgba(102,102,102,0.75);
    padding-bottom: 5rem;
    justify-content: end;

    padding-right: 5rem;
    display: flex;
`