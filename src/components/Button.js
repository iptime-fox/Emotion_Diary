import React from 'react';
import { styled } from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  white-space: nowrap;
  &.Btn_default {
    background-color: #ececec;
    color: black;
  }
  &.Btn_positive {
    background-color: #a1dd70;
    color: #555;
  }
  &.Btn_negative {
    background-color: #ff6464;
    color: white;
  }
`;

function Button({ text, type, onClick }) {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';
  return (
    <Btn className={[`Btn_${btnType}`]} onClick={onClick}>
      {text}
    </Btn>
  );
}

Btn.defaultProps = {
  type: 'default',
};

export default Button;
