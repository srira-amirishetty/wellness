import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header'
import RetreatCard from './components/RetreatCard';
import FilterSection from './components/Filter';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import BookingForm from './components/BookingForm';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const RetreatList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const App = () => {
  const [retreats, setRetreats] = useState([]);
  const [filteredRetreats, setFilteredRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ date: '', type: '' });

  useEffect(() => {
    const fetchRetreats = async () => {
      const response = await axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats');
      setRetreats(response.data);
      setFilteredRetreats(response.data);
      setTotalPages(Math.ceil(response.data.length / 10));
    };

    fetchRetreats();
  }, []);

  useEffect(() => {
    const filtered = retreats
      .filter(retreat =>
        retreat.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filters.date ? retreat.date === filters.date : true) &&
        (filters.type ? retreat.description.toLowerCase().includes(filters.type.toLowerCase()) : true)
      );

    setFilteredRetreats(filtered);
    setTotalPages(Math.ceil(filtered.length / 10));
  }, [searchQuery, filters, retreats]);

  const handleSearch = query => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });
    setCurrentPage(1);
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleBookingSubmit = bookingData => {
    // Handle booking submission
    console.log(bookingData);
  };

  return (
    <Container>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <FilterSection
        dateOptions={['2023-01-01', '2023-02-01']}
        typeOptions={['Yoga', 'Meditation']}
        onFilterChange={handleFilterChange}
      />
      <RetreatList>
        {filteredRetreats
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map(retreat => (
            <RetreatCard key={retreat.id} {...retreat} />
          ))}
      </RetreatList>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <BookingForm onSubmit={handleBookingSubmit} />
    </Container>
  );
};

export default App;
