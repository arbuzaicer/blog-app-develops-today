import React from 'react';
import styled from 'styled-components';

import Navbar from '../Navbar';

const LayoutContainer = styled.div`
  min-height: 95vh;
  width: 100vw;
  display: flex;
  background: #cccccc;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .children {
    margin-top: 20px;
  }
`;

interface ILayout {
    children: any
}

const Layout: React.FC<ILayout> = ({ children }) => (
  <>
    <Navbar />
    <LayoutContainer className="container">
      <div className="children">{children}</div>
    </LayoutContainer>
  </>
);

export default Layout;
