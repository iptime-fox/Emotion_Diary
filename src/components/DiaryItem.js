import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { getEmotionImgById } from '../util';
import Button from './Button';

const DiaryItemWrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
`;

const ImgSection = styled.div`
  cursor: pointer;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  &.ImgSection_1 {
    background-color: #64c964;
  }
  &.ImgSection_2 {
    background-color: #9dd772;
  }
  &.ImgSection_3 {
    background-color: #fdce17;
  }
  &.ImgSection_4 {
    background-color: #fd8446;
  }
  &.ImgSection_5 {
    background-color: #fd565f;
  }
  img {
    width: 50%;
  }
`;

const InfoSection = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;

const DateWrapper = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 5px;
`;

const ContentWrapper = styled.div`
  font-size: 18px;
`;

const ButtonSeciton = styled.div`
  min-width: 70px;
`;

function DiaryItem({ id, emotionId, content, date }) {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <DiaryItemWrapper>
      <ImgSection
        onClick={goDetail}
        className={[`ImgSection_${emotionId}`].join('')}>
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </ImgSection>
      <InfoSection onClick={goDetail}>
        <DateWrapper>
          {new Date(parseInt(date)).toLocaleDateString()}
        </DateWrapper>
        <ContentWrapper>{content.slice(0, 25)}</ContentWrapper>
      </InfoSection>
      <ButtonSeciton>
        <Button onClick={goEdit} text={'수정하기'} />
      </ButtonSeciton>
    </DiaryItemWrapper>
  );
}

export default DiaryItem;
