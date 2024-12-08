import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { fetchData } from './utils/fetchData';
import BarChart from './components/BarChart';
import Legend from './components/Legend';

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  margin: 0 20px 20px;
  color: #898290;
`;

const Container = styled.div`
  position: relative;
  padding: 20px;
  max-width: max-content;
  margin: 0 auto;
`;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const url = 'https://rcslabs.ru/ttrp1.json';
        const result = await fetchData(url);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        {data ? (
          <>
            <Title>Количество пройденных тестов "{data.title}"</Title>
            <BarChart data={data} />
            <Legend />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </>
  );
};

export default App;
