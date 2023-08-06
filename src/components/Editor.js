import React, { useCallback, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { emotionList, getFormattedDate } from '../util';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import EmotionItem from './EmotionItem';

const EditorWrapper = styled.div``;

const EditorSection = styled.div`
  margin-bottom: 40px;
  &.bottom_section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const EditorTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
  input,
  textarea {
    border: none;
    border-radius: 5px;
    background-color: #ececec;
    padding: 20px;
    font-size: 20px;
  }
  input {
    padding: 10px 20px;
    cursor: pointer;
  }
  textarea {
    width: 100%;
    min-height: 200px;
    box-sizing: border-box;
    resize: vertical;
  }
  &.emotion {
    display: flex;
    justify-content: space-around;
    gap: 2%;
  }
`;

function Editor({ initData, onSubmit }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: '',
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);
  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  const handleSubmit = () => {
    onSubmit(state);
  };
  const handleOnGoBack = () => {
    navigate(-1);
  };
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);

  return (
    <EditorWrapper>
      <EditorSection>
        <EditorTitle>오늘의 날짜</EditorTitle>
        <InputWrapper>
          <input type='date' value={state.date} onChange={handleChangeDate} />
        </InputWrapper>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 감정</EditorTitle>
        <InputWrapper className={'emotion'}>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </InputWrapper>
      </EditorSection>
      <EditorSection>
        <EditorTitle>오늘의 일기</EditorTitle>
        <InputWrapper>
          <textarea
            value={state.content}
            placeholder='오늘은 어땠나요?'
            onChange={handleChangeContent}></textarea>
        </InputWrapper>
      </EditorSection>
      <EditorSection></EditorSection>
      <EditorSection className={'bottom_section'}>
        <Button text={'취소하기'} onClick={handleOnGoBack} />
        <Button text={'작성 완료'} type={'positive'} onClick={handleSubmit} />
      </EditorSection>
    </EditorWrapper>
  );
}

export default Editor;
