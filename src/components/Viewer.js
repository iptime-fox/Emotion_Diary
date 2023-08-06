import React from 'react';
import { styled } from 'styled-components';
import { emotionList } from '../util';

const ViewerWrapper = styled.div`
  section {
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  h4 {
    font-size: 22px;
    font-weight: bold;
    margin: 30px 0;
  }
`;

const ImgWrapper = styled.div`
  background-color: #ececec;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &.ImgWrapper_1 {
    background-color: #64c864;
  }
  &.ImgWrapper_2 {
    background-color: #9dd772;
  }
  &.ImgWrapper_3 {
    background-color: #fdce17;
  }
  &.ImgWrapper_4 {
    background-color: #fd8446;
  }
  &.ImgWrapper_5 {
    background-color: #fd565f;
  }
`;

const EmotionName = styled.div`
  font-size: 25px;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
  p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 2.5;
  }
`;

function Viewer({ content, emotionId }) {
  const emotionItem = emotionList.find((it) => it.id === emotionId);

  return (
    <ViewerWrapper>
      <section>
        <h4>오늘의 감정</h4>
        <ImgWrapper className={[`ImgWrapper_${emotionId}`].join('')}>
          <img src={emotionItem.img} alt={emotionItem.name} />
          <EmotionName>{emotionItem.name}</EmotionName>
        </ImgWrapper>
      </section>
      <section>
        <h4>오늘의 일기</h4>
        <ContentWrapper>
          <p>{content}</p>
        </ContentWrapper>
      </section>
    </ViewerWrapper>
  );
}

export default Viewer;
