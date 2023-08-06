import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Editor from '../components/Editor';
import { DiaryStateContext } from '../App';
import { getMonthRangeByDate } from '../util';
import DiaryList from '../components/DiaryList';

function Home() {
  const data = useContext(DiaryStateContext);
  const [pivoDate, setPivoDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  const onIncreaseMonth = () => {
    setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() - 1));
  };
  const HeaderTitle = `${pivoDate.getFullYear()}년 ${
    pivoDate.getMonth() + 1
  }월`;
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivoDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivoDate]);
  return (
    <div>
      <Header
        title={HeaderTitle}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
}

export default Home;
