import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RetreatCard from './RetreatCard';

const RetreatList = ({ filters, searchQuery, page }) => {
  const [retreats, setRetreats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRetreats = async () => {
      setLoading(true);
      const response = await axios.get('https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats', {
        params: {
          ...filters,
          search: searchQuery,
          page,
          limit: 5
        }
      });
      setRetreats(response.data);
      setLoading(false);
    };
    fetchRetreats();
  }, [filters, searchQuery, page]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="retreat-list">
      {retreats.map(retreat => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
};

export default RetreatList;
