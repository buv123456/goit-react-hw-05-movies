import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const ListItem = styled.li``;
export const Card = styled(Link)`
  aspect-ratio: 2/3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 6px;
  background-color: #f9ecec;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const Poster = styled.img`
  width: 100%;
  overflow: hidden;
`;

export const Title = styled.h3`
  font-size: 14px;
  height: 36px;
  padding: 0 5px;
  margin-bottom: auto;
  text-align: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  color: white;
  width: 26px;
  height: 28px;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border-radius: 50%;
  background-color: #0f8d0f;
`;
