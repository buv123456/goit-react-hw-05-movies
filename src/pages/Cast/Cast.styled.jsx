import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
`;

export const Profile = styled.li`
  height: 100%;
  width: 100%;
  aspect-ratio: 2/3;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  background-color: #f9ecec;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const Title = styled.h3`
  font-size: 14px;
  height: 36px;
  padding: 0 5px;
  text-align: center;
`;

export const Photo = styled.img`
  max-width: 100%;
  display: block;
  overflow: hidden;
`;

export const Text = styled.p`
  font-size: 11px;
  margin-top: 4px;
`;

export const TextSt = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
`;
