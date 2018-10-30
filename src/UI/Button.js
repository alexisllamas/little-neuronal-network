import styled from 'styled-components';

const Button = styled.button`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  color: #ffffff;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  &:active {
    position: relative;
	  top: 1px;
  }

  &:hover {
    background-color: #5cbf2a;
  }
`;

export default  Button
