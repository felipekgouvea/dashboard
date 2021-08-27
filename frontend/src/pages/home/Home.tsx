import { useState } from 'react';
import Filter from '../../components/filter/Filter';
import Header from '../../components/header/Header';
import Sales from '../../components/sales/Sales';
import { FilterData } from '../../types/types';

function Home() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <div>
      <Header />
      <Filter onFilterChange={onFilterChange} />
      <Sales filterData={filterData} />
    </div>
  );
}

export default Home;
