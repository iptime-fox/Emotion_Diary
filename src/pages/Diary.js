import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import Button from '../components/Button';
import Header from '../components/Header';
import { getFormattedDate } from '../util';
import Viewer from '../components/Viewer';

function Diary() {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))}`;
    return (
      <>
        <Header
          title={title}
          leftChild={<Button text={'< 뒤로 가기'} onClick={goBack} />}
          rightChild={<Button text={'수정하기'} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </>
    );
  }
}

export default Diary;
