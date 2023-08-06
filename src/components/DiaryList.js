import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import DiaryItem from './DiaryItem';

const DiaryListWrapper = styled.div``;

const MenuWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
`;

const LeftCol = styled.div`
  select {
    margin-right: 10px;
    border: none;
    border-radius: 5px;
    background-color: #ececec;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 18px;
  }
`;

const RightCol = styled.div`
  flex-grow: 1;
  button {
    width: 100%;
  }
`;

const ListWrapper = styled.div``;

const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된 순' },
];

function DiaryList({ data }) {
  const [sortType, setSortType] = useState('latest');
  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === 'latest') {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const navigate = useNavigate();
  const onClickNew = () => {
    navigate('/new');
  };
  return (
    <DiaryListWrapper>
      <MenuWrapper>
        <LeftCol>
          <select value={sortType} onChange={onChangeSortType}>
            {sortOptionList.map((it, idx) => (
              <option value={it.value} key={idx}>
                {it.name}
              </option>
            ))}
          </select>
        </LeftCol>
        <RightCol>
          <Button
            type={'positive'}
            text={'새 일기 쓰기'}
            onClick={onClickNew}></Button>
        </RightCol>
      </MenuWrapper>
      <ListWrapper>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </ListWrapper>
    </DiaryListWrapper>
  );
}

export default DiaryList;
