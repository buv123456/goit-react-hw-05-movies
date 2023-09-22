import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrap = styled.div`
  position: relative;
  height: 30%;
  font-size: 12px;
  display: flex;
  gap: 10px;
  box-shadow: 2px 2px 10px grey;
`;

export const GoBack = styled(Link)`
  font-size: 20px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 3px;
  z-index: 3;
  &:hover {
    color: red;
  }
`;
export const Overview = styled.p`
  width: 100%;
  height: auto;
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 30px;
  overflow: auto;
`;

export const Nav = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: 0px;
  color: blue;
  text-transform: uppercase;
  transition: all 200ms ease;
`;

export const LinkStyled = styled(NavLink)`
  &:hover {
    color: red;
    text-shadow: 0 0 10px grey;
  }
  &.active {
    color: red;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Rating = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
