import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: #141414;
  color: white;
  flex: 1;
  padding-top: 50px;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 30px;
`;

export default function PageDefault({ children }) { //Destructor
  return (
    <React.Fragment>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  )
}
