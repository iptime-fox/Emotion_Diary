import React, { useState } from 'react';
import { styled } from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 20px 0;
  justify-content: space-between;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  div {
    display: flex;
  }
`;

const Title = styled.div`
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;

const HeaderLeft = styled.div`
  width: 25px;
  justify-content: start;
`;

const HeaderRight = styled.div`
  width: 25px;
  justify-content: end;
`;

function Header({ title, leftChild, rightChild }) {
  return (
    <HeaderWrapper>
      <HeaderLeft>{leftChild}</HeaderLeft>
      <Title>{title}</Title>
      <HeaderRight>{rightChild}</HeaderRight>
    </HeaderWrapper>
  );
}

export default Header;
