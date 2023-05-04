import { useEffect, useState } from 'react';

const useProfiles = () => {
  const [profiles, setProfiles] = useState([]); 
  useEffect(() => {
    const fetchData = () => {
      fetch('https://randomuser.me/api/?results=3')
        .then((res) => res.json())
        .then((res) => setProfiles(res.results))
        .catch((error) => console.log(error));
    };
    fetchData();
  }, []);
  return { profiles };
};

export default useProfiles;
