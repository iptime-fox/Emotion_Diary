import React from 'react';
import { useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';

function Diary() {
  const { id } = useParams();
  const data = useDiary(id);
  return <div>{id}번 일기</div>;
}

export default Diary;
