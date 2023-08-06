import React from 'react';
import { styled } from 'styled-components';

const EmotionItemWrapper = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    margin-bottom: 10px;
  }
  span {
    font-size: 18px;
  }
  &.EmotionItemWrapper_off {
    background-color: #ececec;
  }
  &.EmotionItemWrapper_on_1 {
    background-color: #64c964;
    color: white;
  }
  &.EmotionItemWrapper_on_2 {
    background-color: #9dd772;
    color: white;
  }
  &.EmotionItemWrapper_on_3 {
    background-color: #fdce17;
    color: white;
  }
  &.EmotionItemWrapper_on_4 {
    background-color: #fd8446;
    color: white;
  }
  &.EmotionItemWrapper_on_5 {
    background-color: #fd565f;
    color: white;
  }
`;

function EmotionItem({ id, img, name, onClick, isSelected }) {
  const handleOnClick = () => {
    onClick(id);
  };
  return (
    <EmotionItemWrapper
      onClick={handleOnClick}
      className={[
        isSelected ? `EmotionItemWrapper_on_${id}` : `EmotionItemWrapper_off`,
      ].join('')}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </EmotionItemWrapper>
  );
}

export default EmotionItem;
