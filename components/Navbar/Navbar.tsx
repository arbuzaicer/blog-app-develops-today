import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Logo from '../../assets/images/blog-logo.png';

const NavbarWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background: #000;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled.div`
  width: 150px;
  img {
    width: 100%;
  }
`;
const NavigationWrapper = styled.nav`
  margin-right: 20px;
  a {
    text-decoration: none;
    color: #ccc;
    font-size: 1.4em;
    margin-right: 50px;
  }
`;

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <LogoWrapper>
      <Link href="/">
        <a>
          <img src={Logo} alt="Blog logo" />
        </a>
      </Link>
    </LogoWrapper>
    <NavigationWrapper>
      <Link href="/">
        <a>Recent Posts</a>
      </Link>
      <Link href="/posts/new">
        <a>Add new Post</a>
      </Link>
    </NavigationWrapper>
  </NavbarWrapper>
);

export default Navbar;
