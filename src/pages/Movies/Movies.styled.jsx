import styled from 'styled-components';

export const Form = styled.form`
  width: 500px;
  margin-left: auto;
  margin-right: auto;

  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;

  border-style: none;
  border-bottom: 1px solid rgba(26, 25, 25, 0.5);
  background-color: transparent;

  padding: 8px;
  font-size: 20px;
  outline: none;
  font-weight: 400;

  transition: all 0.5s ease-in-out;

  padding-right: 40px;

  cursor: pointer;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;

  font-size: 26px;

  position: absolute;
  top: 0;
  right: 0;
`;
