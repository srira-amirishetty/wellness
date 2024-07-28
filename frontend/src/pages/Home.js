import React, { useState } from 'react';
import Header from '../components/Header';
import RetreatList from '../components/RetreatList';
import Filter from '../components/Filter';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div className="home">
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filter filters={filters} setFilters={setFilters} />
      <RetreatList filters={filters} searchQuery={searchQuery} page={page} />
      <div className="pagination">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Home;
