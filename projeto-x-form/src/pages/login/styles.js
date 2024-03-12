import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 380px;
  height: 450px;
  
  background: rgba( 255, 255, 255, 0.6 );
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  padding: 24px 16px;
`;

export const Content = styled.section`
  width: 380px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;  
`;

export const Title = styled.h2`
  display: flex;

  font-size: 2.5rem;
  color: black;

  margin: 0;


  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
    font-size: 2.5rem;
    color: green;
    
    margin: 0;
  }
`;

export const Subtitle = styled.h4`
  margin: 0;
  color: var(--black-color);
`;
