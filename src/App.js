import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import React, { useEffect, useReducer, useRef, useState } from 'react';

const Wrapper = styled.div`
  padding: 0 20px;
`;

const mockData = [
  {
    id: 'mock1',
    date: new Date().getTime(),
    content: '푸바오의 워토우 먹방일기',
    emotionId: 1,
  },
  {
    id: 'mock2',
    date: new Date().getTime(),
    content: '아이바오의 쌍둥바오 육아일기',
    emotionId: 2,
  },
  {
    id: 'mock3',
    date: new Date().getTime(),
    content: '낭만판다 러바오의 편식일기',
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'UPDATE': {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case 'DELETE': {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      return state;
    }
  }
}

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);
  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };
  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Wrapper>
            <Helmet>
              <title>Diary</title>
            </Helmet>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='/edit/:id' element={<Edit />} />
            </Routes>
          </Wrapper>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}
export default App;
