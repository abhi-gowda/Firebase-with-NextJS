import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/backend/db_config.js'; // Adjust the path based on your project structure

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "testing"));
      const dataList = querySnapshot.docs.map(doc => doc.data());
      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{item.username}</div> // Replace `item.name` with your data fields
      ))}
    </div>
  );
}

export default MyComponent;
