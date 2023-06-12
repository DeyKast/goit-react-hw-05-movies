import React, { useState } from 'react';
import { useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import css from './home.module.css';

import { GetTrend } from 'components/service/GetTrend';
import { TrendList } from 'components/TrendList/TrendList';

export const Home = () => {
  const [trendData, setTrendData] = useState(null);

  useEffect(() => {
    GetTrend()
      .then(data => {
        setTrendData(data);
      })
      .catch(error => {
        Notify.failure(error);
      });
  }, []);
  return (
    <main className={css.mainContainer}>
      <h1 className={css.mainTitle}>In trend today</h1>
      {trendData && <TrendList trendData={trendData} />}
    </main>
  );
};

export default Home;
