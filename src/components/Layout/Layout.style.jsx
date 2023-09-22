import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Header = styled.nav`
  width: 100vw;
  height: 30px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #000;
  box-shadow: 0 2px 5px #000;
  z-index: 2;
`;

export const NavLinkS = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  display: block;
  transition: all 200ms ease;
  &:hover {
    text-shadow: 0 0 8px #4a4a4a;
  }
  &.active {
    font-weight: bold;
    color: red;
  }
`;
