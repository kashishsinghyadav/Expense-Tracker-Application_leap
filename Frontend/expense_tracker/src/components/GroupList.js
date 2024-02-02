import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GroupList = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    // Fetch groups from the backend
    axios.get('/api/groups')
      .then(response => setGroups(response.data))
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <h2>Group List</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            {group.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
