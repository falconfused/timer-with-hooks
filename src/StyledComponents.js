import styled from 'styled-components';


export const BlueButton = styled.button`
  background-color: #4D5DAD;
  color: white;
  width: 120px;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  pointer-events: ${props => props.isDisabled ? 'none' : 'auto'};

`;